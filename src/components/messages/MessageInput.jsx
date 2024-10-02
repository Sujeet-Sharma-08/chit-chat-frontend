import React from "react";
import { BsSend } from "react-icons/bs";
import useMessageInput from '../../hooks/useMessageInput' // Custom hook for message input

const MessageInput = () => {
  const { message, setMessage, handleSubmit } = useMessageInput();

  return (
    <form onSubmit={handleSubmit} className="px-1">
      <div className="flex  w-full">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Send a message . . ."
          className="px-2 border text-sm rounded-lg block w-[95%] p-2.5 bg-gray-700 border-gray-600 text-white h-10"
        />
        <button
          type="submit"
          className="flex items-center w-14 md:w-10 lg:w-11 h-10  rounded-full bg-gray-700"
        >
          <BsSend className="w-6 h-6 ml-2 outline-none" />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
