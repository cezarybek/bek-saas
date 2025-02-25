"use client";
import { TrashIcon } from "@heroicons/react/16/solid";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const ButtonDeleteBorder = ({ boardId }) => {
  const router = useRouter();

  const handleDeleteBoard = async () => {
    try {
      const isUserSure = window.confirm(
        "Are you sure you want to delete this board?"
      );

      if (isUserSure) {
        await axios.delete(`/api/board?boardId=${boardId}`);
        toast.success("Board deleted successfully.");
        router.push("/dashboard");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.error ||
        error.message ||
        "An error occurred. Please try again.";
      toast.error(errorMessage);
    }
  };

  return (
    <button className="btn btn-ghost" onClick={handleDeleteBoard}>
      <TrashIcon className="size-4" /> Delete
    </button>
  );
};

export default ButtonDeleteBorder;
