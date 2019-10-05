import React, { Component } from 'react';

export class AppFooter extends Component {

    render() {
        return  (
            <div className="layout-footer">
                <span className="footer-text" style={{'marginRight': '5px'}}>Projeto Integrador</span>
                <img src="./logo-uniasselvi.png" alt="" width="40px"/>
                <span className="footer-text" style={{'marginLeft': '5px'}}></span>
            </div>
        );
    }
}