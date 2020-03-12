import React from 'react';
import './App.css';


function HelloWorld(){
  return (
    <div id="hello" >hello world</div>
  );
}

function App() {
  return (
    <div>This is the main component: <HelloWorld /></div>
  );
}

export default App;