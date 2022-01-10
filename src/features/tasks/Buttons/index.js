import { selectTasks } from "../tasksSlice";
import { useSelector } from "react-redux";
import { Wrapper, Button } from "./styled";

const Buttons = ({ hideDone, setAllDone, toggleHideDone }) => {
  const { tasks } = useSelector(selectTasks);

  console.log(tasks);

  return (
    <Wrapper>
      {tasks.length > 0 && (
        <>
          <Button
            onClick={toggleHideDone}
            disabled={tasks.every(({ done }) => !done)}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone

          </Button>
          <Button
            onClick={setAllDone}
            disabled={tasks.every(({ done }) => done)}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </Wrapper>
  )
};

export default Buttons;