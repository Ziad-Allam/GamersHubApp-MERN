import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url } from "../../components/common/config";

const initialState = {
    isLoading: false,
    checkout: [],
    error: null,
};

export const fetchCheckout = createAsyncThunk("checkout/fetchCheckout", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${base_url}checkout/validate`, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Something went wrong');
    }
});

const checkoutSlice = createSlice({
    name: "checkout",
    initialState,
    reducers: {
        resetCheckout: (state) => {
            state.orderItems = [];
            state.subtotal = 0;
            state.discount = 0;
            state.total = 0;
            state.total = '';
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCheckout.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchCheckout.fulfilled, (state, action) => {
                state.isLoading = false;
                state.checkout = action.payload.data;
            })
            .addCase(fetchCheckout.rejected, (state, action) => {
                state.isLoading = false;
                state.checkout = [];
                state.error = action.payload;
            });
    },
});

export const { resetCheckout } = checkoutSlice.actions;
export default checkoutSlice.reducer;
