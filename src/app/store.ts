import { headerSlice } from "@/features";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [headerSlice.name]: headerSlice.reducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
