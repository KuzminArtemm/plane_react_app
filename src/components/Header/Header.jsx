import Form from '../Form';

const Header = ({ addNewTodo }) => {
  return (
    <header>
      <Form addNewTodo={addNewTodo} />
    </header>
  );
};

export default Header;
