import Form from "./Form";
import TaskList from "./TaskList";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import Buttons from "./Buttons";
import { Button } from "../../../common/Section/styled";
import { useDispatch } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../tasksSlice"
import { useSelector } from "react-redux";
import Search from "./Search";

const Tasks = () => {
  const loading = useSelector(selectLoading);
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
            disabled={loading}>
            {loading ? "Ładowanie..." : "Pobierz zadania"}
          </Button>}
      />
      <Section
        title="Wyszukiwarka"
        body={<Search />}
      >
      </Section>
      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default Tasks;
