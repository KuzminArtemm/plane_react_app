import { useState } from 'react';

import { nanoid } from 'nanoid';

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

const history = [];

function App() {
  const [todos, setTodos] = useState([]);

  const addNewTodo = (text) => {
    setTodos((prevState) => [
      ...prevState,
      {
        id: nanoid(),
        text,
        completed: false
      }
    ]);
  };

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

  const deleteAll = () => {
    history.push(todos);
    setTodos([]);
  };

  const returnPrevState = () => {
    setTodos(history.pop());
  };

  console.log(todos);

  return (
    <div className="container">
      <Header addNewTodo={addNewTodo} />
      <hr />
      <Main
        completedTodo={completedTodo}
        deleteTodo={deleteTodo}
        todos={todos}
      />
      <Footer returnPrevState={returnPrevState} deleteAll={deleteAll} />
    </div>
  );
}

export default App;
