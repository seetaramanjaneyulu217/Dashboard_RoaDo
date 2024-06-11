import { createSlice } from "@reduxjs/toolkit";
import user from '../../assets/quick_action_user.svg'
import thermometer from '../../assets/thermometer.svg'

const initialState = {
  highPriorityData: [
    {
        id: 1,
        icon: user,
        heading: 'Driver Raised Concern',
        loadNo: '12454',
        billTo: 'RoaDo demo Bangalore',
        date: '13 Feb 24',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
        id: 2,
        icon: thermometer,
        heading: 'Reefer Temp. out of range',
        loadNo: '12454',
        billTo: 'RoaDo demo Bangalore',
        date: '13 Feb 24',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua',
    }
  ],
};

const highPriorityDataSlice = createSlice({
  name: "dashboardcarddata",
  initialState,
});


export default highPriorityDataSlice.reducer;