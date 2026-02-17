import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { base_url } from "../components/common/config"

const initialState = {
    isLoading: false,
    banners: [],
}

export const fetchBannerImages = createAsyncThunk('/banner/fetchBannerImages',
    async () => {
        const response = await axios.get(`${base_url}bannar/`);
        return response.data.data
    }
)

export const authSlice = createSlice({
    name: "banner",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBannerImages.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchBannerImages.fulfilled, (state, action) => {
                state.isLoading = false
                state.banners = action.payload
            })
            .addCase(fetchBannerImages.rejected, (state, action) => {
                state.isLoading = false
            })
    }
})

export default authSlice.reducer
