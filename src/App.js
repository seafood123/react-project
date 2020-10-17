import React,{ Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  render(){
    const var1 = '1변수';
    const var2 = '2변수';
    const condition = false;
    const style = {
      backgroundColor : 'red'
    }
    return(
      <Fragment>
        <div className="App">
          {var1}         
        </div>
        {condition && '거짓'}
        <h1 style={style}>{var2}</h1>
        <h2>hihihihi</h2>
      </Fragment>
    )
  }
}

export default App;
