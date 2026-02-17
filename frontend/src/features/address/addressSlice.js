import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit"
import axios from "axios"
import { base_url } from "../../components/common/config"

const initialState = {
    isLoading: false,
    addresses: [],
    defaultAddress: "",
    error: ""
}

export const fetchAddresses = createAsyncThunk('/address/fetchAddresses',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${base_url}address/`, { withCredentials: true });
            return response.data
        } catch (err) {
            return rejectWithValue(err.response?.data?.message || "Something went wrong");
        }
    }
)

export const createAddress = createAsyncThunk('/address/createAddress',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${base_url}address/`, formData, { withCredentials: true });
            return response.data
        } catch (err) {
            return rejectWithValue(err.response?.data?.message || "Something went wrong");
        }
    }
)

export const updateAddress = createAsyncThunk('/address/updateAddress',
    async ({ userId, addressId, formData }, { rejectWithValue }) => {
        try {
            const response = await axios.put(`${base_url}address/${userId}/${addressId}`, formData, { withCredentials: true });
            return response.data
        } catch (err) {
            return rejectWithValue(err.response?.data?.message || "Something went wrong");
        }
    }
)

export const deleteAddress = createAsyncThunk('/address/deleteAddress',
    async ({ userId, addressId }, { rejectWithValue }) => {
        try {
            const response = await axios.delete(`${base_url}address/${userId}/${addressId}`, { withCredentials: true });
            return response.data
        } catch (err) {
            return rejectWithValue(err.response?.data?.message || "Something went wrong");
        }
    }
)

export const fetchDefaultAddress = createAsyncThunk('/address/fetchDefaultAddress',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${base_url}address/default`, { withCredentials: true });
            return response.data.data
        } catch (err) {
            return rejectWithValue(err.response?.data?.message || "Something went wrong");
        }
    }
)

export const setDefaultAddress = createAsyncThunk('/address/setDefaultAddress',
    async ({ addressId }, { rejectWithValue }) => {
        try {
            const response = await axios.put(`${base_url}address/default`, { addressId }, { withCredentials: true });
            return response.data
        } catch (err) {
            return rejectWithValue(err.response?.data?.message || "Something went wrong");
        }
    }
)

export const resetAddress = createAction("Reset_address");

export const addressSlice = createSlice({
    name: "address",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createAddress.pending, (state) => {
                state.isLoading = true
                state.error = ""
            })
            .addCase(createAddress.fulfilled, (state, action) => {
                state.isLoading = false
                state.addresses = action.payload
            })
            .addCase(createAddress.rejected, (state, action) => {
                state.isLoading = false
                state.addresses = []
                state.error = action.payload.data
            })
            .addCase(fetchAddresses.pending, (state) => {
                state.isLoading = true
                state.error = ""
            })
            .addCase(fetchAddresses.fulfilled, (state, action) => {
                state.isLoading = false
                state.addresses = action.payload.data
            })
            .addCase(fetchAddresses.rejected, (state, action) => {
                state.isLoading = false
                state.addresses = []
                state.error = action.payload
            })
            .addCase(fetchDefaultAddress.pending, (state) => {
                state.isLoading = true
                state.error = ""
            })
            .addCase(fetchDefaultAddress.fulfilled, (state, action) => {
                state.isLoading = false
                state.defaultAddress = action.payload
            })
            .addCase(fetchDefaultAddress.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(updateAddress.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateAddress.fulfilled, (state, action) => {
                state.isLoading = false
                state.addresses = action.payload.data
            })
            .addCase(updateAddress.rejected, (state, action) => {
                state.isLoading = false
                state.addresses = []
                state.error = action.payload
            })
            .addCase(deleteAddress.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteAddress.fulfilled, (state, action) => {
                state.isLoading = false
                state.addresses = action.payload.data
            })
            .addCase(deleteAddress.rejected, (state, action) => {
                state.isLoading = false
                state.addresses = []
                state.error = action.payload
            })
            .addCase(resetAddress, () => initialState);

    }
})

export default addressSlice.reducer
