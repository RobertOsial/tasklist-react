import { useSelector, useDispatch } from "react-redux";
import {
  deleteTask,
  toggleTaskDone,
  selectHideDone,
  selectTasks,
} from "../../tasksSlice";
import { Wrapper, Task, Content, Button, ContentLink } from "./styled";

const TaskList = () => {
  const tasks = useSelector(selectTasks)
  const hideDone = useSelector(selectHideDone);
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
            onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✓" : ""}
          </Button>
          <Content done={task.done}>
            <ContentLink to={`/zadania/${task.id}`}>{task.content}</ContentLink>
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