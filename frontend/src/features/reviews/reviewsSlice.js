import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { base_url } from "../../components/common/config";
import axios from "axios";

const initialState = {
    isLoading: false,
    reviews: [],
    review:null
}

export const fetchReviews = createAsyncThunk('/reviews/fetchReviews',
    async (id) => {
        const response = await axios.get(`${base_url}review/${id}`);
        return response.data
    }
)

export const fetchReviewByUser = createAsyncThunk('/reviews/fetchReviewByUser',
    async ({ productId, userId }) => {
        const response = await axios.get(`${base_url}review/${productId}/${userId}`);
        return response.data
    }
)

export const addReview = createAsyncThunk('/reviews/addReview',
    async (reviewData) => {
        const response = await axios.post(`${base_url}review/`, reviewData);
        return response.data
    }
)

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchReviews.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchReviews.fulfilled, (state, action) => {
                state.isLoading = false;
                state.reviews = action.payload.data;
            })
            .addCase(fetchReviews.rejected, (state) => {
                state.isLoading = false;
                state.reviews = [];
            })
            .addCase(addReview.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addReview.fulfilled, (state, action) => {
                state.isLoading = false;
                state.reviews = action.payload.data;
            })
            .addCase(addReview.rejected, (state) => {
                state.isLoading = false;
                state.reviews = [];
            })
            .addCase(fetchReviewByUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchReviewByUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.review = action.payload.data;
            })
            .addCase(fetchReviewByUser.rejected, (state) => {
                state.isLoading = false;
                state.review = null;
            })
    }

})

export default reviewsSlice.reducer