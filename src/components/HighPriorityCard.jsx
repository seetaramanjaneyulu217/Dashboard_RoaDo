import React from 'react'

const HighPriorityCard = ({ data }) => {
    return (
        <div className='border border-white bg-white rounded-2xl px-3 py-3'>
            {/* for 1st row */}
            <div className='flex justify-between'>
                <div className='flex flex-col lg:flex-row items-start lg:items-center gap-x-2'>
                    {/* for 1st row icon */}
                    <div className='border border-[#E0EAFF] bg-[#E0EAFF] rounded inline-block px-2 py-2'>
                        <img src={data.icon} alt='icon' />
                    </div>

                    {/* for 1st row heading */}
                    <div className='flex flex-col'>
                        <div className='font-roboto font-medium text-base'>{data.heading}</div>
                        <div className='flex flex-col lg:flex-row lg:items-center gap-x-2 font-roboto font-normal text-xs'>
                            <p>Load No : {data.loadNo},</p>
                            <p>Bill To : {data.billTo}</p>
                        </div>
                    </div>
                </div>

                {/* for 1st row date */}
                <div className='font-roboto font-normal text-xs'>
                    {data.date}
                </div>
            </div>


            {/* for 2nd row */}
            <div className='font-roboto font-normal text-sm mt-3'>
                {data.content}
            </div>

            {/* for 3rd row */}
            <div className='flex justify-end mt-4'>
                <div className='flex flex-col lg:flex-row items-center gap-6 md:gap-16'>
                    <p className='text-[#1A3875] underline'>Ignore</p>
                    <button className='border border-[#1A3875] bg-[#1A3875] text-white px-3 py-1 rounded'>Resolve</button>
                </div>
            </div>
        </div>
    )
}

export default HighPriorityCard