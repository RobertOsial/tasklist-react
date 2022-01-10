import { selectTasks } from "../tasksSlice";
import { useSelector } from "react-redux";
import { Wrapper, Task, Content, Button } from "./styled";

const TaskList = ({ hideDone, removeTask, toggleTaskDone }) => {
  const { tasks } = useSelector(selectTasks);

  return (
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
  )
};

export default TaskList;