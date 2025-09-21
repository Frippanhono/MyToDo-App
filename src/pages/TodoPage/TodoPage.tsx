import Header from "../../components/Header/Header";
import { Container } from "react-bootstrap";
import Todo from "../../components/Todo/Todo";
import Banner from "../../components/Banner/Banner";

export default function TodoPage() {
  return (
    <div>
      <Container>
        <Banner />
        <Header title="My ToDo List" />
        <Todo />
      </Container>
    </div>
  );
}
