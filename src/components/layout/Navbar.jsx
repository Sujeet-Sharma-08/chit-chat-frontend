import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useLogout from "../../hooks/useLogout";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const { handleLogout } = useLogout();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* navbar */}
      <div className="h-14 lg:h-16 relative bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100 mx-auto">
        <div className="w-11/12 mx-auto">
          <div className="flex justify-between">
            <Link to={"/"}>
              <h1 className="lg:text-2xl text-xl hover:text-blue-300 mt-3 font-bold ml-2 tracking-wide cursor-pointer">
                Chit Chat
              </h1>
            </Link>

            <div className="flex flex-col md:flex-row items-center">
              {/* hamburger-icon */}
              <div className="flex items-center md:hidden mt-5 mr-1">
                <button
                  onClick={toggleMenu}
                  className="text-gray-800 focus:outline-none"
                >
                  {isOpen ? (
                    <RxCross2 className="text-2xl text-white flex justify-end" />
                  ) : (
                    <RxHamburgerMenu className="text-2xl  text-white flex justify-end" />
                  )}
                </button>
              </div>

              <div className="hidden md:block">
                <ul className="flex flex-col md:-mt-1 lg:mt-0 md:flex-row gap-1 lg:gap-4 items-center cursor-pointer">
                  <li className="font-semibold hover:text-blue-400 text-sm md:[15px] lg:text-lg p-0 md:p-2">
                    <Link to="/" >
                      HOME
                    </Link>
                  </li>

                  {!token ? (
                    <>
                      <li className="font-semibold text-sm md:[15px] lg:text-lg p-0 md:p-2">
                        <Link
                          className="btn btn-outline btn-info sm:px-10"
                          to={"/login"}
                          onClick={toggleMenu}
                        >
                          Login
                        </Link>
                      </li>
                      <li className="font-semibold text-sm  md:[15px] lg:text-lg p-0 md:p-2">
                        <Link
                          className="btn btn-outline btn-info sm:px-10"
                          to={"/signup"}
                          onClick={toggleMenu}
                        >
                          sign up
                        </Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="font-semibold text-sm  md:[15px] lg:text-lg p-0 md:p-2">
                        <Link
                          className="btn btn-outline btn-info sm:px-10"
                          onClick={handleLogout}
                        >
                          logout
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          onClick={toggleMenu}
          className={`fixed inset-0 w-full md:hidden bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100 mx-auto h-[100vh] trnasform transition-all duration-300 ease-in-out z-20 ${
            isOpen ? " " : "translate-x-0"
          }`}
        >
          <div className="flex justify-between items-center mt-8 mb-2">
            <p className="text-white text-lg -mt-3 px-5">Menu</p>
            {isOpen ? (
              <RxCross2
                onClick={toggleMenu}
                className="text-white -mt-5 text-3xl flex mr-[1rem]"
              />
            ) : (
              <></>
            )}
          </div>
          <div className="h-[2px] w-full bg-white"></div>
          <ul className="flex flex-col mt-20 md:flex-row gap-1 lg:gap-4 items-center cursor-pointer">
            <li className="font-semibold  text-sm md:[15px] lg:text-lg p-0 md:p-2">
              <Link to="/" >
                HOME
              </Link>
            </li>

            {!token ? (
              <>
                <li className="font-semibold text-sm md:[15px] lg:text-lg p-0 md:p-2">
                  <Link
                    className="btn btn-outline btn-info sm:px-10"
                    to={"/login"}
                    onClick={toggleMenu}
                  >
                    Login
                  </Link>
                </li>
                <li className="font-semibold text-sm  md:[15px] lg:text-lg p-0 md:p-2">
                  <Link
                    className="btn btn-outline btn-info sm:px-10"
                    to={"/signup"}
                    onClick={toggleMenu}
                  >
                    sign up
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="font-semibold text-sm  md:[15px] lg:text-lg p-0 md:p-2">
                  <Link
                    className="btn btn-outline btn-info sm:px-10"
                   
                    onClick={handleLogout}
                  >
                    logout
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
