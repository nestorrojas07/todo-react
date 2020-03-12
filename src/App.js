import React from 'react';
import './App.css';


function HelloWorld(){
  return (
    <div id="hello" >hello world</div>
  );
}

const App = () => 
    <div>This is the main component: <HelloWorld /></div>

export default App;