import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  initialState: [],
  name: "catSlice",
  reducers: {
    addToCart: (state, action) => {
      const newItemId = action.payload.id;
      const existingItem = state.find((item) => item.id === newItemId);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.push(action.payload);
      }
    },
    incrementItem: (state, action) => {
      state = state.map((item) => {
        if (item.id === action.payload) {
          item.quantity++;
        }
        return item;
      });
    },

    decrementItem: (state, action) => {
      state = state.map((item) => {
        if (item.quantity >1) {
          if (item.id === action.payload) {
            item.quantity--;
          }
          return item;
        }
      });
    },
    deleteFromCart: (state, action) => {
      return state.filter((product) => product.id != action.payload.id);
    },
    deleteAllProducts: (state, action) => {
      return [];
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  deleteAllProducts,
  incrementItem,
  decrementItem,
} = cartSlice.actions;
export default cartSlice.reducer;
