import React from "react";

import { getRandomEmoji } from "../../utils/Emojis.js";
import { useSocketContext } from "../../context/SocketContext.jsx";
import useConversations from "../../hooks/useConversations"; // Custom hook

const Conversations = () => {
  const { loading, conversations, selectedTabId, selectedTabHandler } =
    useConversations(); // Hook handling logic
  const { onlineUsers } = useSocketContext(); // Use socket context for online users

  return (
    <div className="py-2 flex flex-col gap-2 overflow-y-auto">
      {loading ? (
        <div>Loading...</div> // Loading state message
      ) : conversations.length > 0 ? (
        conversations.map((conversation) => {
          const isUserOnline = onlineUsers.includes(conversation._id); // Check if the user is online

          return (
            <div
              key={conversation._id}
              onClick={() => selectedTabHandler(conversation._id, conversation)}
              className={`hover:bg-sky-500  rounded p-2 py-1 cursor-pointer ${
                selectedTabId === conversation._id ? "bg-sky-500" : ""
              }`}
            >
              <div className="flex md:gap-12 justify-between items-center">
                <div className="flex gap-2">
                  <div
                    className={`w-9 md:w-11 rounded-full avatar ${
                      isUserOnline ? "online" : ""
                    }`}
                  >
                    <img
                      className="w-full h-full bg-cover"
                      src={conversation.profilePic}
                      alt={conversation.fullname}
                    />
                  </div>
                  <p className="font-semibold text-gray-200 mt-2">
                    {conversation.fullname}
                  </p>
                </div>

                <div className="text-xl ml-4">{getRandomEmoji()}</div>
              </div>
              <div className="divider my-0 py-0 h-[2px] mt-1" />
            </div>
          );
        })
      ) : (
        <div>No conversations found</div> // Empty state message
      )}
    </div>
  );
};

export default Conversations;
