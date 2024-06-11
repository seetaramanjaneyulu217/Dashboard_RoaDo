import { configureStore } from "@reduxjs/toolkit";
import dashboardCardDataReducer from './slices/DashboardCardDataSlice'
import highPriorityReducer from './slices/highPriorityData'
import paymentsReducer from './slices/paymentsSlice'

export const store = configureStore({
    reducer: {
        dashBoardData: dashboardCardDataReducer,
        highPriorityData: highPriorityReducer,
        paymentsData: paymentsReducer    
    }
})