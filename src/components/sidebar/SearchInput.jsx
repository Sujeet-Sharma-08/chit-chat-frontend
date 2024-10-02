import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState(""); // Initialized with an empty string
  const { conversations } = useSelector((state) => state.conversations); // Get conversations from Redux state

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    // Check if search is empty
    if (!search.trim()) {
      return toast.error("Search term cannot be empty!");
    }

    // Check for a minimum of 3 characters
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long!");
    }

    // Find a conversation based on fullname
    const conversation = conversations.find((c) =>
      c.fullname.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      // You can handle what happens when a match is found
      toast.success(`Conversation found with ${conversation.fullname}`);
      console.log("Conversation Found: ", conversation);
      // Optionally set the selected conversation
      // dispatch(selectConversation(conversation)); // if you want to handle selection
    } else {
      toast.error("No conversation found!");
    }
  };

  return (
    <form onSubmit={handleSearchSubmit} className="flex items-center md:gap-1">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
        className="w-32 h-10 md:w-full  input input-bordered rounded-full"
      />
      <button type="submit" className="w-8 h-8 md:w-10 rounded-full bg-sky-500 text-white">
        <FaSearch className="w-4 h-4 ml-2 md:ml-2.5 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
