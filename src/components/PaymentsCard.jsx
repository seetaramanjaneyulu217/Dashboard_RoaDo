import React from 'react'

const PaymentsCard = ({ data }) => {
    return (
        <div className='border border-[#CBCBCB] rounded-md pl-3 sm:w-96 lg:w-full lg:pr-12 py-3'>
            {/* for 1st row */}
            <div className='font-roboto font-medium text-xs text-[#676666]'>
                {data.type}
            </div>

            {/* for 2nd row */}
            <div className={`${data.type === 'Income' ? 'text-[#148714]' : 'text-[#D04141]'} mt-3 font-roboto font-medium text-lg`}>
                {data.amount}
            </div>

            {/* for 3rd row */}
            <div className='font-roboto font-medium text-xs text-[#676666] mt-1'>
                {data.content}
            </div>
        </div>
    )
}

export default PaymentsCard