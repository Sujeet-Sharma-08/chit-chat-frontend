import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { logout } from "../redux/authSlice"; // Redux action
import toast from "react-hot-toast";

const useLogout = () => {

  const apiUrl = import.meta.env.VITE_API_URL; // for backend root url

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        `${apiUrl}/auth/logout`,
        {},
        { withCredentials: true }
      );
      toast.success(response.data.message); // Show success message
      dispatch(logout(response.data)); // Dispatch logout action to Redux
      navigate("/"); // Redirect to home page
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to logout"); // Show error toast
    }
  };

  return { handleLogout };
};

export default useLogout;
