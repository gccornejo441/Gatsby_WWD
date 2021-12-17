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
    };

    try {
      await client.connect();
      const db = client.db(dbName);
      const sales = await db.collection(sales_collection!).insertOne(entry);
    } catch (err) {
      console.log("Error: ", err);
    } finally {
      await client.close();
      return res.redirect("/");
    }
    
  }
};

export default sales;