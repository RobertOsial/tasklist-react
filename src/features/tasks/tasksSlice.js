import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [{
            content: "test",
            id: 1231231,
            done: true,
        }],
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },

        deleteTask: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(task => task.id === payload)
            tasks.splice(index, 1);
        },

        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },

        toggleTaskDone: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(task => task.id === payload);
            tasks[index].done = !tasks[index].done
        },
    },
});

export const selectTasks = state => state.tasks;
export const { addTask, deleteTask, toggleHideDone, toggleTaskDone } = tasksSlice.actions;
export default tasksSlice.reducer;