import React from 'react';

class Doc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        let token = window.sessionStorage.getItem('token');
        if (token == null) {
            this.props.history.push('/login');
        }
    }
    render() {
        return (
            <div>
                hello word
                Doc
            </div>
        )
    }
}
export default Doc;
