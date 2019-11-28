import React from 'react';

class Logout extends React.Component {
    componentDidMount() {
        sessionStorage.removeItem('jwt_token');
        this.props.history.push('/');
    }

    render() {
        return null;
    }
}

export default Logout;