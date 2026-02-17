import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit"
import axios from "axios"
import { base_url } from "../../components/common/config"

const initialState = {
    isLoading: false,
    cart: [],
    error: ""
}

export const addToCart = createAsyncThunk('/cart/addToCart',
    async ({ userId, productId, quantity }) => {
        const response = await axios.post(`${base_url}cart/`, {
            userId, productId, quantity
        });
        return response.data
    }
)

export const fetchCart = createAsyncThunk('/cart/fetchCart',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${base_url}cart/`,
                { withCredentials: true }
            );
            return response.data
        } catch (err) {
            return rejectWithValue(err.response?.data?.message || "Something went wrong");
        }
    }
)

export const updateCartItemQuantity = createAsyncThunk('/cart/updateCartItemQuantity',
    async ({ userId, productId, quantity }) => {
        const response = await axios.put(`${base_url}cart/`, {
            userId, productId, quantity
        });
        return response.data
    }
)

export const deleteCartItem = createAsyncThunk('/cart/deleteCartItem',
    async ({ userId, productId }) => {
        const response = await axios.delete(`${base_url}cart/${userId}/${productId}`);
        return response.data
    }
)

export const resetCart = createAction("Reset_cart");

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addToCart.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.isLoading = false
                state.cart = action.payload.data
            })
            .addCase(addToCart.rejected, (state) => {
                state.isLoading = false
                state.cart = []
            })
            .addCase(fetchCart.pending, (state) => {
                state.isLoading = true
                state.error = ""
            })
            .addCase(fetchCart.fulfilled, (state, action) => {
                state.isLoading = false
                state.cart = action.payload.data
                state.error = ""
            })
            .addCase(fetchCart.rejected, (state, action) => {
                state.isLoading = false
                state.cart = []
                state.error = action.payload
            })
            .addCase(updateCartItemQuantity.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateCartItemQuantity.fulfilled, (state, action) => {
                state.isLoading = false
                state.cart = action.payload.data
            })
            .addCase(updateCartItemQuantity.rejected, (state) => {
                state.isLoading = false
                state.cart = []
            })
            .addCase(deleteCartItem.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteCartItem.fulfilled, (state, action) => {
                state.isLoading = false
                state.cart = action.payload.data
            })
            .addCase(deleteCartItem.rejected, (state) => {
                state.isLoading = false
                state.cart = []
            })
            .addCase(resetCart, () => initialState);
    }
})

export default cartSlice.reducer
