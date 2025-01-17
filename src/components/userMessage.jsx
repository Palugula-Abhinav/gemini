import React from "react";
import { marked } from "marked";

const userMessage = ({ content }) => {
  return (
    <div className="flex px-24 py-10 items-start gap-4 bg-[#343541]">
      <div className="p-2 border border-gray-500 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          width={20}
          height={20}
        >
          <path
            className="fill-white"
            d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"
          />
        </svg>
      </div>
      <p className="text-[1.2rem] text-white leading-9 pt-1 w-full">
        {content}
      </p>
    </div>
  );
};

export default userMessage;
