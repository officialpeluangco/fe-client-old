import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import merchantJSON from '@/assets/merchants.json'

export interface Merchant {
    id: number
    imgUrl: string
    title: string
    desc: string
    category: string
    BEP: string
    price: string
}

const initialState = {
    merchants: merchantJSON as Merchant[],
    loading: false,
    error: null,
    success: false,
}


const merchantSlice = createSlice({
    name: 'merchant',
    initialState,
    reducers: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setMerchants: (state, action: PayloadAction<Merchant[]>) => {
            state.merchants = action.payload
        }
    }
});


export const { setMerchants } = merchantSlice.actions;
export default merchantSlice.reducer;