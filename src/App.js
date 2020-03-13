import React from 'react';
import './App.css';


/* function HelloWorld(props){
  return (
  <div id="hello" >
    <h1>{props.titulo}</h1>
    {props.texto}
    </div>
  );
}
 */
class HelloWorld extends React.Component{

  //objeto para definir los estados propios de componente
  state = {
    //propiedades del componente
    show : true
  }

  render() {
    if(this.state.show){
      return (
        <div id="hello">
          <h1>{this.props.titulo}</h1>
          {this.props.texto}
          <button onClick={() => this.toogleShow()}>Ocultar Forma 1</button>          
        </div>
      );
    }
    return (
      <div onClick={() => this.setState({show : true})}>
        <h1>show esta en false, Click Here to show </h1>
      </div>
    );
  }
  
  toogleShow = () => {
    const { show } = this.state;
    this.setState( { show: !show});
  }

}

function App(){

  return (
    <div>
        This is the main component: 
      <HelloWorld texto="Hello world Nestor" titulo ="English" /> 
      <HelloWorld texto="salut monde Nestor" titulo="France" />
      <HelloWorld texto="Hola Mundo" titulo="Spainish"  /> 
    </div>
    );
}

export default App;