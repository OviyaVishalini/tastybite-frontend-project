import { createSlice } from "@reduxjs/toolkit";

export const dashboardSlice = createSlice({
    name: 'dashborad',
    initialState: {
        isDashboard: false,
    },
    reducers: {
        updateDashboardState: (state) => {
            state.isDashboard = !state.isDashboard
        }
    }
})
