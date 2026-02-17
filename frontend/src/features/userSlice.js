import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit"
import axios from "axios"
import { base_url } from "../components/common/config"

const initialState = {
    isLoading: false,
    profile: null,
    user: null,
    error: ""
}

export const fetchProfile = createAsyncThunk('/user/fetchProfile',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${base_url}user/profile/`, { withCredentials: true });
            return response.data.data
        } catch (err) {
            return rejectWithValue(err.response?.data?.message || "Something went wrong");
        }
    }
)

export const editUser = createAsyncThunk('/user/editUser',
    async ({ userId, formData }, { rejectWithValue }) => {
        try {
            const response = await axios.put(`${base_url}user/update/${userId}`, formData, { withCredentials: true });

            return response.data

        } catch (err) {
            return rejectWithValue(err.response?.data?.message || "Something went wrong");
        }
    }
)

export const resetProfile = createAction("Reset_profile");

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfile.pending, (state) => {
                state.isLoading = true
                state.error = ""
            })
            .addCase(fetchProfile.fulfilled, (state, action) => {
                state.isLoading = false
                state.profile = action.payload
            })
            .addCase(fetchProfile.rejected, (state, action) => {
                state.isLoading = false
                state.profile = null
                state.error = action.payload
            })
            .addCase(editUser.pending, (state) => {
                state.isLoading = true
                state.error = ""
            })
            .addCase(editUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.user = action.payload.data
            })
            .addCase(editUser.rejected, (state, action) => {
                state.isLoading = false
                state.user = null
                state.error = action.payload
            })
            .addCase(resetProfile, () => initialState);


    }
})

export default userSlice.reducer
