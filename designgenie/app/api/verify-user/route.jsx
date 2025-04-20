import { db } from "@/config/db";
import { Users } from "@/config/schema";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";

export async function POST(req) {
    const { user } = await req.json();

    // Validate user object and required properties
    if (!user || !user.primaryEmailAddress || !user.primaryEmailAddress.emailAddress) {
        return NextResponse.json({ error: "Invalid user data" }, { status: 400 });
    }

    try {
        // Check if user already exists
        const userInfo = await db.select().from(Users)
            .where(eq(Users.email, user.primaryEmailAddress.emailAddress));
        
        console.log("User ", userInfo);

        // If user does not exist, add new user to database
        if (userInfo.length === 0) {
            const saveResult = await db.insert(Users)
                .values({
                    name: user.fullName,
                    email: user.primaryEmailAddress.emailAddress,
                    imageUrl: user.imageUrl,
                }).returning({ Users });

            return NextResponse.json({ result: saveResult[0].Users });
        }

        // Return existing user info
        return NextResponse.json({ result: userInfo[0] });
    } catch (e) {
        console.error("Error occurred:", e); // Log the error for debugging
        return NextResponse.json({ error: "An error occurred while processing your request." }, { status: 500 });
    }
}