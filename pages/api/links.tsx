import navbarLinks from "../../public/scripts/Links.json";
import type { NextApiRequest, NextApiResponse } from "next";

const links = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(navbarLinks);
};

export default links;
