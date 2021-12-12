import { Wrapper, Task, Content, Button } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <Wrapper>
        {tasks.map(task => (
            <Task
                key={task.id}
                hidden={task.done && hideDone}
            >
                <Button
                    toggleTaskDone
                    onClick={() => toggleTaskDone(task.id)}>
                    {task.done ? "✓" : ""}
                </Button>
                <Content done={task.done}>
                    {task.content}
                </Content>
                <Button
                    remove
                    onClick={() => removeTask(task.id)}>
                    ✗
                </Button>
            </Task>
        ))}
    </Wrapper>
);

export default Tasks;