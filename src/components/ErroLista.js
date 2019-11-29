import React from 'react';
import Cabecalho from './Cabecalho';
import { getToken, API_URL } from '../service/auth';
import axios from 'axios';
import ErrorFilterForm from './ErrorFilterFom';
import ErrorHeaderButtons from './ErrorHeaderButtons';

import '../css/erroLista.css';
import ErrorTable from './ErrorTable';

class ErroLista extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logs: {}
        }
        this.findAllLogs = this.findAllLogs.bind(this);
        this.filterLogsBy = this.filterLogsBy.bind(this);
    }

    componentDidMount() {
        this.findAllLogs();
    }

    findAllLogs(param='') {
        document.getElementById('app_body').classList.remove('bg-login');
        
        axios.get(`${API_URL}/v1/log${param}`,
            { headers: { 'Authorization':`Bearer ${getToken}`}})
        .then(resp => {
            if (resp.status === 200 && resp.data !== null) {
                this.setState({ logs: resp.data });
            }
        })
        .catch(error => {
            console.log(error);
        });
    }

    filterLogsBy(value) {
        this.findAllLogs(value);
    }

    render() {
        return(
            <div>
                <Cabecalho />
                <ErrorFilterForm onChange={(value) => this.filterLogsBy(value)}/>
                <ErrorHeaderButtons />
                <ErrorTable logs={this.state.logs} />
            </div>
        )
    }
}

export default ErroLista;