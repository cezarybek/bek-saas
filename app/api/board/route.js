import { auth } from "@/auth";
import connectMongo from "@/libs/mongoose";
import Board from "@/models/Board";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    if (!body) {
      return NextResponse.json(
        { message: "Board name is required" },
        { status: 400 }
      );
    }
    const session = await auth();
    if (!session) {
      return NextResponse.json({ message: "Not authorized" }, { status: 401 });
    }

    await connectMongo();

    const user = await User.findById(session.user.id);

    const board = await Board.create({
      userId: user._id,
      name: body.name,
    });

    user.boards.push(board._id);
    await user.save();

    return NextResponse.json(board, { status: 201 });
  } catch (e) {
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const { searchParams } = req.nextUrl;
    const boardId = searchParams.get("boardId");

    if (!boardId) {
      return NextResponse.json(
        { message: "Board ID is required" },
        { status: 400 }
      );
    }

    const session = await auth();

    if (!session) {
      return NextResponse.json({ message: "Not authorized" }, { status: 401 });
    }

    await connectMongo();

    await Board.deleteOne({ _id: boardId, userId: session?.user?.id });

    const user = await User.findById(session?.user?.id);

    user.boards = user.boards.filter((id) => id.toString() !== boardId);

    return NextResponse.json(
      { message: "Board deleted successfully" },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
}
