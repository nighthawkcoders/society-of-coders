// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getAllPostData } from '../../lib/postdata';

export default (req, res) => {
  const data = getAllPostData();
  res.status(200).json(data);
}