import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TodoType } from '../utils/types';

const MOCKED_TODOS = [
  {
    id: '1aa',
    priority: 1,
    title: 'urgent',
    comment:
      'Lorem ipsum at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan',
    deadline: '25 listopad 2022',
  },
  {
    id: '2ab',
    priority: 2,
    title: 'important',
    comment: '',
    deadline: '',
  },
  {
    id: '2ac',
    priority: 1,
    title: 'urgent...',
    comment: 'Lorem ipsum elit scelerisque mauris pellentesque pulvinar',
    deadline: '',
  },
  {
    id: '4ad',
    priority: 3,
    title: 'not-important',
    comment: 'Lorem ipsum phasellus faucibus scelerisque',
    deadline: '',
  },
  {
    id: '5ae',
    priority: 4,
    title: 'not-urgent',
    comment: 'Lorem ipsum...',
    deadline: '',
  },
];

export interface TodosState {
  todos: TodoType[];
}

const initialState: TodosState = {
  todos: MOCKED_TODOS,
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state: TodosState, action: PayloadAction<TodoType>) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state: TodosState, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateAllTodos: (state: TodosState, action: PayloadAction<TodoType[]>) => {
      state.todos = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, updateAllTodos } = todosSlice.actions;

export default todosSlice.reducer;
