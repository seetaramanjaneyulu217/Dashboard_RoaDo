import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DashBoardCard = ({ row }) => {
    const data = {
        datasets: [
            {
                data: [row.row1.value, row.row2.value, row.row3.value],
                backgroundColor: ['#FFCB49', '#7464FF', '#4FD2B5'],
                hoverBackgroundColor: ['#FFCB49', '#7464FF', '#4FD2B5'],
            },
        ],
    };

    const options = {
        cutout: '70%',
        responsive: true,
    };

    return (
        <div className='w-full border border-white bg-white rounded-xl px-4 py-3'>
            <h1 className='font-roboto font-normal'>{row.cardName}</h1>

            {/* for pie chart */}
            <div className="flex justify-center items-center">
                <div className='relative inline-flex' style={{ width: '130px', height: '130px' }}>
                    <Doughnut data={data} options={options} />
                    <div
                        className='absolute top-1/2 left-1/2'
                        style={{
                            transform: 'translate(-50%, -50%)',
                            textAlign: 'center',
                        }}
                    >
                        <h6 className='text-[#676666] font-roboto font-normal text-xs'>Total</h6>
                        <h4 className='font-roboto font-medium text-xs'>
                            {row.total}
                        </h4>
                    </div>
                </div>
            </div>


            {/* For data to display in single line */}
            <div className='mt-5 flex flex-col gap-y-2'>
                <div className='flex justify-between bg-gradient-to-r from-white to-[#FFCB49] px-4 py-1 rounded-md'>
                    <p className='font-roboto font-normal'>{row.row1.name}</p>
                    <p className='font-roboto font-normal'>{row.row1.value}</p>
                </div>

                <div className='flex justify-between bg-gradient-to-r from-white to-[#7464FF] px-4 py-1 rounded-md'>
                    <p className='font-roboto font-normal'>{row.row2.name}</p>
                    <p className='font-roboto font-normal'>{row.row2.value}</p>
                </div>

                <div className='flex justify-between bg-gradient-to-r from-white to-[#4FD2B5] px-4 py-1 rounded-md'>
                    <p className='font-roboto font-normal'>{row.row3.name}</p>
                    <p className='font-roboto font-normal'>{row.row3.value}</p>
                </div>
            </div>
        </div>
    )
}

export default DashBoardCard