import { NextResponse } from "next/server";
import connectDB from "../../lib/mongodb";
import User from "../../models/User";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const user = await User.findByIdAndUpdate(
      body.userId,
      {
        $inc: {
          points: body.points,
        },
      },
      { new: true }
    );

    return NextResponse.json({
      success: true,
      user,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to update points",
      },
      { status: 500 }
    );
  }
}