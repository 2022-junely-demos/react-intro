import logo from './logo.svg';
import './App.css';
import Cat from './components/Cat';

function App() {
  return (
    <>
      <div>Hello world</div>
      <Cat name="Fluffy" age={7} />
      <Cat name="Tilly" age={3} />
    </>
  );
}

export default App;
