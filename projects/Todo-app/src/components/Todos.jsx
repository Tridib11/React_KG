export function Todos({title,date}) {
  return (
    <div>
      <div class="row">
        <div class="col-4">{title}</div>
        <div class="col-4">{date}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
