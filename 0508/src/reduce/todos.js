import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: todos,
  initialState: [],
  reducers: {
    createTodo: (state, action) => {

    },
    deleteTodo: (state, action) => {

    },
    deleteSelectedTodos: (state, action) => {

    },
  }
});

export const { createTodo, deleteTodo, deleteSelectedTodos } = todosSlice.actions;
export default todosSlice.reducer;