import React from "react";
import "./Messages.css";
import { useSelector } from "react-redux";
import { extractTime } from "../../utils/ExtractTime";
import useMessages from "../../hooks/useMessages"; // Custom hook for handling messages

const Messages = () => {
  const { id } = useSelector((state) => state.auth); // Logged-in user ID
  const { fetchedMessages, messagesEndRef } = useMessages(); // Use the custom hook

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!fetchedMessages?.length ? (
        <div className="text-white text-center mt-[10rem] text-xl font-bold">
          Send a message <br /> to start the chat with fellows
        </div>
      ) : (
        <>
          {fetchedMessages.map((m, index) => {
            const fromMe = m.senderId === id; // Check if the message is from the logged-in user
            const chatClassName = fromMe ? "chat-end" : "chat-start";
            const formattedDate = extractTime(m.createdAt); // Format the date

            const bubbleBgColor = fromMe
              ? "bg-blue-500 text-white"
              : "bg-gray-700 text-white";

            return (
              <div key={index} className={`chat ${chatClassName}`}>
                <div className={`chat-bubble -ml-12 pb-2 ${bubbleBgColor}`}>
                  {m.message}
                </div>
                <div className="opacity-50 text-xs mt-1">at {formattedDate}</div>
              </div>
            );
          })}
          {/* Add an empty div to serve as the scroll target */}
          <div ref={messagesEndRef} />
        </>
      )}
    </div>
  );
};

export default Messages;
