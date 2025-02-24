import { auth } from "@/auth";
import connectMongo from "@/libs/mongoose";
import Board from "@/models/Board";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowUturnLeftIcon } from "@heroicons/react/16/solid";
import CardBoardLink from "@/components/CardBoardLink";
import ButtonDeleteBorder from "@/components/ButtonDeleteBorder";

const getBoard = async (boardId) => {
  const session = await auth();
  await connectMongo();
  const board = await Board.findOne({
    _id: boardId,
    userId: session?.user?.id,
  });
  if (!board) {
    redirect("/dashboard");
  }
  return board;
};

const FeedbackBoard = async ({ params }) => {
  const { boardId } = await params;
  const board = await getBoard(boardId);
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
      <section className="max-w-5xl mx-auto py-12 px-5 space-y-12">
        <h1 className="font-extrabold text-xl mb-4">{board.name}</h1>
        <CardBoardLink boardId={board._id.toString()} />
        <ButtonDeleteBorder boardId={board._id.toString()} />
      </section>
    </main>
  );
};

export default FeedbackBoard;
