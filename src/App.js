import background from './background.jpeg';
import './App.css';
import Cat from './components/Cat/Cat';
import cats from './cats';
function App() {
  const catComponents = [];
  for (let cat of cats) {
    catComponents.push(<Cat key={cat.name} name={cat.name} />);
  }
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <div>Hello world</div>
      {[<Cat key="1" name="Fluffy" lives={7} />, <Cat key="2" name="Tilly" age={3} />]}

      <h2>Option 1 for Mapping</h2>
      {/* use of regular parens has automatic return */}
      {cats.map((cat) => (
        <Cat key={cat.name} name={cat.name} lives={cat.lives} color={cat.color} />
      ))}

      <h2>Option 2 for Mapping</h2>
      {/* notice use of curlys in arrow function requires return */}
      {/* in case you need to do extra stuff before the return */}
      {cats.map((cat) => {
        const nameAndType = `${cat.name} ${cat.type}`;
        return <Cat key={cat.name} name={nameAndType} lives={cat.lives} />;
      })}

      <h2>Option 3 Manual (do not do this) </h2>
      {catComponents}
    </div>
  );
}

export default App;
