import React from 'react';
import './App.css';


function HelloWorld(props){
  return (
  <div id="hello" >
    <h1>{props.titulo}</h1>
    {props.texto}
    </div>
  );
}

function App(){
  return (
    <div>
        This is the main component: 
      <HelloWorld texto="Hello world Nestor" titulo ="English" /> 
      <HelloWorld texto="salut monde Nestor" titulo="France" />
      <HelloWorld texto="Hola Mundo" titulo="Spainish" /> 
    </div>
    );
}

export default App;