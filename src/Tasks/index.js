import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
    <ul className="taskList">
        {tasks.map(task => (
            <li key={task.id} className={`taskList__item${task.done && hideDoneTasks ? " taskList__item--hidden" : ""}`}>
                <button className="taskList__button taskList__button--done">
                    {task.done ? "✓" : ""}
                </button>
                <span className={`taskContent${task.done ? " taskContent--done" : ""}`}>
                    {task.content}
                </span>
                <button className="taskList__button taskList__button--delete">
                    ✗
                </button>
            </li>
        ))}
    </ul >
);

export default Tasks;