// app/api/verify-user/route.js

import { db } from "@/config/db";
import { Users } from "@/config/schema";
import { eq } from "drizzle-orm";

export async function POST(req) {
  try {
    const { user } = await req.json(); // ✅ Correctly parse JSON body

    const userEmail = user?.primaryEmailAddress?.emailAddress;

    console.log("Verifying user:", userEmail);

    // 1. Check if user already exists in the database
    const userInfo = await db
      .select()
      .from(Users)
      .where(eq(Users.email, userEmail));

    // 2. If user does not exist, insert them
    if (userInfo.length === 0) {
      const saveResult = await db
        .insert(Users)
        .values({
          name: user?.fullName,
          email: userEmail,
          imageUrl: user?.imageUrl,
        })
        .returning();

      return new Response(JSON.stringify({ result: saveResult[0] }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    // 3. If user already exists, return existing user
    return new Response(JSON.stringify({ result: userInfo[0] }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Error verifying user:", error);
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
