import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }



  console.log(req.connection.remoteAddress) 
  console.log(req.socket.remoteAddress)

  res.status(200).json({ });
};

export default handler;
