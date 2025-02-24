"use client";

import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/16/solid";

const FAQListItem = ({ qa }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className="py-6 font-semibold w-full border-b">
      <button
        className="flex items-center justify-between w-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>{qa.question}</p>
        {isOpen ? (
          <MinusIcon className="size-4" />
        ) : (
          <PlusIcon className="size-4" />
        )}
      </button>
      {isOpen ? <p className="opacity-80 mt-3 text-sm">{qa.answer}</p> : <></>}
    </li>
  );
};

export default FAQListItem;
