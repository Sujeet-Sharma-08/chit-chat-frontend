import React from "react";
import Header from "./Header";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";

import { useSelector } from "react-redux";
const MessageContainer = () => {
  const { isSelectedTab } = useSelector((state) => state.selectedTab);

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!isSelectedTab ? (
        <NoChatSelected />
      ) : (
        <>
          <Header />
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  // const user = localStorage.getItem('user') || null;
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {user} ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
