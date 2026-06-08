import { NextResponse } from "next/server";
import connectDB from "@/app/lib/mongodb";
import User from "@/app/models/User";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  await connectDB();

  const { id } = await params;

  await User.findByIdAndDelete(id);

  return NextResponse.json({
    success: true,
    message: "User deleted successfully",
  });
}
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;
    const body = await request.json();

    const updatedUser = await User.findByIdAndUpdate(
      id,
      body,
      { new: true }
    );

    return NextResponse.json({
      success: true,
      user: updatedUser,
      message: "User updated successfully",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Update failed",
      },
      { status: 500 }
    );
  }
}