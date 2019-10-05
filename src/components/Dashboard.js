import React, { Component } from 'react';
import { CarService } from '../service/CarService';
import { Panel } from 'primereact/panel';
import { FullCalendar } from 'primereact/fullcalendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';

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
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay',
                },
                editable: true,
                locale: 'br-BR'
            },
            events: [
                {
                    "id": 1,
                    "title": "Prova SOA",
                    "start": "2019-10-10"
                },
                {
                    "id": 2,
                    "title": "Iniciar Projeto POO1",
                    "start": "2019-10-01",
                    "end": "2019-10-03"
                },
                {
                    "id": 2,
                    "title": "Entrega Trabalho BD1",
                    "start": "2019-10-07",
                    "end": "2017-10-10"
                },
                {
                    "id": 2,
                    "title": "Atualizar cadastro",
                    "start": "2019-10-14",
                },
                {
                    "id": 2,
                    "title": "Avaliação Institucional",
                    "start": "2019-10-23",
                },
                {
                    "id": 9,
                    "title": "Revisar TCC",
                    "start": "2019-10-12T14:30:00"
                },
                {
                    "id": 12,
                    "title": "Reunião Projeto",
                    "start": "2019-10-29"
                },
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
                        <span className="detail">Sistemas de informação</span>
                        <span className="count visitors">INF043</span>
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
                        <span className="detail">Data de vencimento - 25/11/2019</span>
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
    </div>*/}
                <div className="p-col-12 p-lg-12">
                    <Panel header="Calendario" style={{ height: '100%' }}>
                        <FullCalendar events={this.state.events} options={this.state.fullcalendarOptions}></FullCalendar>
                    </Panel>
                </div>
            </div>
        );
    }
}