import { AddTodo } from "./components/AddTodo";
import { AppName } from "./components/AppName";
import { Todos } from "./components/Todos";
import './App.css'

function App() {
  return (
    <center class="todo-container">
      <AppName/>
      <div class="container text-center">
        <AddTodo/>
        <Todos title={"go to school"} date={"10/1/2024"}/>   
        <Todos title={"go to gym"} date={"10/1/202"}/>      
      </div>
    </center>
  );
}

export default App;
