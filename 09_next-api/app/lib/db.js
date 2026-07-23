import mongoose from "mongoose";
const MONGO_URI = process.env.MONGO_URI;
// console.log(MONGO_URI);
let connection = false;
export default async function connectDB() {
    const conn = mongoose.connect(MONGO_URI);
    if(conn){
        console.log("DB is connected");
        connection = true;
    }
}