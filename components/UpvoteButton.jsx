"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { ChevronUpIcon } from "@heroicons/react/16/solid";

const UpvoteButton = ({ postId, initalVotesCounter }) => {
  const localStorageVoteKey = `prioritize_vote_${postId}`;

  const [isVoting, setIsVoting] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);
  const [votesCounter, setVotesCounter] = useState(initalVotesCounter);

  useEffect(() => {
    const hasVoted = localStorage.getItem(localStorageVoteKey) === "true";
    setHasVoted(hasVoted);
  }, []);

  const handleUpvote = async () => {
    if (isVoting) return;

    setIsVoting(true);

    try {
      let response;
      if (hasVoted) {
        response = await axios.delete(`/api/vote?postId=${postId}`);
        setHasVoted(false);
        setVotesCounter(votesCounter - 1);
        localStorage.removeItem(localStorageVoteKey);
      } else {
        response = await axios.post(`/api/vote?postId=${postId}`);
        setHasVoted(true);
        setVotesCounter(votesCounter + 1);
        localStorage.setItem(localStorageVoteKey, "true");
      }
      setHasVoted(response.data.hasUpvoted);
      toast.success("Post upvoted successfully.");
    } catch (error) {
      const errorMessage =
        error.response?.data?.error ||
        error.message ||
        "An error occurred. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsVoting(false);
    }
  };

  return (
    <button
      className={`group border px-4 py-2 rounded-xl text-lg ${
        hasVoted
          ? "bg-primary text-primary-content border-transparent"
          : "bg-base-100 text-base-content hover:border-base-content/25 duration-200"
      }`}
      onClick={handleUpvote}
    >
      <ChevronUpIcon className="size-6 group-hover:-translate-y-0.5 duration-500" />
      {isVoting ? (
        <span className="loading loading-spinner loading-xs"></span>
      ) : (
        <div className={`${hasVoted ? "" : "group-hover:text-primary"}`}>
          {votesCounter}
        </div>
      )}
    </button>
  );
};

export default UpvoteButton;
