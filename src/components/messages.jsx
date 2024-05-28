"use client";
import React from "react";
import UserMessage from "./userMessage";
import RoboMessage from "./roboMessage";

const Messages = ({ content }) => {
  return (
    <div>
      {content.map((item, index) => {
        return item.role === "user" ? (
          <UserMessage key={index} content={item.parts[0].text} />
        ) : (
          <RoboMessage key={index} content={item.parts[0].text} />
        );
      })}
    </div>
  );
};

export default Messages;
