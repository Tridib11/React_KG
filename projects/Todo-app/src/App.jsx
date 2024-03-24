import { AddTodo } from "./components/AddTodo";
import { AppName } from "./components/AppName";
import { Todos } from "./components/Todos";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <div className="container">
        <div className="items-container">
          <AddTodo />
          <Todos title={"go to school"} date={"10/1/2024"} />
          <Todos title={"go to gym"} date={"10/1/202"} />
        </div>
      </div>
    </center>
  );
}

export default App;
