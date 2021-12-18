import { SitemapStream, streamToPromise } from "sitemap";
import type { NextApiRequest, NextApiResponse } from "next";

const SiteMap = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const smStream = new SitemapStream({
      hostname: `https://${req.headers.host}`});

    // XML sitemap string
    const sitemapOutput = (await streamToPromise(smStream)).toString();

    // Change headers
    res.writeHead(200, {
      "Content-Type": "application/xml",
    });

    // Display output to user
    res.end(sitemapOutput);
  } catch (e) {
    console.log(e);
    res.send(JSON.stringify(e));
  }
};

export default SiteMap;
