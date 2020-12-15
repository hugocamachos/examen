
import './App.css';
import React, { Component } from 'react';


class Diseño extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render(){
  return (
      <div class="container">
        <img src="./imagen/bg-form.png" height="1000px" width="1000px"/>
        <b><img2 src="./imagen/logo.png" height="100px" width="100px"/></b>
        <button>vew more</button>
        <button2>Iniciar Sesion</button2>
        <button3>Contact US</button3>
        <a>Make you travel <br></br>
            Memoriable</a>
        <select class="menu">
          <option>New York </option>
          <option selected="yes">Bucharest</option>
          <option>Madrid</option>
          </select>
      </div>
   
  );

  }
}

export default Diseño;
