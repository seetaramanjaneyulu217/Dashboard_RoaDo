import React, { useState } from 'react'
import icon from './assets/icon.svg'
import { RxHamburgerMenu } from "react-icons/rx";
import SidebarIcons from './components/SidebarIcons';


const SideBar = () => {

    const [openMenu, setOpenMenu] = useState(false)

    return (
        <>
            <div className='h-screen md:w-20 py-6 hidden lg:flex flex-col items-center gap-y-5'>
                {/* For elements in the sidebar */}
                <SidebarIcons screen={"desktop"} />
            </div>

            <div className='flex justify-between p-5 lg:hidden'>
                <img src={icon} alt='icon' className='w-11 h-11' />
                <div onClick={() => setOpenMenu(true)} className='border border-[#F7FAFF] bg-[#F7FAFF] rounded-full p-2'>
                    <RxHamburgerMenu size={25} />
                </div>
            </div>

            {/* for mobile view */}
            <div className={`${openMenu ? 'translate-x-0' : 'translate-x-full'} fixed top-0 right-0 flex flex-col w-3/12 h-screen py-10 ease-in-out duration-500 bg-[#F7FAFF] font-montserrat`}>
                {/* For options on mobile screen from right of the screen */}
                <SidebarIcons screen={"mobile"} setOpenMenu={setOpenMenu} />
            </div>
        </>
    )
}

export default SideBar