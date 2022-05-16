import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todoList",
    initialState: [],
    reducers: {},
});
export const { actions, reducer } = todoSlice;
export default reducer;
