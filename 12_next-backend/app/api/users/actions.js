"use server"
import connectDB from "@/app/lib/db";
import User from "@/app/lib/schema";
import { revalidatePath } from "next/cache";

export async function createUser(FormData) {
    try {
        await connectDB();

        const name = FormData.get('name');
        const email = FormData.get('email');
        const phone = FormData.get('phone');
        const address = FormData.get('address');


        // 3. Directly pass the object to create()
        await User.create({ name, email, phone, address });
        revalidatePath('/');
        return {
            success: true,
            message: "User added successfully!"
        };

    } catch (error) {
        return {
            success: false,
            message: "Got Error!"
        };
    }
}
