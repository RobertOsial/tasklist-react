import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteTask,
  toggleTaskDone,
  selectHideDone,
  selectTasks,
} from "../../tasksSlice";
import { Wrapper, Task, Content, Button } from "./styled";

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
            <Link to={`/zadania/${task.id}`}>{task.content}</Link>
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