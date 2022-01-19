import Form from "./Form";
import TaskList from "./TaskList";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import Buttons from "./Buttons";
import { Button } from "../../common/Section/styled";
import { useDispatch } from "react-redux";
import { fetchExampleTasks, selectExampleTasksLoading } from "./tasksSlice"
import { useSelector } from "react-redux";

const Tasks = () => {
  const areExampleTasksLoading = useSelector(selectExampleTasksLoading);
  const dispatch = useDispatch();

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={
          <Button
            onClick={() => dispatch(fetchExampleTasks())}
            disabled={areExampleTasksLoading}>
            {areExampleTasksLoading ? "Ładowanie..." : "Pobierz zadania"}
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
