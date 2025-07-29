// lib/mongodb.js
import { MongoClient } from 'mongodb';

const uri =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/your-database';
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Extend global type to include _mongoClientPromise
declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise!;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export async function getDb() {
  const client = await clientPromise;
  return client.db();
}
