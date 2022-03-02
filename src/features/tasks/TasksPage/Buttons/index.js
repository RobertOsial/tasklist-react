import { useSelector, useDispatch } from "react-redux";
import {
  selectHideDone,
  selectTasks,
  toggleHideDone,
  setAllDone,
  selectAreTasksEmpty
} from "../../tasksSlice";
import { Wrapper } from "./styled";
import { Button } from "../../../../common/Section/styled";

const Buttons = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);
  const areTasksEmpty = useSelector(selectAreTasksEmpty)
  const dispatch = useDispatch();

  return (
    <Wrapper>
      {!areTasksEmpty && (
        <>
          <Button
            onClick={() => dispatch(toggleHideDone())}
            disabled={tasks.every(({ done }) => !done)}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            onClick={() => dispatch(setAllDone())}
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