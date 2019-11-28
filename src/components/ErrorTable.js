import React from 'react';
import { Table } from 'react-bootstrap';

class ErrorTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {logs: []};
        this.createTable = this.createTable.bind(this);
    }

    createTable = (logs) => {
        const tr = [];
        const td = [];
        const table = [];
        if (logs.length !== undefined) {
            console.log(logs.length);
            for (let index = 0; index < logs.length; index++) {
                const log = logs[index];
                console.log(log);
                console.log("#");
                console.log(log.levelEnum);
                console.log(log.description);
                console.log(log.events);
                // td.push(<td>#</td>);
                // td.push(<td>{log.levelEnum}</td>);
                // td.push(<td>{log.description}</td>);
                // td.push(<td>{log.events}</td>);
                // tr.push(<tr>{td}</tr>);
                // table.push(tr);
            }
        }
        return table;
    }

    render() {
        const logs = this.props.logs;
        
        return(
            <div>
                <Table responsive hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Level</th>
                            <th>Log</th>
                            <th>Eventos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {logs.length !== undefined && logs.map(( log, index ) => {
                            return (
                                <tr key={index}>
                                    <td>{log.id}</td>
                                    <td>{log.levelEnum}</td>
                                    <td>{log.description}</td>
                                    <td>{log.events}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default ErrorTable;