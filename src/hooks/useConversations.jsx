import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { select } from "../redux/selectTabSlice";
import { setConversationsOfLoggednUser } from "../redux/conversationsSlice";


const useConversations = () => {

  const apiUrl = import.meta.env.VITE_API_URL; // for backend root url

  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]); // Local state for conversation data
  const [selectedTabId, setSelectedTabId] = useState(null); // State for selected conversation tab
  const dispatch = useDispatch();

  const fetchConversations = async () => {
    setLoading(true); // Set loading state while fetching data
    try {
      const response = await axios.get(
        `${apiUrl}/users/getAllUsers`,
        {
          withCredentials: true,
        }
      );

      const filteredUsers = response.data?.filteredUser || []; // Extract the filtered users
      setConversations(filteredUsers); // Set the local conversations state
      dispatch(setConversationsOfLoggednUser(filteredUsers)); // Dispatch to Redux store
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to load conversations"
      ); // Show error toast
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };

  const selectedTabHandler = (id, user) => {
    setSelectedTabId(id); // Set the selected tab ID locally
    dispatch(
      select({
        isSelectedTab: true,
        selectedUser: user.username,
        selectedUserId: user._id,
      })
    ); // Dispatching user selection with username and ID
  };

  useEffect(() => {
    fetchConversations(); // Fetch conversations when the component mounts
  }, [dispatch]);

  return {
    loading,
    conversations,
    selectedTabId,
    selectedTabHandler,
  };
};

export default useConversations;
