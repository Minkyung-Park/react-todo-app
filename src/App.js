import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/Todoinsert";
import TodoListItem from "./components/TodoListItem";
import TodoList from "./components/TodoList";

function App() {
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList />
    </TodoTemplate>
  );
}

export default App;
