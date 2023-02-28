import React, { Component } from "react";
import './style.css';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            time: 0,
            text: "Iniciar"
        };
        this.timer = null;
        this.iniciar = this.iniciar.bind(this);
        this.limpar = this.limpar.bind(this);
    }

    iniciar(){
        if(this.timer != null){
            clearInterval(this.timer);
            this.timer = null;
            let state = this.state;
            state.text = "Iniciar";
            this.setState(state);
        }
        else{
           
            this.timer = setInterval(()=>{
                let state = this.state;
                state.time += 0.1;
                state.text = "Pausar";
                this.setState(state);
            },100);
        }
    }

    limpar(){
        clearInterval(this.timer);
        let state = this.state;
        state.time = 0;
        state.text = "Iniciar";
        this.setState(state);
    }

    render(){
        return(
            <div className="mainContainer">
                <img className="crono" alt="Cronometro" src = {require('./assets/cronometro.png')}/>
                <p className="time">{this.state.time.toFixed(2)}</p>
                <div className="buttonsContainer">
                    <Botao label={this.state.text} action={this.iniciar}/>
                    <Botao label="Limpar" action={this.limpar}/>
                </div>
            </div>
        );
    }
}

class Botao extends Component{
    render(){
        return(
            <button className="button" onClick={this.props.action}>{this.props.label}</button>
        );
    }
}

export default App;