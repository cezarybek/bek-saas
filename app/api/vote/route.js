import connectMongo from "@/libs/mongoose";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { searchParams } = req.nextUrl;
    const postId = searchParams.get("postId");
    if (!postId) {
      return NextResponse.json(
        { error: "Post ID is required" },
        { status: 400 }
      );
    }

    await connectMongo();

    const post = await Post.findById(postId);
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    post.votesCounter += 1;
    await post.save();
    return NextResponse.json({ hasUpvoted: true }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const { searchParams } = req.nextUrl;
    const postId = searchParams.get("postId");
    if (!postId) {
      return NextResponse.json(
        { error: "Post ID is required" },
        { status: 400 }
      );
    }
    await connectMongo();

    const post = await Post.findById(postId);
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    post.votesCounter -= 1;
    await post.save();
    return NextResponse.json({ hasUpvoted: false }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
