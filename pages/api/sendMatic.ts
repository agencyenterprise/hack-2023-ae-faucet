import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRETKEY}&response=${req.body.captchaToken}`
    );
    
    if (response.data.success) {
      //reCaptcha verification successfull
      res.status(200).json({
        transactionHash: '123',
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
