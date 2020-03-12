import React from 'react';
import './App.css';


function HelloWorld(props){
  return (
  <div id="hello" >{props.texto}</div>
  );
}

function App(){
  return (
      <div>
        This is the main component: 
        <HelloWorld texto="Hello world Nestor" /> 
        <HelloWorld texto="Hello All  world " />
        <HelloWorld/> 
        </div>
    );
}

export default App;