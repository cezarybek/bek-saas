import { auth } from "@/auth";
import connectMongo from "@/libs/mongoose";
import Board from "@/models/Board";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowUturnLeftIcon } from "@heroicons/react/16/solid";
import CardBoardLink from "@/components/CardBoardLink";
import ButtonDeleteBorder from "@/components/ButtonDeleteBorder";
import Post from "@/models/Post";
import CardPostAdmin from "@/components/CardPostAdmin";

const getData = async (boardId) => {
  const session = await auth();
  await connectMongo();
  const board = await Board.findOne({
    _id: boardId,
    userId: session?.user?.id,
  });
  if (!board) {
    redirect("/dashboard");
  }
  const posts = await Post.find({ boardId }).sort({ createdAt: -1 });
  return { board, posts };
};

const FeedbackBoard = async ({ params }) => {
  const { boardId } = await params;
  const { board, posts } = await getData(boardId);
  return (
    <main className="bg-base-200 min-h-screen">
      <section className="bg-base-100">
        <div className="max-w-5xl mx-auto flex py-3 px-5">
          <Link href="/dashboard" className="btn">
            <ArrowUturnLeftIcon className="size-4" name="arrow-left" />
            Back
          </Link>
        </div>
      </section>
      <section className="max-w-5xl mx-auto py-12 px-5 flex flex-col md:flex-row gap-12">
        <div className="space-y-8">
          <h1 className="font-extrabold text-xl mb-4">{board.name}</h1>
          <CardBoardLink boardId={board._id.toString()} />
          <ButtonDeleteBorder boardId={board._id.toString()} />
        </div>

        <ul className="space-y-4">
          {posts.map((post) => (
            <CardPostAdmin key={post._id} post={post} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default FeedbackBoard;
