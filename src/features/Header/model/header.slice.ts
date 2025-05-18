import type { IBook } from "@/shared/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface usersState {
  userBooks: IBook[];
}
const initialUserState: usersState = {
  userBooks: [],
};

export const headerSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  selectors: {
    selectUserBooks: (state) => state.userBooks,
  },
  reducers: {
    addBook: (state, action: PayloadAction<IBook>) => {
      state.userBooks = [...state.userBooks, action.payload];
    },
  },
});
