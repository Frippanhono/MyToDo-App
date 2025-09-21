import "./TodoFooter.css";

interface TodoFooterProps {
  numberOfIncompleteTasks: number;
}

function TodoFooter({ numberOfIncompleteTasks }: TodoFooterProps) {
  return (
    <div className="todo-footer">
      <p>
        {numberOfIncompleteTasks}{" "}
        {numberOfIncompleteTasks === 1 ? "task" : "tasks"} left
      </p>
    </div>
  );
}

export default TodoFooter;
