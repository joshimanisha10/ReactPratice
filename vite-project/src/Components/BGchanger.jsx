import { useState } from "react";

export default function BGchanger() {
  const [Color, setColor] = useState();
  function handleColor(color) {
    setColor(color);
  }
  return (
    <>
      <div
        style={{
          backgroundColor: `${Color}`,
          width: "100%",
          height: "500px",
        }}
      >
        <button
          style={{
            backgroundColor: `${Color}`,
            border: "2px solid red",
            padding: "10px 20px",
          }}
          onClick={() => handleColor("red")}
        >
          Red
        </button>
        &nbsp;
        <button
          style={{
            backgroundColor: `${Color}`,
            border: "2px solid pink",
            padding: "10px 20px",
          }}
          onClick={() => handleColor("Pink")}
        >
          Pink
        </button>
        &nbsp;
        <button
          style={{
            backgroundColor: `${Color}`,
            border: "2px solid yellow",
            padding: "10px 20px",
          }}
          onClick={() => handleColor("yellow")}
        >
          Yellow
        </button>
        &nbsp;
        <button
          style={{
            backgroundColor: `${Color}`,
            border: "2px solid green",
            padding: "10px 20px",
          }}
          onClick={() => handleColor("green")}
        >
          Green
        </button>
      </div>
    </>
  );
}
