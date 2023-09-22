import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { ethers } from 'ethers';
import clientPromise from '../../mongoClient';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const {
      userAddress,
      captchaToken,
    } = req.body;

    const ipAddress = `${req.headers['x-forwarded-for']}@${req.socket.remoteAddress}`;
    console.log(req.headers['x-forwarded-for'], req.connection.remoteAddress, req.socket.remoteAddress);

    const client = await clientPromise;
    const db = client.db("ae-faucet");

    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRETKEY}&response=${captchaToken}`
    );
    
    if (response.data.success) { //reCaptcha verification successfull
      const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
      const balance = await provider.getBalance(userAddress);

      if (balance >= ethers.parseEther(process.env.MAX_BALANCE)) {
        res.status(200).json({
          success: false,
          message: "Matic Tokens are ideally used to pay for gas, the address you're requesting from has enough to pay for gas.",
        });
        return;
      }
      
      const requests = await db.collection("requests").find({
        $or: [
          { address: userAddress },
          { ipAddress },
        ],
        timestamp: {
          $gte: Date.now() - 24 * 60 * 60 * 1000,
        }
      }).toArray();

      if(requests.length == 0) {
        const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

        const tx = await wallet.sendTransaction({
          to: userAddress,
          value: ethers.parseEther(process.env.NEXT_PUBLIC_MATIC_AMOUNT),
        });

        await tx.wait();

        await db.collection("requests").insertOne({
          address: userAddress,
          timestamp: Date.now(),
          txHash: tx.hash,
          amount: process.env.NEXT_PUBLIC_MATIC_AMOUNT,
          ipAddress,
        });

        res.status(200).json({
          success: true,
          transactionHash: tx.hash,
        });
      } else {
        res.status(200).json({
          success: false,
          message: "You have already requested MATIC recently, please try again later.",
        });
      }
    } else {
      // reCAPTCHA verification failed
      res.status(400).send('reCAPTCHA verification failed.');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};

export default handler;
