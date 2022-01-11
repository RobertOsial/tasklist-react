import { selectTasks } from "../tasksSlice";
import { useSelector, useDispatch } from "react-redux";
import { Wrapper, Button } from "./styled";
import { toggleHideDone } from "../tasksSlice";

const Buttons = ({ setAllDone }) => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      {tasks.length > 0 && (
        <>
          <Button
            onClick={() => dispatch(toggleHideDone())}
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