"use client";
import { useState, useEffect } from "react";
import Messages from "@/components/messages";
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyD971DCcDtOYLk5xsWnbB-HBHtiC8KCb08");
const model = genAI.getGenerativeModel({ model: "gemini-pro" });
import mongoose from "mongoose";
import { use } from "marked";

let chat = [];

export default async ({ params }) => {
  let [prompt, setPrompt] = useState("");
  let [content, setContent] = useState([]);
  let [conversationExists, setConversationExists] = useState(false);

  await fetch("http://localhost:3000/api/checkConversation", {
    method: "POST",
    body: JSON.stringify({
      content: content,
      key: params.id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    console.log(res);
    if (res.status == "success") {
      setConversationExists(true);
      setContent(res.conversation);
    } else {
      setConversationExists(false);
    }
  });

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const userMessage = {
      role: "user",
      parts: [{ text: prompt }],
    };

    // Update content with user message
    setContent((prevContent) => [...prevContent, userMessage]);

    document.querySelector("#input").value = "";
    chat = model.startChat({
      history: content,
    });

    const msg = prompt;

    let result = await chat.sendMessage(msg);
    let response = result.response;
    let text = response.text();
    console.log(text);
    // Update content with model message
    setContent((prevContent) => [
      ...prevContent,
      { role: "model", parts: [{ text: text }] },
    ]);
    setPrompt("");
  };

  return (
    <div className="box-border w-screen max-h-screen ml-0 md:ml-80 relative bg-[#343541] flex pb-28">
      <div className="overflow-scroll h-auto w-full" id="messageDashboard">
        <header className="bg-[#444654] top-0 left-0 right-0 h-10 text-gray-300 flex items-center justify-center text-[0.8rem]">
          Model: Gemini 1
        </header>
        <Messages content={content} />
      </div>
      <div className="absolute bottom-0 min-h-28 w-full bg-[#343541] flex items-center flex-col justify-center px-20 gap-4 py-8">
        <div className="w-full flex gap-[1rem]">
          <input
            id="input"
            placeholder="Ask Gemini"
            value={prompt}
            onChange={(ev) => {
              setPrompt(ev.target.value);
            }}
            className="bg-[#40414f] w-full border border-1 border-[#51515b] p-3 text-gray-400 rounded-md focus:outline-none focus:border-gray-200 transition-colors caret-gray-400 placeholder:text-gray-400"
          />
          <button
            onClick={handleSubmit}
            className="text-white px-8 py-1 outline outline-gray-400 outline-1 rounded-md hover:bg-gray-400 transition-colors"
          >
            Ask
          </button>
        </div>
        <p className="text-[rgb(217,217,227)] text-[0.8rem] ">
          Gemini may produce inaccurate information about people, places, or
          facts.
        </p>
      </div>
    </div>
  );
};
