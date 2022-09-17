import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [stuff, setStuff] = useState();
  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((res) => res.json())
      .then((data) => {
        setStuff(data[0]);
        // console.log(data);
      });
  }, []);
  console.log(stuff);
  return <div className="App">{stuff.name}</div>;
}

export default App;
