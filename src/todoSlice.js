import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.todos.push(payload);
    },
    removeTodo: (state, { payload }) => {
      const filter = state.todos.filter((item) => item.id !== payload);
      state.todos = filter
    },
    changeStateTodo: (state, { payload }) => {
      const item = state.todos.find((item) => item.id == payload);
      item.completed = !item.completed;
    },
  },
});

export const { addTodo, removeTodo, changeStateTodo } = todoSlice.actions;
export default todoSlice.reducer;
