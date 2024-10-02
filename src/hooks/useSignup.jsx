import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const useSignup = () => {

  const apiUrl = import.meta.env.VITE_API_URL; // for backend root url


  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "male", // Default gender
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const { fullname, username, password, confirmPassword, gender } = formData;

    // Validate form data
    if (!fullname || !username || !password || !confirmPassword || !gender) {
      toast.error("Please fill out all fields!");
      return;
    }

    if(username.length >= 7){
      toast.error("usename can't exceed 7 more character!");
      return;

    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }
    if (password.length < 6) {
      toast.error("Passwords must be at least 6 characters long!");
      return;
    }

    // API connection
    setLoading(true);
    try {
      const response = await axios.post(
        `${apiUrl}/auth/signup`,
        formData,
        { withCredentials: true }
      );
      toast.success(response.data.message);
      setFormData({
        fullname: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "male",
      });
      navigate("/login");
    } catch (error) {
      console.log("Signup error:", error);
      if (error.response && error.response.status === 409) {
        toast.error(error.response?.data?.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return { formData, handleChange, submitHandler, loading };
};

export default useSignup;
