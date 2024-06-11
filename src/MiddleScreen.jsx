import React from 'react'
import middleScreenIcons from './constants/middleScreenIcons'
import { useSelector } from 'react-redux'
import DashBoardCard from './components/DashBoardCard'
import quickActionItems from './constants/quickActionsItems'
import greaterthan from './assets/greaterthan.svg'
import HighPriorityCard from './components/HighPriorityCard'

const MiddleScreen = () => {

    const dashboardData = useSelector(state => state.dashBoardData.dashBoardData)
    const highPriorityData = useSelector(state => state.highPriorityData.highPriorityData)

    return (
        <div className='w-full lg:w-9/12 px-5 py-4 bg-[#F7FAFF]'>
            {/* For heading and icons */}
            <div className='flex flex-col lg:flex-row lg:items-center justify-between'>
                <h1 className='text-2xl font-montserrat font-medium'>Dashboard</h1>
                <div className='flex items-center gap-x-5 px-5 py-2 rounded-full border border-white bg-white'>
                    {
                        middleScreenIcons.map((icon, index) => (
                            <div key={icon.id} className='flex gap-x-4'>
                                <img src={icon.icon} alt='icon' />
                                {index !== middleScreenIcons.length - 1 && <div className='border border-[#CBCBCB] h-4'></div>}
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* For Cards data */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-5 lg:gap-y-0 justify-between w-full mt-2'>
                {
                    dashboardData.map(row => (
                        <DashBoardCard key={row.id} row={row} />
                    ))
                }
            </div>

            {/* For quick actions */}
            <div className='mt-4'>
                <h1 className='font-roboto font-medium text-lg'>Quick Actions</h1>

                {/* for icons and data */}
                <div className='flex flex-col gap-y-5 lg:flex-row lg:w-full justify-around border border-white bg-white rounded-2xl px-5 py-3 mt-2'>
                    {
                        quickActionItems.map((item, index) => (
                            <div key={item.id} className='flex flex-col lg:flex-row md:gap-x-24 lg:gap-x-7 xl:gap-x-16'>
                                <div className='flex flex-col items-center gap-y-2'>
                                    <img src={item.icon} alt='icon' />
                                    <p className='font-roboto font-medium text-xs'>{item.text}</p>
                                </div>
                                {index !== quickActionItems.length - 1 && <div className='border border-[#CBCBCB] hidden lg:block xs:h-0 sm:mx-40 xs:mt-5 lg:mx-0 lg:h-11 lg:mt-0'></div>}
                            </div>
                        ))
                    }
                </div>
            </div>


            {/* For high priority alerts */}
            <div className='mt-4'>
                <div className='flex flex-col lg:flex-row justify-between'>
                    <h1 className='font-roboto font-medium text-lg'>High Priority alerts (14)</h1>
                    <div className='flex items-center gap-x-2 text-[#1A3875]'>
                        <p>View All</p>
                        <img src={greaterthan} alt='icon' />
                    </div>
                </div>

                <div className='grid grid-col-1 md:grid-cols-2 gap-x-24 mt-2 gap-y-6 md:gap-y-0'>
                    {
                        highPriorityData.map(data => (
                            <HighPriorityCard key={data.id} data={data}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MiddleScreen