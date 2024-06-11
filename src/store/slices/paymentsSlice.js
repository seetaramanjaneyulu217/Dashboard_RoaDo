import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  paymentsData: [
    {
        id: 1,
        type: 'Income',
        amount: '100000 CAD',
        content: '2 payments received'
    },
    {
        id: 2,
        type: 'Expenses',
        amount: '50000 CAD',
        content: '5 payments paid'
    }
  ],
};

const paymentsData = createSlice({
  name: "dashboardcarddata",
  initialState,
});


export default paymentsData.reducer;