import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.findIndex(
        (item) => item.title === newItem.title
      );
      if (existingItem !== -1) {
      } else if (state.length < 5 && existingItem === -1) {
        state.push(newItem);
      } else if (state.length >= 5) {
        alert("장바구니에는 5개 이상 담을 수 없습니다.");
      }
    },
    removeItem: (state, action) => {
      let num = state.findIndex((a) => a.title === action.payload.title);
      console.log(action.payload);
      state.splice(num, 1);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice;
