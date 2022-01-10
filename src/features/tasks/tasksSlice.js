import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
    },
});

export const selectTasks = state => state.tasks;
export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;