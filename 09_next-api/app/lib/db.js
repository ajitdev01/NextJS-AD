import mongoose from "mongoose";
const MONGO_URI = process.env.MONGO_URI;

let cached = global.mongoose;
if(!cached){
    cached = global.mongoose = {conn:null, promise:null}
}

export default async function connectDB() {
    if (cached.conn) return cached.conn;
    if(!cached.conn){
        cached.promise = mongoose.connect(MONGO_URI).then(()=>{
            console.log("DB is connected!")
        })
    }
    cached.conn = await cached.promise;
    return cached.conn;    
}

//old code
// import mongoose from "mongoose";
// const MONGO_URI = process.env.MONGO_URI;
// // console.log(MONGO_URI);
// let connection = false;
// export default async function connectDB() {
//     const conn = mongoose.connect(MONGO_URI);
//     if(conn){
//         console.log("DB is connected");
//         connection = true;
//     }
// }