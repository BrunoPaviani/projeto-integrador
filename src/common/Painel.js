import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';

export default class Painel extends Component {

  /**
   * @author Claudio
   * @param {
   *          id,
   *          nomeCampo,
   *          isGridDetalhe,
   *          isMultiSelecao,
   *          tamanhoCampo,
   *          tipo,
   *          ehSomenteLeitura
   * } dados 
   */
  montarTabela(dados) {
    const tela = [];
    tela.push(this.montarGrid(dados));
    tela.push(this.montarDetalhe(dados));
    return tela;
  }

  onClick(event) {
    document.getElementById('detalhe').className = 'p-grid';
    document.getElementById('grid').style.display = 'none';
  }

  cancelButton() {
    document.getElementById('detalhe').className = 'none';
    document.getElementById('grid').style.display = 'p-grid';
  }

  montarGrid(dados) {
    const col = [];
    dados.forEach(campo => {
      if (['G', 'B'].includes(campo.isGridDetalhe)) {
        col.push(<Column field={campo.id} key={campo.id} header={campo.nomeCampo} sortable={true} />);
      }
    });

    return <div>
      <Toolbar>
        <div className="p-toolbar-group-right">
          <Button icon="pi pi-plus" label="Novo" onClick={this.onClick} style={{ marginRight: '.25em' }} />
          <Button icon="pi pi-times" className="p-button-danger" />
        </div>
      </Toolbar>
      <div id="grid">
        <DataTable style={{ marginBottom: '20px' }} responsive={true}
          selectionMode={dados.isMultiSelecao ? "multiple" : "single"} >
          {col}
        </DataTable>
      </div>
    </div>;
  }

  montarDetalhe(dadosCampo) {
    const campos = [];
    dadosCampo.forEach(dados => {
      if (['D', 'B'].includes(dados.isGridDetalhe)) {
        campos.push(this.montarCampo(dados));
      }
    });
    return <div id="detalhe" className="p-grid p-fluid">
      <div className="p-col-12 p-lg-6">
        <div className="card card-w-title">
          <div className="p-grid">
            {campos}
          </div>
        </div>
      </div>
      <div className="tela-inteira">
        <div className="p-toolbar-group-right">
          <Button label="Cancelar" onClick={this.cancelButton} className="p-button-secondary p-button-raised" />
          <Button label="Salvar" className="p-button-success p-button-raised" />
        </div>
      </div>
    </div>
  }

  montarCampo(dados) {
    const tamanhoCampo = "p-col-12 p-md-" + dados.tamanhoCampo;
    switch (dados.tipo) {
      case 'IT':
        return <div className={tamanhoCampo} key={dados.id}>
          <InputText id={dados.id} placeholder={dados.nomeCampo} disabled={dados.ehSomenteLeitura} />
        </div>
      case 'DT':
        return <div className={tamanhoCampo} key={dados.id}>
          <Calendar id={dados.id} placeholder={dados.nomeCampo} dateFormat={dados.formatoData} showTime={dados.mostrarHora} disabled={dados.ehSomenteLeitura} />
        </div>
      default:
        break;
    }
  }
}