import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import merchantReducer from "./features/merchant/merchantSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        merchant: merchantReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch