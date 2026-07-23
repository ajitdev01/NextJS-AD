import Image from "next/image";
import connectDB from "./lib/db";

export default function Home() {
//   const MONGO_URI = process.env.MONGO_URI
// console.log(MONGO_URI)
connectDB();
  return (
    <h1>API</h1>
  );
}
