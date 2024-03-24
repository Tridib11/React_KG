import { AddTodo } from "./components/AddTodo";
import { AppName } from "./components/AppName";
import { Todos } from "./components/Todos";

function App() {
  return (
    <center class="todo-container">
      <AppName/>
      <div class="container text-center">
        <AddTodo/>
        <Todos/>      
      </div>
    </center>
  );
}

export default App;
