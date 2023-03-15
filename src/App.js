import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import TodoListProvider from './Context/TodoListContext';
function expensive() {
  let tmp;
  for (let index = 0; index < 2e8; index++) {
    tmp = Math.random();
  }
  return tmp;
}
function App() {
  console.log('render APP');
  return (
    <TodoListProvider>
      <div className="container">
        <Header />
        <hr />
        <Main />
        <Footer />
        <p>expensive: {expensive()}</p>
      </div>
    </TodoListProvider>
  );
}

export default App;
