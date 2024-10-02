import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { getMessage} from '../redux/messageSlice'

const useMessageInput = () => {

  const apiUrl = import.meta.env.VITE_API_URL; // for backend root url


  const dispatch = useDispatch();
  const { selectedUserId } = useSelector((state) => state.selectedTab);
  const { fetchedMessages } = useSelector((state) => state.message);
  const [message, setMessage] = useState("");

  // Send message to the selected user
  const sendMessageToSelectedUser = async (messageText) => {
    try {
      const response = await axios.post(
        `${apiUrl}/message/send/${selectedUserId}`,
        { message: messageText },
        { withCredentials: true }
      );

      // Ensure fetchedMessages is always an array
      const currentMessages = fetchedMessages || [];

      // Update the messages in the Redux store with the new message
      const newMessage = response.data.newMessage;
      dispatch(getMessage([...currentMessages, newMessage]));

      toast.success(response.data.message);
    } catch (error) {
      // Notify failure
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  // Handle form submit (message send)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim()) {
      await sendMessageToSelectedUser(message); // Send the message
      setMessage(""); // Clear input after sending
    }
  };

  return { message, setMessage, handleSubmit };
};

export default useMessageInput;
