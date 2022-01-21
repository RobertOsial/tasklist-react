import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
        areExampleTasksLoading: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: newTask }) => {
            tasks.push(newTask);
        },

        deleteTask: ({ tasks }, { payload: id }) => {
            const index = tasks.findIndex(task => task.id === id)
            tasks.splice(index, 1);
        },

        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },

        toggleTaskDone: ({ tasks }, { payload: id }) => {
            const index = tasks.findIndex(task => task.id === id);
            tasks[index].done = !tasks[index].done
        },

        setAllDone: ({ tasks }) => {
            tasks.forEach(task => task.done = true);
        },

        fetchExampleTasks: () => { },
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
        },
        setAreExampleTasksLoading: (state, { payload }) => {
            state.areExampleTasksLoading = payload;
        },
    },
});

export const selectExampleTasksLoading = state => state.tasks.areExampleTasksLoading;
export const selectTasks = state => state.tasks;
export const {
    addTask,
    deleteTask,
    toggleHideDone,
    toggleTaskDone,
    setAllDone,
    fetchExampleTasks,
    setTasks,
    setAreExampleTasksLoading,
} = tasksSlice.actions;
export default tasksSlice.reducer;