import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="taskList">
        {tasks.map(task => (
            <li key={task.id} className={`taskList__item${task.done && hideDone ? " taskList__item--hidden" : ""}`}>
                <button
                    className="taskList__button taskList__button--done"
                    onClick={() => toggleTaskDone(task.id)}>
                    {task.done ? "✓" : ""}
                </button>
                <span className={`taskContent${task.done ? " taskContent--done" : ""}`}>
                    {task.content}
                </span>
                <button
                    className="taskList__button taskList__button--delete"
                    onClick={() => removeTask(task.id)}>
                    ✗
                </button>
            </li>
        ))}
    </ul >
);

export default Tasks;