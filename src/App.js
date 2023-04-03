import './App.css';
import ClassComponent from './pages/ClassComponent';
import FunctionalComponent from './pages/FunctionalComponent';
import { useState } from "react";

import { Routes, Route } from "react-router-dom" ;

// HOC Layouts
import BaseHoc from './hoc/BaseHoc';


function App() {
  
  const company="Google";
  const [name, setName] = useState("Yuvraj");
  /*
  return (
    <div className="App">
      <h1>Class Component</h1>
      <ClassComponent />
      
      <br/>
      
      <h1>Functional Component</h1>
      <FunctionalComponent name={name} age={21} company={company} setName={setName} />
    </div>
  );
  */
  
  return (
    <Routes>
      <Route 
          path="/" 
          element = { 
            
              <ClassComponent /> 
           
          } 
      />
      <Route 
          path="/functional-component" 
          element={
            
              <FunctionalComponent 
              name={name} 
              age={21} 
              company={company} 
              setName={setName} 
              />
                
          } 
      />
    </Routes>
  );
}

export default App;
