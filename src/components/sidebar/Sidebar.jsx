import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div className='border-r w-1/2 border-slate-500 md:p-4 flex flex-col'>
      <SearchInput/>
      <div className='divider px-3'></div>
      <Conversations/>
      <LogoutButton/> 
    </div>
  )
}

export default Sidebar