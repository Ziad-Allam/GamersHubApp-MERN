import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import categoriesReducer from "../features/categories/categoriesSlice";
import brandsReducer from "../features/brands/brandsSlice";
import productsSlice from "../features/products/productsSlice";
import cartSlice from "../features/cart/cartSlice";
import addressSlice from "../features/address/addressSlice";
import orderSlice from "../features/order/orderSlice";
import reviewsSlice from "../features/reviews/reviewsSlice";
import bannarReducer from "../features/bannerSlice";
import wishlistReducer from "../features/wishlistSlice";
import checkoutReducer from "../features/checkout/checkoutSlice";
import userReducer from "../features/userSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        categories: categoriesReducer,
        brands: brandsReducer,
        products: productsSlice,
        cart: cartSlice,
        address: addressSlice,
        order: orderSlice,
        reviews: reviewsSlice,
        banner: bannarReducer,
        wishlist: wishlistReducer,
        checkout: checkoutReducer,
    },
});

export default store;