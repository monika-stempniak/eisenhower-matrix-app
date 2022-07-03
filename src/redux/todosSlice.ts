import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { TodoType } from '../utils/types';
import type { RootState } from './store';

const MOCKED_TODOS = [
  {
    id: '1aa',
    priority: 1,
    title: 'urgent',
    comment:
      'Lorem ipsum at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan',
    deadline: '25 listopad 2022',
    labels: ['some tag', 'some label'],
  },
  {
    id: '2ab',
    priority: 2,
    title: 'important',
    comment: '',
    deadline: '',
    labels: ['some label'],
  },
  {
    id: '2ac',
    priority: 1,
    title: 'urgent...',
    comment: 'Lorem ipsum elit scelerisque mauris pellentesque pulvinar',
    deadline: '',
    labels: ['some tag', 'some label'],
  },
  {
    id: '4ad',
    priority: 3,
    title: 'not-important',
    comment: 'Lorem ipsum phasellus faucibus scelerisque',
    deadline: '',
    labels: [],
  },
  {
    id: '5ae',
    priority: 4,
    title: 'not-urgent',
    comment: 'Lorem ipsum...',
    deadline: '',
    labels: [],
  },
];

export interface TodosState {
  todos: TodoType[];
  activeLabels: string[];
}

const initialState: TodosState = {
  todos: MOCKED_TODOS,
  activeLabels: [],
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
    updateActiveLabels: (
      state: TodosState,
      action: PayloadAction<string[]>
    ) => {
      state.activeLabels = action.payload;
    },
    resetActiveLabels: (state: TodosState) => {
      state.activeLabels = [];
    },
  },
});

export const selectTodos = (state: RootState): TodoType[] => {
  const { todos, activeLabels } = state.todos;

  if (activeLabels.length === 0) return todos;

  const activeTodos = todos.filter(({ labels }) => {
    if (labels.length === 0) return false;
    return labels.some((label) => activeLabels.includes(label));
  });

  return activeTodos;
};

export const {
  addTodo,
  deleteTodo,
  updateAllTodos,
  updateActiveLabels,
  resetActiveLabels,
} = todosSlice.actions;

export default todosSlice.reducer;
