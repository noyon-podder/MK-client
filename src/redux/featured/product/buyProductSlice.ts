import { createSlice } from "@reduxjs/toolkit";

type TBuyProductItem = {
  _id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

type TBuyProduct = {
  items: TBuyProductItem;
  totalQuantity: number;
  totalPrice: number;
};

const initialState: TBuyProduct = {
  items: {
    _id: "",
    name: "",
    image: "",
    price: 0,
    quantity: 0,
  },
  totalPrice: 0,
  totalQuantity: 0,
};

const buyProductSlice = createSlice({
  name: "buyProduct",
  initialState,
  reducers: {
    productBuy: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { productBuy } = buyProductSlice.actions;

export default buyProductSlice.reducer;
