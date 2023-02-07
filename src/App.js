import "./App.css";
import { useEffect, useState } from "react";
import Names from "./components/Names";
import Header from "./components/Header";
function App() {
  const [data, setData] = useState([]);
console.log(data)

const dataShow= data.map((item, index) => <Names name={item} key={index}/>)
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setData(data.data.memes.map(item =>  item.name)));
  }, []);
  return (
    <div className="App">
      <Header />
      <h1 className="title">welcome to list of names </h1>
      {dataShow}
    </div>
  );
}

export default App;
