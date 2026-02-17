import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit"
import axios from "axios"
import { base_url } from "../components/common/config"

const initialState = {
    isLoading: false,
    wishlist: [],
}

export const wishlistToggle = createAsyncThunk('/wishlist/wishlistToggle',
    async ({ userId, productId }) => {
        const response = await axios.post(`${base_url}wishlist/`, {
            userId, productId
        });
        return response.data
    }
)

export const getWishlist = createAsyncThunk('/wishlist/getWishlist',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${base_url}wishlist/`, { withCredentials: true });
            return response.data
        } catch (err) {
            return rejectWithValue(err.response?.data?.message);
        }
    }
)

export const resetWishlist = createAction("Reset_wishlist");

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(wishlistToggle.pending, (state) => {
                state.isLoading = true
            })
            .addCase(wishlistToggle.fulfilled, (state, action) => {
                state.isLoading = false
                state.wishlist = action.payload.data
            })
            .addCase(wishlistToggle.rejected, (state) => {
                state.isLoading = false
                state.wishlist = []
            })
            .addCase(getWishlist.pending, (state) => {
                state.isLoading = true
                state.error = ""
            })
            .addCase(getWishlist.fulfilled, (state, action) => {
                state.isLoading = false
                state.wishlist = action.payload.data
                state.error = ""
            })
            .addCase(getWishlist.rejected, (state, action) => {
                state.isLoading = false
                state.wishlist = []
                state.error = action.payload
            })
            .addCase(resetWishlist, () => initialState);
    }
})

export default wishlistSlice.reducer
