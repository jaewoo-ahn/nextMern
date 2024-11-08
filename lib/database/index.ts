import mongoose from "mongoose";

const MONGOBD_URL = process.env.MONGODB_URL;

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatebase = async () => {
  if (cached.conn) return cached.conn;
};
