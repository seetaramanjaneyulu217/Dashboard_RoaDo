import React from 'react'
import { useSelector } from 'react-redux'
import PaymentsCard from './components/PaymentsCard'
import CompletedActivitiesData from './constants/CompletedActivitiesData'
import ActivitiesCard from './components/ActivitiesCard'
import ScheduledActivitiesData from './constants/ScheduledActivitiesData'

const EndScreen = () => {

    const paymentsData = useSelector(state => state.paymentsData.paymentsData)
    const completedActivitiesData = CompletedActivitiesData()
    const scheduledActivitiesData = ScheduledActivitiesData()

  return (
    <div className='w-full lg:w-[32%] px-5 py-3 flex flex-col'>
        {/* for 1st row */}
        <div className='flex flex-col font-roboto'>
            <p className='font-medium text-lg'>Todays Highlights (14)</p>
            <p className='text-[#676666] font-normal text-xs'>19 Mar 2024</p>
        </div>

        {/* for 2nd row */}
        <div className='mt-3 grid sm:grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-3'>
            {
                paymentsData.map(data => (
                    <PaymentsCard key={data.id} data={data} />
                ))
            }
        </div>

        {/* for completed activities */}
        <div className='mt-4'>
            <div className='flex flex-col lg:flex-row lg:items-center justify-between'>
                <h1 className='font-roboto font-medium text-lg'>Completed Activities (14)</h1>
                <p className='font-roboto font-normal underline text-sm'>View All</p>
            </div>

            <div className='flex flex-col mt-3 rounded-md'>
                {
                    completedActivitiesData.map((activity, index) => (
                        <ActivitiesCard key={activity.id} activity={activity} index={index} length={completedActivitiesData.length} />
                    ))
                }
            </div>
        </div>

        {/* for scheduled activities */}
        <div className='mt-4'>
            <div className='flex flex-col lg:flex-row lg:items-center justify-between'>
                <h1 className='font-roboto font-medium text-lg'>Scheduled Activities (14)</h1>
                <p className='font-roboto font-normal underline text-sm text-[#111111]'>View All</p>
            </div>

            <div className='flex flex-col mt-3 rounded-md'>
                {
                    scheduledActivitiesData.map((activity, index) => (
                        <ActivitiesCard key={activity.id} activity={activity} index={index} length={completedActivitiesData.length} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default EndScreen