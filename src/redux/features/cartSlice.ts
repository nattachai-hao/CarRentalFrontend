import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReservstionItem } from "../../../interfaces";

type CartState = {
    carItems: ReservstionItem[]
}

const initialState:CartState = { carItems:[] }

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers: {
        addReservation: (state, action:PayloadAction<ReservstionItem>) => {
            state.carItems.push(action.payload)
        },
        removeReservation: (state, action:PayloadAction<ReservstionItem>) => {
            const remainItem = state.carItems.filter( obj => {
                return( (obj.carModel !== action.payload.carModel) || (obj.pickupDate !== action.payload.pickupDate) || (obj.returnDate !== action.payload.returnDate) )
            })
            state.carItems = remainItem
        }
    }
})

export const { addReservation, removeReservation } = cartSlice.actions
export default cartSlice.reducer