import React from 'react'
import middleScreenIcons from './constants/middleScreenIcons'
import { useSelector } from 'react-redux'
import DashBoardCard from './components/DashBoardCard'
import quickActionItems from './constants/quickActionsItems'
import greaterthan from './assets/greaterthan.svg'

const MiddleScreen = () => {

    const dashboardData = useSelector(state => state.dashBoardData.dashBoardData)

    return (
        <div className='w-8/12 px-5 py-8 bg-[#F7FAFF]'>
            {/* For heading and icons */}
            <div className='flex items-center justify-between'>
                <h1 className='text-2xl font-montserrat font-medium'>Dashboard</h1>
                <div className='flex items-center gap-x-5 px-5 py-2 rounded-full border border-white bg-white'>
                    {
                        middleScreenIcons.map((icon, index) => (
                            <>
                                <img key={icon.id} src={icon.icon} alt='icon' />
                                {index !== middleScreenIcons.length - 1 && <div className='border border-[#CBCBCB] h-4'></div>}
                            </>
                        ))
                    }
                </div>
            </div>

            {/* For Cards data */}
            <div className='flex gap-x-3 justify-between w-full mt-5'>
                {
                    dashboardData.map(row => (
                        <DashBoardCard key={row.id} row={row} />
                    ))
                }
            </div>

            {/* For quick actions */}
            <div className='mt-8'>
                <h1 className='font-roboto font-medium text-lg'>Quick Actions</h1>

                {/* for icons and data */}
                <div className='flex justify-around border border-white bg-white rounded-2xl w-full px-5 py-5 mt-3'>
                    {
                        quickActionItems.map((item, index) => (
                            <div key={item.id} className='flex gap-x-16'>
                                <div className='flex flex-col items-center gap-y-2'>
                                    <img src={item.icon} alt='icon' />
                                    <p className='font-roboto font-medium text-xs'>{item.text}</p>
                                </div>
                                {index !== quickActionItems.length - 1 && <div className='border border-[#CBCBCB] h-11'></div>}
                            </div>
                        ))
                    }
                </div>
            </div>


            {/* For high priority alerts */}
            <div className='mt-8'>
                <div className='flex justify-between'>
                <h1 className='font-roboto font-medium text-lg'>High Priority alerts (14)</h1>
                <div className='flex items-center gap-x-2 text-[#1A3875]'>
                    <p>View All</p>
                    <img src={greaterthan} alt='icon' />
                </div>
                </div>

            </div>
        </div>
    )
}

export default MiddleScreen