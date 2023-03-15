const Todoitem = ({
  completedTodo,
  deleteTodo,
  id,
  text,
  completed,
  index
}) => {
  console.log('render TodoItem');
  const deleteHandler = () => {
    deleteTodo(id);
  };

  const completHandler = () => {
    completedTodo(id);
  };

  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className={completed ? 'text-muted' : ''}>
        {index + 1}. {text}
      </span>
      <div>
        <button
          onClick={completHandler}
          type="button"
          className={completed ? 'btn btn-secondary' : 'btn btn-success'}
        >
          {completed ? 'Undone' : 'Done'}
        </button>
        <button
          onClick={deleteHandler}
          type="button"
          className="btn btn-danger mx-1"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Todoitem;
