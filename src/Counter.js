
import React, { Component } from 'react';

function getStateFromLocalStorage(){
  var storage = localStorage.getItem('counterState');
  console.log('Storage', typeof storage);

  if(typeof storage == 'string'){
    return JSON.parse(storage);
  }else{
    return {count : 0 };
  }

}

function calc (type){
  switch(type){
    case 'inc':
      return this.state.count >= 5 ? {count : 5 } : {count : this.state.count +1 };
    case 'dec':
      return {count : this.state.count - 1 };
    case 'res':
      return {count : 0 };
    default:
      return;
  }
}

class Counter extends Component {
  constructor(props){
    super(props);

    this.state = getStateFromLocalStorage();
    
    this.calc = calc.bind(this);
  }

  increment = () => {
    this.setState(
      this.calc('inc'), 
      () => localStorage.setItem('counterState', JSON.stringify(this.state))
    );
  }
  decrement = () =>{
    this.setState(this.calc('dec'));
  }
  reset = () => {
    this.setState(
      this.calc('res'), 
      () => localStorage.setItem('counterState', JSON.stringify(this.state))
    );
  }

  render() {
    const { count } = this.state;
    document.title = `Current count: ${count}`;
    return (
      <div className="Counter">
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          <button onClick={this.reset}>Reset</button>
        </section>
      </div>
    );
  }
}

export default Counter;
