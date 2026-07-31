import connectDB from "@/app/lib/db";
import User from "@/app/lib/schema";
import { NextResponse } from "next/server";
import { request } from "http";

export async function DELETE(request, {params}) {
    await connectDB();
    const { id: userId } = await params; 
    try {
        const deletedUser = await User.findByIdAndDelete(userId);

        if(!deletedUser){
            return NextResponse.json({
                message: "User not found!"
            });
        }
        return NextResponse.json({
            message: "User ko uda diya gya db se!"
        });
    } catch (error) {
        return NextResponse.json({
            message: error
        });
    }

}

// 1. Pass the 'request' parameter into the function
export async function PUT(request, {params}) {
    try {
        await connectDB();
    const { id: userId } = await params; 
        
        // 2. Use request.json() instead of request.body()
        const body = await request.json();
        const { name, email, phone, address } = body;
        
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            {name, email, phone, address},
            {new: true}
        ) 

        if(!updatedUser){
            return NextResponse.json({
                message: "User not found!"
            });
        }
        
        return NextResponse.json(
            { message: "User updated successfully!",
            data : updatedUser
             }, 
            { status: 201 },
        );

    } catch (error) {
        // 4. Return an error status code and access error.message
        return NextResponse.json(
            { message: error.message || "Something went wrong" }, 
            { status: 500 }
        ); 
    }
}
