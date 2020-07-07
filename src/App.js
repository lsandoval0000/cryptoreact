import React, { Component } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import axios from 'axios';

class App extends Component {

  token = '477ca26d-e258-4b2a-80da-75e035d9e3bf';

  constructor(props){
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    this.obtenerMonedas();
  }

  obtenerMonedas = async ()=>{
    const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/map`;
    await axios.get(url,{ 'headers': { 'X-CMC_PRO_API_KEY': this.token, 'Content-Type':'application/x-www-form-urlencoded','Access-Control-Allow-Origin':'*' } }).then(respuesta =>{
      console.log(respuesta);
      
    });
  }

  render() {
    return (
      <div className="container">
        <Header
          titulo = "Cotiza Cryptomonedas al Instante"
        />
        <div className="row justify-content-center">
          <div className="col-md-6 bg-light pb-4 contenido-principal">
            <Formulario
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;