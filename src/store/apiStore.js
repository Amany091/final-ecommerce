import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { getBrandsApi } from "../features/RTK/brandsApi";
import { getProductsApi } from "../features/RTK/productsApi";
import { loginApi } from "../features/RTK/loginApi";
import { getCategoriesApi } from "../features/RTK/categoriesApi";
import { registerApi } from "../features/RTK/registerApi";
import { logoutApi } from "../features/RTK/logoutApi";
import { ordersApi } from "../features/RTK/adminDashboardApi";
import { addToCartApi } from "../features/RTK/cartApi";
import themeReducer from "../features/themeSlice";
import modalReducer from "../features/modalSlice"

export const store = configureStore({
    reducer: {
        [getBrandsApi.reducerPath]: getBrandsApi.reducer,
        [getProductsApi.reducerPath]: getProductsApi.reducer,
        [loginApi.reducerPath]: loginApi.reducer,
        [getCategoriesApi.reducerPath]: getCategoriesApi.reducer,
        [registerApi.reducerPath]: registerApi.reducer,
        [logoutApi.reducerPath]: logoutApi.reducer,
        [ordersApi.reducerPath]: ordersApi.reducer,
        [addToCartApi.reducerPath]: addToCartApi.reducer,
        theme: themeReducer,
        modal: modalReducer
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        getProductsApi.middleware,
        getBrandsApi.middleware,
        getCategoriesApi.middleware,
        loginApi.middleware,
        registerApi.middleware,
        logoutApi.middleware,
        ordersApi.middleware,
        addToCartApi.middleware

    ) // enable caching

})

setupListeners(store.dispatch)

export default store