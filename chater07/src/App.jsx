import "./App.css";
import { useState, useEffect, useRef } from "react";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";

function App() {
  const [count, setCount] = useState(0);
  const isMount = useRef(false);

  useEffect(() => {
    console.log("mount");
  }, []);

  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });

  const updateCount = (param) => {
    setCount(count + param);
  };

  return (
    <div className="rootContainer">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
        {count % 2 == 0 ? <Even /> : ""}
      </section>
      <section>
        <Controller updateCount={updateCount} />
      </section>
    </div>
  );
}

export default App;
