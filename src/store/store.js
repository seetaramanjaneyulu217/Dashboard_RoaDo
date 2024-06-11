import { configureStore } from "@reduxjs/toolkit";
import dashboardCardDataReducer from './slices/DashboardCardDataSlice'

export const store = configureStore({
    reducer: {
        dashBoardData: dashboardCardDataReducer
    }
})