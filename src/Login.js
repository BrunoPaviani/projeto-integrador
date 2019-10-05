import React, { Component } from 'react';
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      checkboxValue: true
    };
  }

  render() {
    return (<div className="p-col-12 p-lg-8">
      <div className="card card-w-title">
        <h1>Login</h1>
        <div className="p-grid">
          <div className="p-col-12 p-lg-8">
            <div className="p-col-12 p-md-6">
              <InputText placeholder="Login" />
            </div>
            <div className="p-col-12 p-md-6">
              <Password placeholder="Senha" weakLabel="Fraca" mediumLabel="Rasoável" strongLabel="Bom" promptLabel="Digite sua senha" />
            </div>
            <div className="p-col-12 p-md-6">
              <Checkbox value={this.state.checkboxValue ? 'S' : 'N'} inputId="cb1" id="cbteste" onChange={(e) => this.setState({ checkboxValue: e.checked })} checked={this.state.checkboxValue} />
              <label htmlFor="cb1" className="p-checkbox-label">Manter-me conectado</label>
            </div>
            <div className="p-col-12">
              <Button label="Login" />
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}