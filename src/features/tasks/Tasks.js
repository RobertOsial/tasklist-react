import Form from "./Form";
import TaskList from "./TaskList";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import Buttons from "./Buttons";
import { Button } from "../../common/Section/styled";
import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "./tasksSlice"

const Tasks = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={
          <Button onClick={() => dispatch(fetchExampleTasks())}>
            Pobierz zadania
          </Button>}
      />
      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default Tasks;
