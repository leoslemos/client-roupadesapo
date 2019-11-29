import React from 'react';
import { Table, Badge, Form } from 'react-bootstrap';

class ErrorTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {logs: []};
    }

    render() {
        const logs = this.props.logs;
        
        return(
            <div>
                <Table bordered hover>
                    <thead style={{backgroundColor: '#e1e1e1'}}>
                        <tr className="text-center">
                            <th><Form.Check custom type="checkbox" id="custom-checkbox" label="" /></th>
                            <th>Level</th>
                            <th>Log</th>
                            <th>Eventos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {logs.length !== undefined && logs.map(( log, index ) => {
                            return (
                                <tr key={index} className="text-center">
                                    <td><Form.Check custom type="checkbox" id="custom-checkbox" label="" /></td>
                                    <td><h2><Badge variant="secondary">{log.levelEnum}</Badge></h2></td>
                                    <td>
                                        {log.title}<br />
                                        {log.description}<br />
                                        {log.origin}
                                    </td>
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