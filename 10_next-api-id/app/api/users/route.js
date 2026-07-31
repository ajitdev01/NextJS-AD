import connectDB from "@/app/lib/db";
import User from "@/app/lib/schema";
import { NextResponse } from "next/server";
import { request } from "http";

export async function GET() {
    await connectDB();

    try {
        const users = await User.find({});
        return NextResponse.json({
            message: "success",
            data: users
        });
    } catch (error) {
        return NextResponse.json({
            message: error
        });
    }

}
// export async function POST(request) {
//     try {
//         await connectDB();
//         const body = await request.json();
//         const {name, email, phone, address} = body;
//         // const newUser = {
//         //     name,
//         //     email,
//         //     phone,
//         //     address
//         // }
//         await User.create({name,email,phone,address});
//         return NextResponse.json({
//             message:"User added successfully!"
//         })

//     } catch (error) {
//         return NextResponse.json({
//             message: error
//         }); 
//     }
// }

// 1. Pass the 'request' parameter into the function
export async function POST(request) {
    try {
        await connectDB();
        
        // 2. Use request.json() instead of request.body()
        const body = await request.json();
        const { name, email, phone, address } = body;
        
        // 3. Directly pass the object to create()
        await User.create({ name, email, phone, address });
        
        return NextResponse.json(
            { message: "User added successfully!" }, 
            { status: 201 }
        );

    } catch (error) {
        // 4. Return an error status code and access error.message
        return NextResponse.json(
            { message: error.message || "Something went wrong" }, 
            { status: 500 }
        ); 
    }
}
