import { selectTasks } from "../tasksSlice";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../tasksSlice";
import { Wrapper, Task, Content, Button } from "./styled";

const TaskList = ({ toggleTaskDone }) => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

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
            onClick={() => dispatch(deleteTask(task.id))}>
            ✗
          </Button>
        </Task>
      ))}
    </Wrapper>
  )
};

export default TaskList;