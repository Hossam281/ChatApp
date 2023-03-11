import React from 'react'
import {BsFillChatQuoteFill,BsChatLeftDots} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import {MdOutlineGroups} from 'react-icons/md'
import{RiContactsBookLine,RiSettings3Line} from 'react-icons/ri'

const Sidebar = () => {
  return (
    <div className='flex flex-col bg-[#393E46] shadow-md  p-2 '>
        <button className=' btn btn-ghost btn-circle mb-10'><BsFillChatQuoteFill color='#00ADB5' size={35}/></button>
        <div className='flex flex-col gap-3' >
        <button className='btn btn-ghost btn-circle'><CgProfile size={35}/></button>
        <button className='btn btn-ghost btn-square'><BsChatLeftDots size={30}/></button>
        <button className='btn btn-ghost btn-square'><MdOutlineGroups size={30}/></button>
        <button className='btn btn-ghost btn-square'><RiContactsBookLine size={30}/></button>
        <button className='btn btn-ghost btn-circle'><RiSettings3Line size={30}/></button>

        </div>
    </div>
  )
}

export default Sidebar