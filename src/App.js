import TodoBox from "./components/TodoBox";
import TodoHeader from "./components/TodoHeader";
import { createGlobalStyle } from "styled-components";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import { useMemo } from "react";
import { useTodo } from "./components/useTodo";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding : 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  li {
    list-style: none;
  }
`;

function App() {
  const { state, createTodo, toggleTodo, removeTodo, changeInput } = useTodo();

  const { todoList, input } = state;

  const count = useMemo(() => {
    return todoList.filter((todo) => !todo.done).length;
  }, [todoList]);

  return (
    <>
      <GlobalStyle />
      <TodoBox>
        <TodoHeader count={count} />
        <TodoInsert onCreate={createTodo} onChangeInput={changeInput} input={input} />
        <TodoList todoList={todoList} onToggle={toggleTodo} onRemove={removeTodo} />
      </TodoBox>
    </>
  );
}

export default App;
