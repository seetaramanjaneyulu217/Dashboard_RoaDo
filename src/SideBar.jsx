import React from 'react'
import icon from './assets/icon.svg'
import sidebarIcons from './constants/sidebarIcons'

const SideBar = () => {
    return (
        <div className='h-screen md:w-20 py-8 flex flex-col items-center gap-y-5'>
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

export default SideBar