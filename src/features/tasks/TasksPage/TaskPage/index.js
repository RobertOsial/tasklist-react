import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Container from "../../../../common/Container";
import Header from "../../../../common/Header";
import Section from "../../../../common/Section";
import { getTaskById } from "../../tasksSlice";

const TaskPage = () => {
  const { id } = useParams();
  const task = useSelector(state => getTaskById(state, id));

  return (
    <Container>
      <Header title="Szczegóły zadania" />
      <Section
        title={task ? task.content : "nie znaleziono zadania:(("}
        body={`Ukończone: ${task.done ? "Tak" : "Nie"}`}
      />
    </Container>
  );
}

export default TaskPage;