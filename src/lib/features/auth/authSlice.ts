import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface User {
    id: string,
    name: string,
    email: string,
    role: string
}

const initialState = {
    user: {
        id: '',
        name: '',
        email: '',
        role: ''
    },
    loading: false,
    error: null,
    success: false,
    userToken: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        }
    }
})

export const { setUser } = authSlice.actions
export default authSlice.reducer