import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ModalPopUp from './component/ModalPopUp'

class App extends Component {
  constructor(props){
    super(props)
    this.onHandlechange=this.onHandlechange.bind(this)
    this.state={
      popUp:false
    }
  }

  onHandlechange(e){
    this.setState({popUp:true})
  }
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button bsStyle="primary" onClick={this.onHandlechange}>
          Launch demo modal
        </button>
        <ModalPopUp stateChange={this.state.popUp}/>
      </div>
     
    );
  }
}

export default App;
