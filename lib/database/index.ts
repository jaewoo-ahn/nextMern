import mongoose from "mongoose";

const MONGOBD_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatebase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGOBD_URI) throw new Error("MONGODB_URI is missing");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGOBD_URI, {
      dbName: "Evently",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};
