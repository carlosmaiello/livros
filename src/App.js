import './App.css';
import ListaPage from './pages/ListaPage';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import LoginPage from './pages/LoginPage';
import React from 'react';
import { login } from './dados';

class App extends React.Component {
  constructor (props)  {
    super(props);

    this.state = {
      token: '',
      usuario: null,
      estaLogado: false
    }

    this.logar = this.logar.bind(this);
  }

  logar(event) {
    this.setState({
      token: '',
      usuario: null,
      estaLogado: false
    });

    login(event.email, event.senha).then(res => {
      this.setState({
        token: res.token,
        usuario: res.usuario,
        estaLogado: true
      });
    }).catch(erro => {
      alert(erro);
    })
  }

  render () {
    return (
      <div className="App">
        <div className="container">
          {!this.state.estaLogado && (
            <LoginPage onLogar={this.logar} />
          )}
          {this.state.estaLogado && (
            <ListaPage />
          )}
        </div>
      </div>
    );
  }
}

export default App;
