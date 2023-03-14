import { useState } from 'react';

const Form = ({ addNewTodo }) => {
  const [text, setText] = useState('');
  const changeHandler = (e) => {
    setText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (text.trim()) {
      addNewTodo(text);
      setText('');
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="mt-2 d-flex flex-column align-items-center"
    >
      <div className="mb-3">
        <input
          onChange={changeHandler}
          type="text"
          className="form-control style"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={text}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
export default Form;
