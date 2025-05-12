import type { IBook } from "@/shared/types";
import { configureStore } from "@reduxjs/toolkit";

type State = {
  userBooks: IBook[];
};

export type AddToUserBooksAction = {
  type: "usersBooks/addBook";
  payload: IBook;
};

type Action = AddToUserBooksAction;

const initialState: State = {
  userBooks: [],
};

const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case "usersBooks/addBook":
      return {
        ...state,
        userBooks: [...state.userBooks, action.payload],
      };
    default:
      return state;
  }
};

export type AppState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: reducer,
});
