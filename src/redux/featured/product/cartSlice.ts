import { createSlice } from "@reduxjs/toolkit";

type TCartItem = {
  _id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

type TCartState = {
  items: TCartItem[];
  totalQuantity: number;
  totalPrice: number;
};

const initialState: TCartState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item._id === action.payload._id
      );

      if (itemIndex !== -1) {
        state.items[itemIndex].quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      state.totalQuantity += action.payload.quantity;
      state.totalPrice += action.payload.price * action.payload.quantity;
    },

    // update quantity
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item._id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

export const { addItem, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
