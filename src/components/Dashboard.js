import React, { Component } from 'react';
import { CarService } from '../service/CarService';
import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { FullCalendar } from 'primereact/fullcalendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { InputTextarea } from 'primereact/inputtextarea';

export class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            tasks: [],
            city: null,
            selectedCar: null,
            lineData: {
                labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
                datasets: [
                    {
                        label: 'Primeiro Dataset',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: false,
                        borderColor: '#007be5'
                    },
                    {
                        label: 'Second Dataset',
                        data: [28, 48, 40, 19, 86, 27, 90],
                        fill: false,
                        borderColor: '#20d077'
                    }
                ]
            },
            cities: [
                { label: 'Pedro', value: { id: 1, name: 'Pedro', code: 'PZ' } },
                { label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } },
                { label: 'London', value: { id: 3, name: 'London', code: 'LDN' } },
                { label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } },
                { label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } }
            ],
            fullcalendarOptions: {
                plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
                defaultDate: '2017-02-01',
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay'
                },
                editable: true
            },
            events: [
                {
                    "id": 1,
                    "title": "Dia de evento",
                    "start": "2017-02-01"
                },
                {
                    "id": 2,
                    "title": "Prova de sistemas distribuidos",
                    "start": "2017-02-07"
                },
                {
                    "id": 3,
                    "title": "Pagamento boleto",
                    "start": "2017-02-09T16:00:00"
                },
                {
                    "id": 4,
                    "title": "Mensagem enviada para o coordenador Nader",
                    "start": "2017-02-16T16:00:00"
                },
                {
                    "id": 5,
                    "title": "Carnaval",
                    "start": "2017-02-11",
                    "end": "2017-02-13"
                },
                {
                    "id": 6,
                    "title": "Provas",
                    "start": "2017-02-12T10:30:00",
                    "end": "2017-02-12T12:30:00"
                },
                {
                    "id": 7,
                    "title": "Trabalho geografia",
                    "start": "2017-02-12T12:00:00"
                },
                {
                    "id": 8,
                    "title": "Loucuras",
                    "start": "2017-02-12T14:30:00"
                },
                {
                    "id": 9,
                    "title": "Prova Pedro",
                    "start": "2017-02-12T17:30:00"
                },
                {
                    "id": 10,
                    "title": "Ser feliz",
                    "start": "2017-02-12T20:00:00"
                },
                {
                    "id": 11,
                    "title": "Aniversário Pietra",
                    "start": "2017-02-13T07:00:00"
                },
                {
                    "id": 12,
                    "title": "Google",
                    "url": "http://google.com/",
                    "start": "2017-02-28"
                }
            ]
        };

        this.onTaskChange = this.onTaskChange.bind(this);
        this.onCityChange = this.onCityChange.bind(this);
        this.carservice = new CarService();
        this.showSuccess = this.showSuccess.bind(this);
        this.statusMensagem = false;
    }

    onTaskChange(e) {
        let selectedTasks = [...this.state.tasks];
        if (e.checked)
            selectedTasks.push(e.value);
        else
            selectedTasks.splice(selectedTasks.indexOf(e.value), 1);

        this.setState({ tasks: selectedTasks });
    }

    onCityChange(e) {
        this.setState({ city: e.value });
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({ cars: data }));
    }

    showSuccess() {
        let msg = { severity: 'success', summary: 'Success Message', detail: 'Order submitted' };
        this.messages.show(msg);
    }

    render() {
        return (
            <div className="p-grid p-fluid dashboard">
                <div className="p-col-12 p-lg-4">
                    <div className="card summary">
                        <span className="title">Turma</span>
                        <span className="detail">Turma</span>
                        <span className="count visitors">INF018</span>
                    </div>
                </div>
                <div className="p-col-12 p-lg-4">
                    <div className="card summary">
                        <span className="title">Período</span>
                        <span className="detail">Semestre atual</span>
                        <span className="count purchases">8</span>
                    </div>
                </div>
                <div className="p-col-12 p-lg-4">
                    <div className="card summary">
                        <span className="title">Mesalidade</span>
                        <span className="detail">Data de Vencimento: 10/12/2019</span>
                        <span className="count revenue">R$830</span>
                    </div>
                </div>

                <div className="p-col-12 p-md-6 p-xl-3">
                    <div className="highlight-box">
                        <div className="initials" style={{ backgroundColor: '#007be5', color: '#00448f' }}><span>MC</span></div>
                        <div className="highlight-details ">
                            <i className="pi pi-filter" />
                            <span>Matérias cursadas</span>
                            <span className="count">36</span>
                        </div>
                    </div>
                </div>
                <div className="p-col-12 p-md-6 p-xl-3">
                    <div className="highlight-box">
                        <div className="initials" style={{ backgroundColor: '#ef6262', color: '#a83d3b' }}><span>MR</span></div>
                        <div className="highlight-details ">
                            <i className="pi pi-times" />
                            <span>Matérias reprovadas</span>
                            <span className="count">5</span>
                        </div>
                    </div>
                </div>
                <div className="p-col-12 p-md-6 p-xl-3">
                    <div className="highlight-box">
                        <div className="initials" style={{ backgroundColor: '#20d077', color: '#038d4a' }}><span>MA</span></div>
                        <div className="highlight-details ">
                            <i className="pi pi-check" />
                            <span>Matérias aprovadas</span>
                            <span className="count">31</span>
                        </div>
                    </div>
                </div>
                <div className="p-col-12 p-md-6 p-xl-3">
                    <div className="highlight-box">
                        <div className="initials" style={{ backgroundColor: '#f9c851', color: '#b58c2b' }}><span>MP</span></div>
                        <div className="highlight-details ">
                            <i className="pi pi-question-circle" />
                            <span>Matérias pendentes</span>
                            <span className="count">6</span>
                        </div>
                    </div>
                </div>
                {/*<div className="p-col-12 p-md-6 p-lg-4">
                    <Panel header="Tasks" style={{height: '100%'}}>
                        <ul className='task-list'>
                            <li>
                                <Checkbox value="task1" onChange={this.onTaskChange} checked={this.state.tasks.indexOf('task1')>-1?true:false}></Checkbox>
                                <span className="task-name">Sales Reports</span>
                                <i className="pi pi-chart-bar" />
                            </li>
                            <li>
                                <Checkbox value="task2" onChange={this.onTaskChange} checked={this.state.tasks.indexOf('task2')>-1?true:false}></Checkbox>
                                <span className="task-name">Pay Invoices</span>
                                <i className="pi pi-dollar" />
                            </li>
                            <li>
                                <Checkbox value="task3" onChange={this.onTaskChange} checked={this.state.tasks.indexOf('task3')>-1?true:false}></Checkbox>
                                <span className="task-name">Dinner with Tony</span>
                                <i className="pi pi-user" />
                            </li>
                            <li>
                                <Checkbox value="task4" onChange={this.onTaskChange} checked={this.state.tasks.indexOf('task4')>-1?true:false}></Checkbox>
                                <span className="task-name">Client Meeting</span>
                                <i className="pi pi-users" />
                            </li>
                            <li>
                                <Checkbox value="task5" onChange={this.onTaskChange} checked={this.state.tasks.indexOf('task5')>-1?true:false}></Checkbox>
                                <span className="task-name">New Theme</span>
                                <i className="pi pi-briefcase" />
                            </li>
                            <li>
                                <Checkbox value="task6" onChange={this.onTaskChange} checked={this.state.tasks.indexOf('task6')>-1?true:false}></Checkbox>
                                <span className="task-name">Flight Ticket</span>
                                <i className="pi pi-briefcase" />
                            </li>
                        </ul>
                    </Panel>
        </div>*/}
                <div className="p-col-12 p-md-6 p-lg-6 p-fluid contact-form">
                    <Panel header="Mensagem">
                        <div className="p-grid">
                            <div className="p-col-12">
                                <Dropdown value={this.state.city} options={this.state.cities} placeholder="Selecione o contato" onChange={this.onCityChange} autoWidth={false} />
                            </div>
                            <div className="p-col-12">
                                <InputText type="text" placeholder="Titulo da mensagem." />
                            </div>
                            <div className="p-col-12">
                                <InputTextarea rows={4} cols={30} placeholder="Digite aqui." autoResize={true} />
                            </div>
                            <div className="p-col-12">
                                
                                <Button onClick={this.showSuccess} type="button" label="Enviar" icon="fa-send" />
                            </div>
                        </div>
                    </Panel>
                </div>

                <div className="p-col-12 p-lg-6 contacts">
                    <Panel header="Contatos">
                        <ul>
                            <li>
                                <button className="p-link">
                                    <img src="assets/layout/images/avatar_4.png" width="35" alt="avatar4" />
                                    <span className="name">Claudio Ramos</span>
                                    <span className="email">claudio@uniasselvi.com</span>
                                </button>
                            </li>
                            <li>
                                <button className="p-link">
                                    <img src="assets/layout/images/avatar_2.png" width="35" alt="avatar2" />
                                    <span className="name">Pedro Zanchett</span>
                                    <span className="email">pedro@uniasselvi.com</span>
                                </button>
                            </li>
                            <li>
                                <button className="p-link">
                                    <img src="assets/layout/images/avatar_3.png" width="35" alt="avatar3" />
                                    <span className="name">Irani Silva</span>
                                    <span className="email">irani@uniasselvi.com</span>
                                </button>
                            </li>
                            <li>
                                <button className="p-link">
                                    <img src="assets/layout/images/avatar_4.png" width="35" alt="avatar4" />
                                    <span className="name">Gabriel Testoni</span>
                                    <span className="email">gabriel@uniasselvi.com</span>
                                </button>
                            </li>
                        </ul>
                    </Panel>
                </div>
                {/* <div className="p-col-12 p-lg-6">
                    <div className="card">
                        <h1 style={{fontSize:'16px'}}>Recent Sales</h1>
                        <DataTable value={this.state.cars}  style={{marginBottom: '20px'}} responsive={true}
                                selectionMode="single" selection={this.state.selectedCar} onSelectionChange={(e) => this.setState({selectedCar: e.value})}>
                            <Column field="vin" header="Vin" sortable={true} />
                            <Column field="year" header="Year" sortable={true} />
                            <Column field="brand" header="Brand" sortable={true} />
                            <Column field="color" header="Color" sortable={true} />
                        </DataTable>
                    </div>
                </div>
                <div className="p-col-12 p-lg-6">
                    <div className="card">
                        <Chart type="line" data={this.state.lineData}/>
                    </div>
    </div> */}
                <div className="p-col-12 p-lg-8">
                    <Panel header="Calendar" style={{ height: '100%' }}>
                        <FullCalendar events={this.state.events} options={this.state.fullcalendarOptions}></FullCalendar>
                    </Panel>
                </div>

                <div className="p-col-12 p-lg-4">
                    <Panel header="Activity" style={{ height: '100%' }}>
                        <div className="activity-header">
                            <div className="p-grid">
                                <div className="p-col-6">
                                    <span style={{ fontWeight: 'bold' }}>Últimas atividades</span>
                                    <p>Atualizadas há 1 minuto atrás</p>
                                </div>
                                <div className="p-col-6" style={{ textAlign: 'right' }}>
                                    <Button icon="pi pi-refresh" />
                                </div>
                            </div>
                        </div>

                        <ul className="activity-list">
                            <li>
                                <div className="count">Chatbot</div>
                                <div className="p-grid">
                                    <div className="p-col-10"><b>Mensagem enviada</b> para o Professor: <b>Pedro Zanchett</b></div>
                                    <div className="p-col-2">95%</div>
                                </div>
                            </li>
                            <li>
                                <div className="count" style={{ backgroundColor: '#f9c851' }}>Atualização Cadastral</div>
                                <div className="p-grid">
                                    <div className="p-col-6"><b>Endereço atualizado:</b></div>
                                    <div className="p-col-6">Rua Ricardo Persuhn, 212</div>
                                </div>
                            </li>
                            <li>
                                <div className="count" style={{ backgroundColor: '#20d077' }}>Financeiro</div>
                                <div className="p-grid">
                                    <div className="p-col-6"><b>Boleto Gerado:</b></div>
                                    <div className="p-col-6">Valor: R$ 980,00</div>
                                </div>
                            </li>
                            <li>
                                <div className="count" style={{ backgroundColor: 'orange' }}>Ajuste de Disciplina</div>
                                <div className="p-grid">
                                    <div className="p-col-8"><b>Sistemas Distriuídos</b> - 8º semestre</div>
                                    <div className="p-col-4"><b>Situação:</b> Aplicada</div>
                                    <div className="p-col-8"><b>Programação para Web</b> - 5º semestre</div>
                                    <div className="p-col-4"><b>Situação:</b> Removida</div>
                                    <div className="p-col-8"><b>Contabilidade</b> - 1º semestre</div>
                                    <div className="p-col-4"><b>Situação:</b> Aplicada</div>
                                </div>
                            </li>
                            <li>
                                <div className="count" style={{ backgroundColor: '#007be5' }}>Segunda via de Boleto</div>
                                <div className="p-grid">
                                    <div className="p-col-4"><b>Código de Barras:</b></div>
                                    <div className="p-col-8">123456 123456 1234 1234 1 12345678910</div>
                                    <div className="p-col-4"><b>Valor:</b></div>
                                    <div className="p-col-8">R$ 980,00</div>
                                    <div className="p-col-4"><b>Data de Vencimento:</b></div>
                                    <div className="p-col-8">10/11/2019</div>
                                </div>
                            </li>
                        </ul>
                    </Panel>
                </div>
            </div>
        );
    }
}