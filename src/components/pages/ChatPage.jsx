import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import MessageContainer from '../messages/MessageContainer';

const ChatPage = () => {
  return (
    <div className='flex justify-center items-center mt-1 xl:mt-5'>
        <div className='flex h-[530px] md:h-[550px] rounded-lg  overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <Sidebar />
      <MessageContainer />
    </div>
    </div>
  );
};

export default ChatPage;
