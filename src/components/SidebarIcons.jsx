import React from 'react'
import icon from '../assets/icon.svg'
import sidebarIcons from '../constants/sidebarIcons'
import { RxCross1 } from 'react-icons/rx'

const SidebarIcons = ({ screen, setOpenMenu }) => {
    return (
        <div className={`py-6 ${screen === 'mobile' ? 'flex' : 'hidden lg:flex'} lg:flex flex-col items-center gap-y-5`}>
            {screen === 'mobile' && <RxCross1 size={20} className='mb-10 cursor-pointer' onClick={() => setOpenMenu(false)} />}
            <img src={icon} alt='icon' className='mb-3' />
            {/* For elements in the sidebar */}
            {
                sidebarIcons.map(icon => (
                    <img key={icon.id} src={icon.icon} alt='icon' />
                ))
            }
        </div>
    )
}

export default SidebarIcons