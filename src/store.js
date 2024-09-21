import { configureStore } from "@reduxjs/toolkit";
import { todoSlice as todoReducer } from "./rtk/todoSlice";

export const store = configureStore({
  reducer: {
    todoState: todoReducer.reducer,
  },
});
