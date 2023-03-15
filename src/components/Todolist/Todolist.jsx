import { useContext } from 'react';

import { TodoListContext } from '../../Context';
import Todoitem from '../Todoitem';

const Todolist = () => {
  console.log('render TodoList');
  const { todos, deleteTodo, completedTodo } = useContext(TodoListContext);

  return (
    <ul className="list-group">
      {todos.length ? (
        todos.map((todo, i) => {
          return (
            <Todoitem
              key={todo.id}
              deleteTodo={deleteTodo}
              completedTodo={completedTodo}
              index={i}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
            />
          );
        })
      ) : (
        <p>List empty...</p>
      )}
    </ul>
  );
};

export default Todolist;
