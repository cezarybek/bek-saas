import connectMongo from "@/libs/mongoose";
import Board from "@/models/Board";
import { redirect } from "next/navigation";

const getBoard = async (boardId) => {
  await connectMongo();
  const board = await Board.findById(boardId);
  if (!board) {
    redirect("/");
  }
  return board;
};

const PublicFeedbackBoard = async ({ params }) => {
  const { boardId } = await params;
  const board = await getBoard(boardId);
  return <main>{board.name} (public)</main>;
};

export default PublicFeedbackBoard;
