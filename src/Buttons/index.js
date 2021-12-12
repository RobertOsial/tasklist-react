import { Wrapper, Button } from "./styled";

const Buttons = ({ tasks, hideDone, setAllDone, toggleHideDone }) => (
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
);

export default Buttons;