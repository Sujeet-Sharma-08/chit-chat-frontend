import React, { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import { useDispatch, useSelector } from "react-redux";
import { getMessage } from "../redux/messageSlice";
import notificationSound from '../assets/sound/notification_sounds.mp3'

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const dispatch = useDispatch();
  const {fetchedMessages } = useSelector((state) => state.message);

  useEffect(() => {
    // Listen for the new message event
    socket?.on("newMessage", (newMessage) => {

        const sound =  new Audio(notificationSound);
        sound.play();
       
      // Dispatch the action to update the Redux store with the new message
      dispatch(getMessage([...fetchedMessages, newMessage]));
    });

    // Clean up the event listener when the component unmounts
    return () => socket?.off("newMessage");
  }, [socket, dispatch, fetchedMessages]);
};

export default useListenMessages;
