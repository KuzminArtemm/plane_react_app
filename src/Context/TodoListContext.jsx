import { createContext } from 'react';

import useTodos from '../hooks/useTodos';

const TodoListContext = createContext();

const TodoListProvider = ({ children }) => {
  console.log('render TodoListProvider');
  const {
    todos,
    deleteTodo,
    deleteAll,
    addNewTodo,
    completedTodo,
    returnPrevState
  } = useTodos();
  return (
    <TodoListContext.Provider
      value={{
        todos,
        addNewTodo,
        deleteTodo,
        completedTodo,
        deleteAll,
        returnPrevState
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoListProvider;

export { TodoListContext };
