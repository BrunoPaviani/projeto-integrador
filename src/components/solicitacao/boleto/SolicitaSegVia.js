import React, { Component } from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';

export class SolicitaSegVia extends Component {
  constructor() {
    super();
    this.state = {
      date: null
    };
  }

  onClick() {
    window.open('//www.uniasselvi.com.br/extranet/o-2.0/boleto/mensalidade/boleto_mensalidade_controle.php');
  }

  render() {
    return (
      <div className="p-grid p-fluid">
        <div className="p-col-12 p-lg-12">
          <div className="card card-w-title">
            <h1>Solicitação de segunda via do boleto</h1>
            <div>
              <Toolbar>
                <div className="p-col-6">
                  <Calendar id="mes-referencia" inputId="mes-referencia" readOnly={true} dateFormat="mm/yy" placeholder="Mês de referência" view="month" value={this.state.date7} onChange={(e) => this.setState({ date7: e.value })} />
                </div>
                <div className="p-toolbar-group-right">
                  <Button icon="pi pi-plus" label="Gerar" onClick={this.onClick} style={{ marginRight: '.25em' }} />
                </div>
              </Toolbar>
            </div>
          </div>
        </div>
      </div>);
  }
}
