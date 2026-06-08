import { NextResponse } from "next/server";
import connectDB from "../../lib/mongodb";
import User from "../../models/User";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const user = await User.create({
      name: body.name,
      email: body.email,
      points: body.points,
      streak: body.streak,
    });

    return NextResponse.json({
      success: true,
      user,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to add user" },
      { status: 500 }
    );
  }
}