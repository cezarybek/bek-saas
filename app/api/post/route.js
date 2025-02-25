import { auth } from "@/auth";
import connectMongo from "@/libs/mongoose";
import Post from "@/models/Post";
import { NextResponse } from "next/server";
import { Filter } from "bad-words";
import User from "@/models/User";

export async function POST(req) {
  try {
    const { title, description } = await req.json();

    const { searchParams } = req.nextUrl;
    const boardId = searchParams.get("boardId");

    const badWordsFilter = new Filter();

    const sanitizedTitle = badWordsFilter.clean(title);
    const sanitizedDescription = badWordsFilter.clean(description);

    if (!sanitizedTitle || !boardId) {
      return NextResponse.json(
        { error: "Title and board ID are required" },
        { status: 400 }
      );
    }
    const session = await auth();
    await connectMongo();

    const post = await Post.create({
      title: sanitizedTitle,
      description: sanitizedDescription,
      boardId,
      userId: session?.user?.id,
    });

    const savedPost = await post.save();

    return NextResponse.json(savedPost, { status: 201 });
  } catch (e) {
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const { searchParams } = await req.nextUrl;
    const postId = searchParams.get("postId");

    if (!postId) {
      return NextResponse.json(
        { error: "Post ID is required" },
        { status: 400 }
      );
    }

    const session = await auth();

    await connectMongo();

    const user = await User.findById(session?.user?.id);
    const post = await Post.findById(postId);

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    if (!user) {
      return NextResponse.json({ error: "Unauthenticated" }, { status: 401 });
    }

    if (!user.boards.includes(post.boardId.toString())) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    await post.deleteOne({ _id: postId });
    return NextResponse.json(
      { message: "Post deleted successfully" },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
}
