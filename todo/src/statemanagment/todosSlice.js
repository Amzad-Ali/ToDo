import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: JSON.parse(localStorage.getItem('tasklist')) || [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), name: action.payload.name, time: action.payload.time });
      localStorage.setItem('tasklist', JSON.stringify(state));
    },
    deleteTodo: (state, action) => {
      const newState = state.filter(todo => todo.id !== action.payload);
      localStorage.setItem('tasklist', JSON.stringify(newState));
      return newState;
    },
    editTodo: (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
      localStorage.setItem('tasklist', JSON.stringify(state));
    },
    clearTodos: (state) => {
      localStorage.removeItem('tasklist');
      return [];
    },
  },
});

export const { addTodo, deleteTodo, editTodo, clearTodos } = todosSlice.actions;

export default todosSlice.reducer;
