import { useContext } from 'react';

import { TodoListContext } from '../../Context';
import Todoitem from '../Todoitem';

const Todolist = () => {
  const { todos, deleteTodo, completedTodo } = useContext(TodoListContext);

  const Content = () => {
    if (todos.length === 0) {
      return <p>List empty...</p>;
    }
    return todos.map((todo, i) => {
      return (
        <Todoitem
          key={todo.id}
          deleteTodo={deleteTodo}
          completedTodo={completedTodo}
          index={i}
          {...todo}
        />
      );
    });
  };

  return <ul className="list-group">{Content()}</ul>;
};

export default Todolist;
