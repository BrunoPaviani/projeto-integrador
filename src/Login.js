import React, { Component } from 'react';
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { setAuthenticated } from './service/Auth';
import { carregaDados, getNome, getSenhaUsuario, getNomeUsuario } from './common/DadosUsuario';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      checkboxValue: true,
      valorSenha: "",
      valorLogin: ""
    };

  }
  
  onClick() {
    const login = document.getElementById('login-campo').value;
    const senha = document.getElementById('senha-campo').value;
    let isAuthenticated = true;
    carregaDados(login);
    
    if (!login) {
      alert('Campo login vazio!');
      isAuthenticated = false;
    } else if (!senha) {
      alert('Campo senha vazio!');
      isAuthenticated = false;
    } else if (!getNomeUsuario()) {
      alert('Usuário não existente');
      isAuthenticated = false;
    } else if (senha !== getSenhaUsuario()) {
      alert('Senha incorreta');
      isAuthenticated = false;
    }
    
    if (isAuthenticated) {
      setAuthenticated(isAuthenticated);
      document.getElementById('div-principal').style.display = 'block';
      document.getElementById('tela-login').style.display = 'none';
      const locale = window.location.href.concat('dashboard');
      window.location.href = locale;
    }
  }

  onKeyPress(event) {
    if (event.charCode === 13) {
      Login.onClick();
    }
  }

  render() {
    return (<div id='tela-login' className="p-col-12 tela-login">
      <div className="card card-w-title">
        <h1>Login</h1>
        <div className="p-grid">
          <div className="p-col-12 p-lg-8" onKeyPress={(e) => { if (e.charCode === 13) {
            this.onClick();
          }}}>
            <div className="p-col-12 p-md-6">
              <InputText id="login-campo" placeholder="Login" />
            </div>
            <div className="p-col-12">
              <Password id="senha-campo" placeholder="Senha" weakLabel="Fraca" mediumLabel="Rasoável" strongLabel="Bom" promptLabel="Digite sua senha" />
            </div>
            <div className="p-col-12">
              <Checkbox value={this.state.checkboxValue ? 'S' : 'N'} inputId="cb1" id="cbteste" onChange={(e) => this.setState({ checkboxValue: e.checked })} checked={this.state.checkboxValue} />
              <label htmlFor="cb1" className="p-checkbox-label">Manter-me conectado</label>
            </div>
            <div className="p-col-12">
              <Button label="Login" onClick={(e) => this.onClick(e)} />
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}