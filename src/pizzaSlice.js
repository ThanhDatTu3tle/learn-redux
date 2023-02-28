import { createSlice } from "@reduxjs/toolkit";

const initState = {
    toppings: [
        'pepperoni',
        'meat',
    ],
    gluten: true,
}

export const pizzaSlice = createSlice({
    name: 'pizza',
    initState,
    reducers: {
        toggleGluten: (state) => {
            state.gluten = !state.gluten
        },
        addTopping: (state, action) => {
            state.toppings = [
                ...state.toppings,
                action.payload
            ]
        }
    },
})

export const { toggleGluten, addTopping } = pizzaSlice.actions

export default pizzaSlice.reducer
