import TodoItem from "./TodoItem";

export default function TodoList({ todoList, onToggle, onRemove }) {
  return (
    <>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} />
      ))}
    </>
  );
}
