import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TodoType } from '../utils/types';

export interface TodosState {
  todos: TodoType[];
}

const initialState: TodosState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    updateTodos: (state: TodosState, action: PayloadAction<TodoType>) => {
      state.todos = [...state.todos, action.payload];
    },
  },
});

export const { updateTodos } = todosSlice.actions;

export default todosSlice.reducer;
