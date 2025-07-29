import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.status(200).json({
      message: 'Test endpoint is working',
    });
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
}
