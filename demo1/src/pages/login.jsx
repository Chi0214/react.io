import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import * as actions from '../redux/action';
// eslint-disable-next-line import/first
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { store } from '../redux/store';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }
    componentDidMount() {
        console.log(this.props.actions)
        document.querySelector('.router').style.display = 'none';
        setTimeout(() => {
            this.props.actions.login(1);
        }, 1000)
        store.subscribe(() => {
            this.setState({
                data: store.getState().objcetc.userinfo != undefined ? store.getState().objcetc.userinfo : {}
            });
            console.log(store.getState().userinfo)
        });
    }
    componentWillUnmount(){
        document.querySelector('.router').style.display = 'flex';
    }
    login1() {
        // this.props.history.push('/')
        console.log('login');
        this.props.actions.login(2)
    }
    back() {
        console.log(this.props);
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                 <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => { this.back() }}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >登录</NavBar>
                {
                   this.state.data.name!=undefined ? 
                    <>
                        <li>用户名{this.state.data.name}</li>
                        <li>年龄{this.state.data.age}</li>
                        <li>性别{this.state.data.sex}</li>
                        <button>已登录</button>
                    </>
                   :
                    <>
                        <button onClick={() => { this.login1() }}>登录</button>                    
                    </>
               }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ obj: state });
const mapDispathToProps = (dispatch) => ({ actions: bindActionCreators(actions, dispatch) });

export default connect(mapStateToProps, mapDispathToProps)(Login);




