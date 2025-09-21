import { useState } from "react";
import "./AddInput.css";
import { v4 } from "uuid";

interface Todo {
  id: string;
  task: string;
  completed: boolean;
}

interface AddInputProps {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  todos: Todo[];
}

function AddInput({ setTodos, todos }: AddInputProps) {
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    const updatedTodos = [
      ...todos,
      {
        id: v4(),
        task: todo,
        completed: false,
      },
    ];
    setTodos(updatedTodos);
    setTodo("");
  };

  return (
    <div className="input-container">
      <input
        className="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new task here..."
      />
      <button className="add-btn" onClick={addTodo}>
        Add
      </button>
    </div>
  );
}

export default AddInput;
