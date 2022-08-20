import './App.css';
import Banner from './Banner';
import {useState} from 'react'
function App() {
  let firstname="Gurvi"
  let name1="Banner1";
  let name2="Banner2";

  let [names,setNames]=useState("Gurvi");

  function clicked(){
    // console.log(firstname);
    // console.log("after clicked");
    // firstname="Gurvinder";
    
    // console.log(firstname);

    setNames("Gurvinder")
  }
  return (
    <div>
    <h1>Welcome to App component {firstname}</h1>
    <h1>Welcome to App component {names}</h1>
    <button onClick={clicked}>Click me!</button>
    <Banner name={name1} />
    <Banner name={name2} />
    </div>
  );
}

export default App;
