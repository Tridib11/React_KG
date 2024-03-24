export function Todos({title,date}) {
  return (
    <div className="kg-row">
      <div className="row">
        <div class="col-4">{title}</div>
        <div class="col-4">{date}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
