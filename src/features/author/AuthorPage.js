import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

const AuthorPage = () => {
  return (
    <Container>
      <Header title="O autorze" />
      <Section
        title="Robert Osial"
        body={<>tescik</>}
      />
    </Container>
  );
}

export default AuthorPage;