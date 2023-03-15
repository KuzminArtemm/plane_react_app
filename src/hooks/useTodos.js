import { useCallback, useEffect, useState } from 'react';

import { nanoid } from 'nanoid';

const LSTodosKey = 'todos';
const history = [];

const useTodos = () => {
  const [todos, setTodos] = useState([]);

  const addNewTodo = useCallback((text) => {
    setTodos((prevState) => [
      ...prevState,
      {
        id: nanoid(),
        text,
        completed: false
      }
    ]);
  }, []);

  const deleteTodo = (id) => {
    history.push(todos);
    return setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };

  const completedTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  };

  const deleteAll = useCallback(() => {
    history.push(todos);
    setTodos([]);
  }, [todos]);

  const returnPrevState = useCallback(() => {
    setTodos(history.pop());
  }, []);

  useEffect(() => {
    const dataFromLS = localStorage.getItem(LSTodosKey);
    if (dataFromLS) {
      setTodos(JSON.parse(dataFromLS));
    } else {
      fetch('https://jsonplaceholder.typicode.com/todos/?_limit=5')
        .then((res) => res.json())
        .then((data) =>
          data.map(({ title, userId, ...rest }) => ({ ...rest, text: title }))
        )
        .then(setTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LSTodosKey, JSON.stringify(todos));
  }, [todos]);

  return {
    todos,
    deleteTodo,
    deleteAll,
    addNewTodo,
    completedTodo,
    returnPrevState
  };
};

export default useTodos;
