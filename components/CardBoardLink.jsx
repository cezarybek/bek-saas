"use client";

import { DocumentDuplicateIcon } from "@heroicons/react/16/solid";
import toast from "react-hot-toast";

const CardBoardLink = ({ boardId }) => {
  const copyLink = () => {
    navigator.clipboard.writeText(boardLink);
    toast.success("Link copied to clipboard.");
  };

  const boardLink = `${
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://prioritize.cezarybek.com"
  }/board/${boardId}`;

  return (
    <div className="bg-base-100 rounded-3xl text-sm px-4 py-2.5 flex items-center max-w-96">
      <p className="truncate">{boardLink}</p>
      <button onClick={copyLink} className="btn btn-sm btn-neutral btn-square">
        <DocumentDuplicateIcon className="size-5" />
      </button>
    </div>
  );
};

export default CardBoardLink;
