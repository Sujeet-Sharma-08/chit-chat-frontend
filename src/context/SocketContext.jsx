import { createContext, useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import io from "socket.io-client";

// Create SocketContext
const SocketContext = createContext();

// Custom hook to access SocketContext
export const useSocketContext = () => {
  return useContext(SocketContext);
};

// SocketContext Provider
export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null); // Local state for socket instance
  const [onlineUsers, setOnlineUsers] = useState([]); // Local state for online users
  const { user, id } = useSelector((state) => state.auth); // Redux state for user and id

  useEffect(() => {
    // If user is logged in, establish socket connection
    if (user && id) {
      const socketInstance = io("https://chit-chat-application-backend.onrender.com", {  // backend url
        query: {
          userId: id,
        },
      });

      setSocket(socketInstance); // Save the socket instance to state

      // Listen for 'getOnlineUsers' event from server and update online users
      socketInstance.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      // Clean up the socket when the component unmounts or user logs out
      return () => {
        socketInstance.close();
        setSocket(null); // Reset socket state
      };
    }

    // Clean up the socket when no user is logged in
    return () => {
      if (socket) {
        socket.close();
        setSocket(null); // Reset socket state
      }
    };
  }, [user, id]); // Dependency array includes user and id

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
