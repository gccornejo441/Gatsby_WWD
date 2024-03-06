import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

const uri: string = process.env.MONGODB_URI!;
let dbName: string = process.env.MONGODB_DB!;
let sales_collection: string = process.env.MONGODB_COLLECTION_SALES!;

// Creates a new MongoClient
const client = new MongoClient(uri);

const sales = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    let {
      firstName,
      lastName,
      email,
      company,
      address,
      property_type,
      city,
      zip,
      phone,
      product,
    } = req.body;

    let entry = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
      company: company,
      address: address,
      property_type: property_type,
      city: city,
      zip: zip,
      product: product,
    };

    try {
      await client.connect();
      const db = client.db(dbName);
      const sales = await db.collection(sales_collection!).insertOne(entry);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error connecting to the database" });
    } finally {
      await client.close();
    }
    
  }
};

export default sales;