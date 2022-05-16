import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../features/todoSlide";
export const store = configureStore({
    reducer: {
        todos: todoSlice,
    },
});
