import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  data: any
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('hi im called')
  res.status(200).json({ data: { message: 'hi'}})
}