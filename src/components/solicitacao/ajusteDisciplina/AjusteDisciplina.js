import React, { Component } from 'react';
import { PickList } from 'primereact/picklist';

export class AjusteDisciplina extends Component {
  constructor() {
    super();
    this.state = {
      picklistSourceCars: [],
      picklistTargetCars: []
    }
  }

  render() {
    return (<div className="p-col-12 p-lg-12">
      <div className="card card-w-title">
        <h1>Ajuste de Disciplina</h1>
        <PickList source={this.state.picklistSourceCars} target={this.state.picklistTargetCars} sourceHeader="Disponíveis" targetHeader="Selecionadas"
          responsive={true} itemTemplate={(car) => <span>{car.brand}</span>}
          onChange={event => this.setState({ picklistSourceCars: event.source, picklistTargetCars: event.target })} />
      </div>

    </div>);
  }
}