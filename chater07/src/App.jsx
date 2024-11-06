import "./App.css";
import { useState } from "react";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";

function App() {
  const [count, setCount] = useState(0);

  const updateCount = (param) => {
    setCount(count + param);
  };

  return (
    <div className="rootContainer">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller updateCount={updateCount} />
      </section>
    </div>
  );
}

export default App;
