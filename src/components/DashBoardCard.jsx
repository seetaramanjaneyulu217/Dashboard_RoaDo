import React from 'react'
// import { PieChart } from '@mui/x-charts/PieChart';
// import PieCenterLabel from './PieChartLabel';

const DashBoardCard = ({ row }) => {
    // const size = {
    //     width: 400,
    //     height: 200,
    // };

    // const data = [
    //     {
    //         value: row.upComing,
    //         label: 'Upcoming'
    //     },
    //     {
    //         value: row.onGoing,
    //         label: 'onGoing'
    //     },
    //     {
    //         value: row.completed,
    //         label: 'Completed'
    //     }
    // ]
    return (
        <div className='w-full border border-white bg-white rounded-xl px-4 py-3'>
            <h1 className='font-roboto font-normal'>{row.cardName}</h1>

            {/* for pie chart */}
            {/* <div>
                <PieChart series={[{ data, innerRadius: 80 }]} {...size}>
                    <PieCenterLabel>Center label</PieCenterLabel>   
                </PieChart>
            </div> */}


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