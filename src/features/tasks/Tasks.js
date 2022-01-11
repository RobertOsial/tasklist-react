import { useTasks } from "../../useTasks";
import Form from "./Form";
import TaskList from "./TaskList";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import Buttons from "./Buttons";

const Tasks = () => {

  const {
    // tasks,
    // addNewTask,
    setAllDone,
    // toggleTaskDone,
    // removeTask,
  } = useTasks();

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={<TaskList />
        }
        extraHeaderContent={
          <Buttons setAllDone={setAllDone} />
        }
      />
    </Container>
  );
}

export default Tasks;
