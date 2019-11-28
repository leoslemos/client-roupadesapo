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
            log: {}
        }
    }

    componentDidMount() {
        axios.get(`${API_URL}/v1/log`,
            { headers: { 'Authorization':`Bearer ${getToken}`}})
        .then(resp => {
            if (resp.status === 200 && resp.data !== null) {
                this.setState({ log: resp.data });
            }
        })
        .catch(error => {
            console.log(error);
        });
    }

    render() {
        return(
            <div>
                <Cabecalho />
                <ErrorFilterForm />
                <ErrorHeaderButtons />
                <ErrorTable logs={this.state.log} />
            </div>
        )
    }
}

export default ErroLista;