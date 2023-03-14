const Footer = ({ returnPrevState, deleteAll }) => {
  const deleteHandler = () => {
    deleteAll();
  };
  const recoverHandler = () => {
    returnPrevState();
  };

  return (
    <footer className="d-flex justify-content-center">
      <button
        onClick={recoverHandler}
        type="button"
        className="btn btn-info mx-2"
      >
        Recover
      </button>
      <button onClick={deleteHandler} type="button" className="btn btn-dark">
        Delete all
      </button>
    </footer>
  );
};

export default Footer;
