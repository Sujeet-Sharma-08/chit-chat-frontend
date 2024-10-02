import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {

  const {selectedUser} = useSelector((state) => state.selectedTab)
  return (
    <div className='bg-slate-500 px-4 py-2 mb-2'>
        <span className='label-text'>To:</span>{" "}
        <span className='text-gray-800 font-bold '>{selectedUser}</span>

    </div>
  )
}

export default Header