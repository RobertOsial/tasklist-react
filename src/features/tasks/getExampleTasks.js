import axios from "axios";

export const getExampleTasks = async () => {
    try {
        const response = await axios.get("/tasklist-react/exampleTasks.json");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}