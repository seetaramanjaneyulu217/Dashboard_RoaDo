import React from 'react'
import SideBar from '../SideBar'
import MiddleScreen from '../MiddleScreen'
import EndScreen from '../EndScreen'

const DashBoard = () => {
    return (
        <div className='w-full flex flex-col lg:flex-row'>
            <SideBar />
            <MiddleScreen/>
            <EndScreen/>
        </div>
    )
}

export default DashBoard