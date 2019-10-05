import React from 'react';
import { InputText } from 'primereact/inputtext';
import { MultiSelect } from 'primereact/multiselect';
import Painel from '../../common/Painel';
import { Button } from 'primereact/button';

export class Cadastro extends Painel {
  constructor() {
    super();
    this.state = {
      cars: [],
      carOptions: [
        { label: 'Overlock', value: 'Overlock' },
        { label: 'Barra', value: 'Barra' },
        { label: 'Botão', value: 'Botão' },
        { label: 'Tinturaria', value: 'Tinturaria' },
        { label: 'Costura', value: 'Costura' }
      ]
    }
  }

  

  render() {
    return (
      <div className="card card-w-title">
        <h1>Cadastro</h1>

        <div id="detalhe" className="p-grid painel-detalhe">
            <div className="p-col-12 p-md-2">
              <InputText placeholder="Codigo" />
            </div>
            <div className="p-col-12 p-md-2">
              <InputText placeholder="Nome" />
            </div>
            <div className="p-col-12 p-md-2">
              <InputText placeholder="E-mail" />
            </div>
            <div className="p-col-12 p-md-2">
              <InputText placeholder="CNPJ" />
            </div>
            <div className="p-col-12 p-md-2">
              <InputText placeholder="Cidade" />
            </div>
            <div className="p-col-12 p-md-2">
              <InputText placeholder="Estado" />
            </div>
            <div className="p-col-12 p-md-2">
              <InputText placeholder="Endereço" />
            </div>
            <div className="p-col-12 p-md-2">
              <InputText placeholder="Telefone" />
            </div>
            <div className="p-col-12 p-md-2">
              <MultiSelect className="multiselect-field" placeholder="Serviços" value={this.state.cars} options={this.state.carOptions} onChange={event => this.setState({ cars: event.value })} filter={true} />
            </div>
            <div className="tela-inteira">
              <div className="p-toolbar-group-right">
                <Button label="Cancelar" onClick={this.cancelButton} className="p-button-secondary p-button-raised" />
                <Button label="Salvar" className="p-button-success p-button-raised" />
              </div>
            </div>
        </div>
        <div className="p-col-12 p-lg-12">
          <div className="card">
          </div>
        </div>
      </div>
    );
  }
}