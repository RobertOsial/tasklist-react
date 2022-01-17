import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
        hideDone: false,
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

        fetchExampleTasks: () => { }
    },
});

export const selectTasks = state => state.tasks;
export const {
    addTask,
    deleteTask,
    toggleHideDone,
    toggleTaskDone,
    setAllDone,
    fetchExampleTasks,
} = tasksSlice.actions;
export default tasksSlice.reducer;