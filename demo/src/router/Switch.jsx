import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

//pc端
import Home from '../pages/home';
import Search from '../pages/search';
import Detail from '../pages/detail';

// import Login from '../pages/login';

class Switchrout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageIn: true,
            mobi: false,
            loading: false
        };
    }

    render() {
        return (
            <>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/search' component={Search} />
                        <Route exact path='/detail' component={Detail} />
                    </Switch>
                </Router>
            </>
        )
    }
};

export default Switchrout;
