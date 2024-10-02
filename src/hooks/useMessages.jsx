import { useEffect, useRef } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getMessage } from "../redux/messageSlice";
import toast from "react-hot-toast";

const useMessages = () => {

  const apiUrl = import.meta.env.VITE_API_URL; // for backend root url


  const dispatch = useDispatch();
  const { selectedUserId } = useSelector((state) => state.selectedTab);
  const { fetchedMessages } = useSelector((state) => state.message);
  const messagesEndRef = useRef(null);

  // Function to scroll to the bottom
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Fetch messages for the selected user when component mounts or user changes
  useEffect(() => {
    const fetchMessages = async () => {
      if (!selectedUserId) {
        toast.error("No user selected");
        return;
      }

      try {
        const response = await axios.get(
          `${apiUrl}/message/${selectedUserId}`,
          { withCredentials: true }
        );
        dispatch(getMessage(response.data.messages)); // Dispatch fetched messages
      } catch (error) {
        toast.error(error.response?.data?.message || "Failed to load messages");
      }
    };

    fetchMessages();
  }, [selectedUserId, dispatch]);

  // Scroll to the bottom when fetchedMessages change
  useEffect(() => {
    scrollToBottom();
  }, [fetchedMessages]);

  return { fetchedMessages, messagesEndRef };
};

export default useMessages;
