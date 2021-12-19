import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

const uri: string = process.env.MONGODB_URI!;
let dbName: string = process.env.MONGODB_DB!;
let msg_collection: string = process.env.MONGODB_COLLECTION_MSG!;

// Creates a new MongoClient
const client = new MongoClient(uri);

export const message = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {

  if (req.method === "POST") {
    let { firstName, lastName, email, message } = req.body;

    let entry = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      message: message,
    };

    try {
      await client.connect();
      const db = client.db(dbName);
      const message = await db.collection(msg_collection!).insertOne(entry);
      return res.redirect("/");
    } catch (err) {
      console.log(err);
    }

  } 
};

export default message;
