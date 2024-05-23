import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import merchantJSON from '@/assets/merchants.json'
import { PartnerCardProps } from "@/types/partner";

const initialState = {
    merchants: merchantJSON as PartnerCardProps[],
    loading: false,
    error: null,
    success: false,
}


const merchantSlice = createSlice({
    name: 'merchant',
    initialState,
    reducers: {
        setMerchants: (state, action: PayloadAction<PartnerCardProps[]>) => {
            state.merchants = action.payload
        }
    }
});


export const { setMerchants } = merchantSlice.actions;
export default merchantSlice.reducer;