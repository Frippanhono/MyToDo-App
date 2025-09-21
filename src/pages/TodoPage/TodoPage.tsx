import { Container } from "react-bootstrap";
import Todo from "../../components/Todo/Todo";
import Banner from "../../components/Banner/Banner";

export default function TodoPage() {
  return (
    <div>
      <Container>
        <Banner />

        <Todo />
      </Container>
    </div>
  );
}
