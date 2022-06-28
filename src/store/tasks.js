import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    createTask: (state, action) => {
      state.push({
        id: Math.floor(Math.random() * 10000),
        text: action.payload.text
      });
    },
    updateTask: (state, { payload: { id, newValue } }) => {
      return state.map((item) => (item.id === id ? newValue : item));
    },
    deleteTask: (state, { payload: { id } }) => {
      return state.filter((item) => item.id !== id);
    }
  }
});

export const { createTask, updateTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
