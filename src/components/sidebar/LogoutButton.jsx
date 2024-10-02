import React from "react";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout"; // Importing custom hook

const LogoutButton = () => {
  const { handleLogout } = useLogout(); // Using the custom hook

  return (
    <div onClick={handleLogout} className="mt-auto hover:text-red-500 flex gap-1 cursor-pointer">
      <BiLogOut className="w-6 h-6 text-white" />
      <span className="text-white">Logout</span>
    </div>
  );
};

export default LogoutButton;
