"use client";
import { TrashIcon } from "@heroicons/react/16/solid";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const ButtonDeletePost = ({ postId }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleDeletePost = async () => {
    try {
      const isUserSure = window.confirm(
        "Are you sure you want to delete this post?"
      );

      if (isUserSure && !isLoading) {
        setIsLoading(true);
        await axios.delete(`/api/post?postId=${postId}`);
        toast.success("Post deleted successfully.");
        router.refresh();
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.error ||
        error.message ||
        "An error occurred. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button className="btn btn-ghost" onClick={handleDeletePost}>
      {isLoading ? (
        <span className="loading loading-spinner loading-xs"></span>
      ) : (
        <TrashIcon className="size-4" />
      )}
      Delete
    </button>
  );
};

export default ButtonDeletePost;
