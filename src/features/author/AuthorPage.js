import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

const AuthorPage = () => {
  return (
    <Container>
      <Header title="O autorze" />
      <Section
        title="Robert Osial"
        body={<>Lubię się uczyć nowych rzeczy. Hobbistycznie programuję w React.</>}
      />
    </Container>
  );
}

export default AuthorPage;