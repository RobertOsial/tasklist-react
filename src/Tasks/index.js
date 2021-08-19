import "./style.css";

const Task = (props) => (
    <ul className="taskList">
        {props.tasks.map(task => (
            <li key={task.id} class="taskList__item">
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

export default Task;