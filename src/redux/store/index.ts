import { configureStore } from "@reduxjs/toolkit";
import { dashboardSlice } from "../dashboardSlice";
import { hotelViewSlice } from "../hotelView";

export const store = configureStore({
    reducer: {
        dashboard: dashboardSlice.reducer,
        hotel: hotelViewSlice.reducer
    }
})
