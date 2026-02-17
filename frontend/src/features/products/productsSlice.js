import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit"
import axios from "axios"
import { base_url } from "../../components/common/config"

const initialState = {
    isLoading: false,
    products: [],
    featuredProducts: [],
    relatedProductsByCategory: [],
    relatedProductsByBrand: [],
    productDetails: ""
}

export const fetchProducts = createAsyncThunk('/products/fetchProducts',
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${base_url}products/${id}`);
      return res.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const fetchProductDetails = createAsyncThunk('/products/fetchProductDetails',
    async (id) => {
        const response = await axios.get(`${base_url}products/productDetails/${id}`);
        return response.data.data
    }
)

export const fetchRelatedProducts = createAsyncThunk('fetchRelatedProducts/fetch',
    async ({ productId }) => {
        const response = await axios.get(`${base_url}products/similarByCategory/${productId}`);
        return response.data.data;
    }
);

export const fetchRelatedProductsByBrand = createAsyncThunk('fetchRelatedProductsByBrand/fetch',
    async ({ productId }) => {
        const response = await axios.get(`${base_url}products/similarByBrand/${productId}`);
        return response.data.data;
    }
);

export const fetchFeaturedProductsByCategory = createAsyncThunk('/products/fetchFeaturedProductsByCategory',
    async () => {
        const response = await axios.get(`${base_url}products/featuredProductsByCategory`);
        return response.data.data
    }
)

export const resetState = createAction("Reset_productList");

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false
                state.products = action.payload
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.isLoading = false
                state.products = []
            })
            .addCase(fetchProductDetails.pending, (state) => {
                state.isLoading = true
                state.productDetails = ""
            })
            .addCase(fetchProductDetails.fulfilled, (state, action) => {
                state.isLoading = false
                state.productDetails = action.payload
            })
            .addCase(fetchProductDetails.rejected, (state) => {
                state.isLoading = false
                state.productDetails = ""
            })
            .addCase(fetchRelatedProducts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchRelatedProducts.fulfilled, (state, action) => {
                state.isLoading = false
                state.relatedProductsByCategory = action.payload
            })
            .addCase(fetchRelatedProducts.rejected, (state) => {
                state.isLoading = false
            })
            .addCase(fetchRelatedProductsByBrand.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchRelatedProductsByBrand.fulfilled, (state, action) => {
                state.isLoading = false
                state.relatedProductsByBrand = action.payload
            })
            .addCase(fetchRelatedProductsByBrand.rejected, (state) => {
                state.isLoading = false
            })
            .addCase(fetchFeaturedProductsByCategory.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchFeaturedProductsByCategory.fulfilled, (state, action) => {
                state.isLoading = false
                state.featuredProducts = action.payload
            })
            .addCase(fetchFeaturedProductsByCategory.rejected, (state) => {
                state.isLoading = false
                state.featuredProducts = null
            })
            .addCase(resetState, () => initialState);
    }
})

export default productsSlice.reducer
