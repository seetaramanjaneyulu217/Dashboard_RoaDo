import { configureStore } from "@reduxjs/toolkit";
import dashboardCardDataReducer from './slices/DashboardCardDataSlice'
import highPriorityReducer from './slices/highPriorityData'

export const store = configureStore({
    reducer: {
        dashBoardData: dashboardCardDataReducer,
        highPriorityData: highPriorityReducer
    }
})