import React from 'react';
import { Icon, Grid } from 'antd-mobile';
import '../css/search.css'
import '../css/sear/iconfont.css'

import * as actions from '../redux/action';
// eslint-disable-next-line import/first
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { store } from '../redux/store';
class Collection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        console.log(this.props.actions)
        setTimeout(() => {
            this.props.actions.shoucang();
        }, 1000)
        store.subscribe(() => {
            this.setState({
                data: store.getState().objcetc.addshop != undefined ? store.getState().objcetc.addshop :[]
            });
            console.log(store.getState())
        });
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.data.map((item, index) => {
                            return (
                                <li key={index}>
                                    {index}--{item.id}---{item.title}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({ obj: state });
const mapDispathToProps = (dispatch) => ({ actions: bindActionCreators(actions, dispatch) });

export default connect(mapStateToProps, mapDispathToProps)(Collection);



