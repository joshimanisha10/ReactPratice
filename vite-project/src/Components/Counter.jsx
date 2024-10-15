import { useState } from "react";

function Counter() {
  const [Counter, setCounter] = useState(0);
  function AddCounter(Counter) {
    if (Counter >= 0 && Counter < 20) setCounter(Counter + 1);
  }
  function RemoveCounter(Counter) {
    if (Counter > 0) setCounter(Counter - 1);
  }

  return (
    <>
      <div>
        <h1>Counter</h1>
      </div>
      <button
        style={{ border: "2px solid black", padding: "10px 20px" }}
        onClick={() => AddCounter(Counter)}
      >
        Increase
      </button>
      <h3>Increase or Decrease {Counter}</h3>
      <button
        style={{ border: "2px solid black", padding: "10px 20px" }}
        onClick={() => RemoveCounter(Counter)}
      >
        Decrease
      </button>
    </>
  );
}

export default Counter;
