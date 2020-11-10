
import React from 'react';
import { HashRouter as Router, Link, withRouter } from 'react-router-dom';
import routers from './index'
import '../css/index.css';
import '../css/iconfont.css'
class TabBarExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0 
        }
    }
    render() {
        return (
            <div className='router'>
                <Router>
                    {
                        routers.map((item, index) => {
                            return (
                                <div>
                                    <span className={`iconfont ${item.icon}`}></span>
                                    <Link className={this.state.index == index ? 'act' :''} to={item.link}>{item.title}</Link>
                                </div>
                            )
                        })
                    }
                </Router>
            </div>
        )
    }
}


export default TabBarExample;