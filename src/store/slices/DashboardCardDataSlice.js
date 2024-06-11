import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dashBoardData: [
    {
        id: 1,
        cardName: 'Orders',
        row1: { name: 'Upcoming', value: 50 },
        row2: { name: 'Ongoing', value: 100 },
        row3: { name: 'Completed', value: 50 },
        total: 123456
    },
    {
        id: 2,
        cardName: 'Trips',
        row1: { name: 'Upcoming', value: 50 },
        row2: { name: 'Ongoing', value: 100 },
        row3: { name: 'Completed', value: 50 },
        total: 123456
    },
    {
        id: 3,
        cardName: 'Revenue',
        row1: { name: 'Upcoming', value: 50 },
        row2: { name: 'Ongoing', value: 100 },
        row3: { name: 'Completed', value: 50 },
        total: 123456
    },
    {
        id: 4,
        cardName: 'Expences',
        row1: { name: 'Freight Charge', value: 50 },
        row2: { name: 'Driver Charge', value: 100 },
        row3: { name: 'Other Charges', value: 50 },
        total: 123456
    },
  ],
};

const dashboardCardDataSlice = createSlice({
  name: "dashboardcarddata",
  initialState,
});


export default dashboardCardDataSlice.reducer;