import React from 'react';
import Cabecalho from './Cabecalho';
import { API_URL } from '../service/auth';
import axios from 'axios';
import ErrorFilterForm from './ErrorFilterFom';
import ErrorHeaderButtons from './ErrorHeaderButtons';

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
            { headers: { 'Authorization':`Bearer ${sessionStorage.getItem('jwt_token')}`}})
        .then(resp => {
            if (resp.status === 200 && resp.data !== null) {
                this.setState({ logs: resp.data });
            }
        })
        .catch(error => {
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
                <ErrorHeaderButtons saveLog={() => this.findAllLogs()}/>
                <ErrorTable logs={this.state.logs} />
            </div>
        )
    }
}

export default ErroLista;