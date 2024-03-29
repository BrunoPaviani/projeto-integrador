import React, {Component} from 'react';
import classNames from 'classnames';
import {AppTopbar} from './AppTopbar';
import {AppFooter} from './AppFooter';
import {AppMenu} from './AppMenu';
import {Dashboard} from './components/Dashboard';
import {FormsDemo} from './components/FormsDemo';
import {SampleDemo} from './components/SampleDemo';
import {DataDemo} from './components/DataDemo';
import {PanelsDemo} from './components/PanelsDemo';
import {OverlaysDemo} from './components/OverlaysDemo';
import {MenusDemo} from './components/MenusDemo';
import {MessagesDemo} from './components/MessagesDemo';
import {ChartsDemo} from './components/ChartsDemo';
import {MiscDemo} from './components/MiscDemo';
import {EmptyPage} from './components/EmptyPage';
import {Documentation} from "./components/Documentation";
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import './layout/layout.scss';
import './App.scss';
import { Cadastro } from './components/cadastro/Cadastro';
import { AjusteDisciplina } from './components/solicitacao/ajusteDisciplina/AjusteDisciplina';
import { SolicitaSegVia } from './components/solicitacao/boleto/SolicitaSegVia';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./service/Auth";
import Login from './Login';
import PrivateRoute from './PrivateRoute';

class App extends Component {

    constructor() {
        super();
        this.state = {
            layoutMode: 'static',
            layoutColorMode: 'dark',
            staticMenuInactive: false,
            overlayMenuActive: false,
            mobileMenuActive: false
        };

        this.onWrapperClick = this.onWrapperClick.bind(this);
        this.onToggleMenu = this.onToggleMenu.bind(this);
        this.onSidebarClick = this.onSidebarClick.bind(this);
        this.onMenuItemClick = this.onMenuItemClick.bind(this);
        this.createMenu();
    }

    onWrapperClick(event) {
        if (!this.menuClick) {
            this.setState({
                overlayMenuActive: false,
                mobileMenuActive: false
            });
        }

        this.menuClick = false;
    }

    onToggleMenu(event) {
        this.menuClick = true;

        if (this.isDesktop()) {
            if (this.state.layoutMode === 'overlay') {
                this.setState({
                    overlayMenuActive: !this.state.overlayMenuActive
                });
            }
            else if (this.state.layoutMode === 'static') {
                this.setState({
                    staticMenuInactive: !this.state.staticMenuInactive
                });
            }
        }
        else {
            const mobileMenuActive = this.state.mobileMenuActive;
            this.setState({
                mobileMenuActive: !mobileMenuActive
            });
        }
       
        event.preventDefault();
    }

    onSidebarClick(event) {
        this.menuClick = true;
    }

    onMenuItemClick(event) {
        if(!event.item.items) {
            this.setState({
                overlayMenuActive: false,
                mobileMenuActive: false
            })
        }
    }

    createMenu() {
        this.menu = [
            {label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/dashboard'},
           /* {
                label: 'Menu Modes', icon: 'pi pi-fw pi-cog',
                items: [
                    {label: 'Static Menu', icon: 'pi pi-fw pi-bars',  command: () => this.setState({layoutMode: 'static'}) },
                    {label: 'Overlay Menu', icon: 'pi pi-fw pi-bars',  command: () => this.setState({layoutMode: 'overlay'}) }
                ]
            },
            {
                label: 'Menu Colors', icon: 'pi pi-fw pi-align-left',
                items: [
                    {label: 'Dark', icon: 'pi pi-fw pi-bars',  command: () => this.setState({layoutColorMode: 'dark'}) },
                    {label: 'Light', icon: 'pi pi-fw pi-bars',  command: () => this.setState({layoutColorMode: 'light'}) }
                ]
            },*/
            {
                label: 'Components', icon: 'pi pi-fw pi-globe', badge: '9',
                items: [
					{label: 'Sample Page', icon: 'pi pi-fw pi-th-large', to: '/sample'},
					{label: 'Forms', icon: 'pi pi-fw pi-file', to: '/forms'},
					{label: 'Data', icon: 'pi pi-fw pi-table', to: '/data'},
					{label: 'Panels', icon: 'pi pi-fw pi-list', to: '/panels'},
					{label: 'Overlays', icon: 'pi pi-fw pi-clone', to: '/overlays'},
					{label: 'Menus', icon: 'pi pi-fw pi-plus', to: '/menus'},
					{label: 'Messages', icon: 'pi pi-fw pi-spinner',to: '/messages'},
					{label: 'Charts', icon: 'pi pi-fw pi-chart-bar', to: '/charts'},
					{label: 'Misc', icon: 'pi pi-fw pi-upload', to: '/misc'}
                ]
            },
            /*{
                label: 'Cadastro', icon: 'pi pi-fw pi-user-plus', to: '/cadastro'
            },
            {
                label: 'Template Pages', icon: 'pi pi-fw pi-file',
                items: [
                    {label: 'Empty Page', icon: 'pi pi-fw pi-circle-off', to: '/empty'}
                ]
            },*/
            {
                label: 'Solicitação', icon: 'pi pi-fw pi-clone',
                items: [
                    {
                        label: 'Ajuste de disciplina', icon: 'pi pi-fw pi-window-maximize', to: '/ajusteDisciplina'
                    },
                    {
                        label: 'Segunda via do boleto', icon: 'pi pi-fw pi-dollar', to: '/boleto'
                    }
                ]
            },
            /*{label: 'Documentação', icon: 'pi pi-fw pi-question', command: () => {window.location = "#/documentation"}},*/
            {label: 'Portal do aluno', icon: 'pi pi-fw pi-external-link', command: () => {window.open("https://login.uniasselvi.com.br/")}}
        ];
    }

    addClass(element, className) {
        if (element.classList)
            element.classList.add(className);
        else
            element.className += ' ' + className;
    }

    removeClass(element, className) {
        if (element.classList)
            element.classList.remove(className);
        else
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }

    isDesktop() {
        return window.innerWidth > 1024;
    }

    componentDidUpdate() {
        if (this.state.mobileMenuActive)
            this.addClass(document.body, 'body-overflow-hidden');
        else
            this.removeClass(document.body, 'body-overflow-hidden');
    }

    render() {
        const logo = './logo-uniasselvi.png';

        const wrapperClass = classNames('layout-wrapper', {
            'layout-overlay': this.state.layoutMode === 'overlay',
            'layout-static': this.state.layoutMode === 'static',
            'layout-static-sidebar-inactive': this.state.staticMenuInactive && this.state.layoutMode === 'static',
            'layout-overlay-sidebar-active': this.state.overlayMenuActive && this.state.layoutMode === 'overlay',
            'layout-mobile-sidebar-active': this.state.mobileMenuActive
        });

        const sidebarClassName = classNames("layout-sidebar", {
            'layout-sidebar-light': true
        });          

        return (
            <div>
            <Route path='/' exact component={() => <Login />} />
             <div id="div-principal" className={wrapperClass} onClick={this.onWrapperClick}>
                 <AppTopbar onToggleMenu={this.onToggleMenu} />

                 <div ref={(el) => this.sidebar = el} className={sidebarClassName} onClick={this.onSidebarClick}>
                     <div className="layout-logo">
                         <img alt="Logo" className="img-logo" src={logo} />
                     </div>
                     <AppMenu model={this.menu} onMenuItemClick={this.onMenuItemClick} />
                 </div>

                 <div className="layout-main">
                     <PrivateRoute path="/dashboard" component={Dashboard} />
                     <PrivateRoute path="/forms" component={FormsDemo} />
                     <PrivateRoute path="/sample" component={SampleDemo} />
                     <PrivateRoute path="/data" component={DataDemo} />
                     <PrivateRoute path="/panels" component={PanelsDemo} />
                     <PrivateRoute path="/overlays" component={OverlaysDemo} />
                     <PrivateRoute path="/menus" component={MenusDemo} />
                     <PrivateRoute path="/messages" component={MessagesDemo} />
                     <PrivateRoute path="/charts" component={ChartsDemo} />
                     <PrivateRoute path="/misc" component={MiscDemo} />
                     <PrivateRoute path="/empty" component={EmptyPage} />
                     <PrivateRoute path="/documentation" component={Documentation} />
                     <PrivateRoute path="/cadastro" component={Cadastro} />
                     <PrivateRoute path="/ajusteDisciplina" component={AjusteDisciplina} />
                     <PrivateRoute path="/boleto" component={SolicitaSegVia} />
                     <PrivateRoute path="/login" component={Login} />
                 </div>

                 <AppFooter />

                 <div className="layout-mask"></div>
             </div>
         </div>
        );
    }
}

export default App;
