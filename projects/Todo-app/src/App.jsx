import { AppName } from "./components/AppName";

function App() {
  return (
    <center class="todo-container">
      <AppName/>
      <div class="container text-center">
        <div class="row">
          <div class="col-4">
            <input type="text" name="" id="" placeholder="Enter todo here" />
          </div>
          <div class="col-4">
            <input type="date" name="" id="" />
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success">
              Add
            </button>
          </div>
        </div>

        <div class="row">
          <div class="col-4">Buy Milk</div>
          <div class="col-4">4/10/2023</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>

        <div class="row">
          <div class="col-4">Goto college</div>
          <div class="col-4">4/10/2023</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;
