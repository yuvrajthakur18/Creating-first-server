import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
import { useState } from "react";

function App() {

  const company="Google";
  const [name, setName] = useState("Yuvraj");

  return (
    <div className="App">
      <h1>Class Component</h1>
      <ClassComponent />
      
      <br/>
      
      <h1>Functional Component</h1>
      <FunctionalComponent name={name} age={21} company={company} setName={setName} />
    </div>
  );
}

export default App;
