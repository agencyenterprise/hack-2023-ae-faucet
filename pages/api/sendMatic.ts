import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { ethers } from 'ethers';
import clientPromise from '../../mongoClient';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const client = await clientPromise;
  const db = client.db("ae-faucet");

  const requests = await db.collection("requests").find({}).toArray();
  console.log(requests);

  try {
    const {
      userAddress,
      captchaToken,
    } = req.body;

    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRETKEY}&response=${captchaToken}`
    );
    
    if (response.data.success) { //reCaptcha verification successfull
      const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
      const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

      const tx = await wallet.sendTransaction({
        to: userAddress,
        value: ethers.parseEther(process.env.NEXT_PUBLIC_MATIC_AMOUNT),
      });

      await tx.wait();

      res.status(200).json({
        transactionHash: tx.hash,
      });
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
