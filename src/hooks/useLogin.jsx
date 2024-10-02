// src/hooks/useLogin.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";

const useLogin = () => {

  const apiUrl = import.meta.env.VITE_API_URL; // for backend root url


  const [loginFormData, setLoginFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginSubmitHandler = async (e) => {
    e.preventDefault();

    const { username, password } = loginFormData;

    // Login data validation
    if (!username || !password) {
      toast.error("Provide all credentials!");
      return;
    }

    try {
      const response = await axios.post(
        `${apiUrl}/auth/login`,
        loginFormData,
        {
          withCredentials: true, // For handling cookies
        }
      );

      dispatch(login(response.data));
      toast.success(response.data.message);
      setLoginFormData({ username: "", password: "" });

      navigate("/chatpage");
    } catch (error) {
      // Handle errors
      if (error.response) {
        if (error.response.status === 404) {
          toast.error(error.response.data.message);
        } else if (error.response.status === 401) {
          toast.error(error.response.data.message);
        }
      }
    }
  };

  const handleChange = (e) => {
    setLoginFormData({
      ...loginFormData,
      [e.target.name]: e.target.value,
    });
  };

  return {
    loginFormData,
    handleChange,
    loginSubmitHandler,
  };
};

export default useLogin;
