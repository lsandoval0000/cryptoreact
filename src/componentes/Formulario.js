import React, { Component } from 'react';

class Formulario extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label>Moneda:</label>
                    <select className="form-control">
                        <option value="" disabled defaultValue>Elige tu moneda</option>
                        <option value="USD">Dolar Estadounidense</option>
                        <option value="MXN">Peso Mexicano</option>
                        <option value="GBP">Libras</option>
                        <option value="EUR">Euros</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Cryptomonedas:</label>
                    <select className="form-control">

                    </select>
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary" value="Cotizar"/>
                </div>
            </form>
        );
    }
}




export default Formulario;