import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { base_url } from "../../components/common/config"

const initialState = {
    isLoading: false,
    categories: [],
}

export const fetchCategories = createAsyncThunk('/category/fetchCategories',
    async () => {
        const response = await axios.get(`${base_url}category/`);
        return response.data.data
    }
)

export const authSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.isLoading = false
                state.categories = action.payload
            })
            .addCase(fetchCategories.rejected, (state) => {
                state.isLoading = false
            })
    }
})

export default authSlice.reducer
