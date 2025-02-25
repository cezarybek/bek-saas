import CardPost from "@/components/CardPost";
import FormAddPost from "@/components/FormAddPost";
import connectMongo from "@/libs/mongoose";
import Board from "@/models/Board";
import Post from "@/models/Post";
import { redirect } from "next/navigation";

const getData = async (boardId) => {
  await connectMongo();
  const board = await Board.findById(boardId);
  if (!board) redirect("/");

  const posts = await Post.find({ boardId }).sort({ createdAt: -1 });
  return { board, posts };
};

const PublicFeedbackBoard = async ({ params }) => {
  const { boardId } = await params;
  const { board, posts } = await getData(boardId);
  return (
    <main className="min-h-screen bg-base-200">
      <section className="max-w-5xl mx-auto p-5">
        <h1 className="font-bold text-lg">{board.name}</h1>
      </section>
      <section className="max-w-5xl mx-auto px-5 flex flex-col md:flex-row gap-8 pb-12 items-start">
        <FormAddPost boardId={boardId} />
        <ul className="w-full space-y-4">
          {posts.map((post) => (
            <CardPost key={post._id} post={post} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default PublicFeedbackBoard;
