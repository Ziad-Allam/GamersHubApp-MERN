import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit"
import axios from "axios"
import { base_url } from "../../components/common/config"

const initialState = {
    isLoading: false,
    approvalURL: null,
    orderId: null,
    orders: [],
    orderDetails: null,
    error: ""
}

export const createOrder = createAsyncThunk('/order/createOrder',
    async (orderData) => {
        const response = await axios.post(`${base_url}order/`, orderData, { withCredentials: true });
        return response.data
    }
)

export const capturePayment = createAsyncThunk('/order/capturePayment',
    async ({ paymentId, payerId, orderId }) => {
        const response = await axios.post(`${base_url}order/capture`,
            {
                paymentId, payerId, orderId
            }
        );
        return response.data
    }
)
export const fetchOrdersByUser = createAsyncThunk('/order/fetchOrdersByUser',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${base_url}order/`, { withCredentials: true });
            return response.data
        } catch (err) {
            return rejectWithValue(err.response?.data?.message || "Something went wrong");
        }
    }
)

export const fetchOrderDetails = createAsyncThunk('/order/fetchOrderDetails',
    async (id, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${base_url}order/${id}`, { withCredentials: true });
            return response.data
        } catch (err) {
            return rejectWithValue(err.response?.data?.message || "Something went wrong");
        }
    }
)

export const resetOrder = createAction("Reset_address");

export const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createOrder.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createOrder.fulfilled, (state, action) => {
                state.isLoading = false
                state.approvalURL = action.payload.data.approvalURL
                state.orderId = action.payload.data.orderId
                sessionStorage.setItem('orderId', JSON.stringify(action.payload.data.orderId))
            })
            .addCase(createOrder.rejected, (state, action) => {
                state.isLoading = false
                state.approvalURL = null
                state.error = action.payload
            })
            .addCase(fetchOrdersByUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchOrdersByUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.orders = action.payload.data
            })
            .addCase(fetchOrdersByUser.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(fetchOrderDetails.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchOrderDetails.fulfilled, (state, action) => {
                state.isLoading = false
                state.orderDetails = action.payload.data
            })
            .addCase(fetchOrderDetails.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(resetOrder, () => initialState);
    }
})

export default orderSlice.reducer
