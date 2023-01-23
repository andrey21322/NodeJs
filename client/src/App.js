import React, { Component } from 'react'
import axios from 'axios'

import InputsPage from './inputsPage';
import Render from './render';

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      name:'1',
      txt:'2',
      surname:'3',
      arr:[]
    }
  }
  
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  removeItem = name => {
    console.log(name)
  }

  handleSubmit = e => {
    e.preventDefault();

    const { name, txt, surname } = this.state;

    const data = {
      name,
      surname,
      txt
    }
    axios
    .post('http://localhost:3001/add', data)
    .then(value => console.log(value))
    .catch(err => console.error(err))
      this.setState(prevState => ({
        arr: [...prevState.arr, data]
      }))
    }
  
  render() {
    return (
      <div className="container">
        <div onClick={() => console.log(this.state.arr)}>check arr</div>
        <InputsPage 
        handleInputChange={this.handleInputChange} 
        handleSubmit={this.handleSubmit}
        removeItem={this.removeItem}
        />
        <Render 
        data={this.state.arr}
        removeItem={this.removeItem}
        />
      </div>
    );
  }
  
}

export default App;