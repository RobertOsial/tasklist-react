import Form from "./Form";
import Tasks from "./Tasks";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  {
    id: 1,
    content: "nauczyć się Reacta",
    done: false,
  },
  {
    id: 2,
    content: "zrobić kawę",
    done: true,
  },
];

function App() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks} />}
      />
    </Container>
  );
}

export default App;
