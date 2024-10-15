import Card from "./Components/Card";
import Counter from "./Components/Counter";

function App() {
  let cardObject = {
    names: "Chai aur Code",
    para: "lorem10",
  };
  return (
    <>
      {/* <Counter /> */}
      <Card obj={cardObject} />
    </>
  );
}

export default App;
