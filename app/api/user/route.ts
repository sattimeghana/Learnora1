import { NextResponse } from "next/server";
import connectDB from "@/app/lib/mongodb";
import User from "@/app/models/User";

// GET ALL USERS
export async function GET() {
try {
await connectDB();

const users = await User.find();

return NextResponse.json({
  success: true,
  users,
});

} catch (error) {
console.error(error);

return NextResponse.json(
  {
    success: false,
    message: "Failed to fetch users",
  },
  { status: 500 }
);

}
}

// ADD USER
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
  message: "User added successfully",
  user,
});

} catch (error) {
console.error(error);

return NextResponse.json(
  {
    success: false,
    message: "Failed to add user",
  },
  { status: 500 }
);

}
}