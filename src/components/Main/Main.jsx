import Todolist from '../Todolist';

const Main = ({ completedTodo, deleteTodo, todos }) => {
  return (
    <div>
      <Todolist
        completedTodo={completedTodo}
        deleteTodo={deleteTodo}
        todos={todos}
      />
    </div>
  );
};

export default Main;
