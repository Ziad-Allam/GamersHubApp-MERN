import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { base_url } from "../../components/common/config"

const initialState = {
    isLoading: false,
    brands: [],
}

export const fetchBrands = createAsyncThunk('/brand/fetchBrands',
    async () => {
        const response = await axios.get(`${base_url}brands/`);
        return response.data.data
    }
)

export const brandsSlice = createSlice({
    name: "brands",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBrands.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchBrands.fulfilled, (state, action) => {
                state.isLoading = false
                state.brands = action.payload
            })
            .addCase(fetchBrands.rejected, (state, action) => {
                state.isLoading = false
            })
    }
})

export default brandsSlice.reducer
