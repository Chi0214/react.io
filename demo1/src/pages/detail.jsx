import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import '../css/detail.css'
import '../css/detail/iconfont.css'

import * as actions from '../redux/action';
// eslint-disable-next-line import/first
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { store } from '../redux/store';
// import * as {actions}
class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                id: '',
                title: '',
                g: '',
                m: '',
                img: ''
            },
            id: '',
            islogin: undefined,
            sc: false,
            addshop: [],
            // d:{}
        }
    }
    componentDidMount() {
        var id = this.props.history.location.search.split('=')[1];
        this.setState({
            id
        });
        document.querySelector('.router').style.display = 'none';
        setTimeout(() => {
            this.props.actions.selshop(id);
            this.props.actions.islogin();
        }, 1000)
        store.subscribe(() => {
            this.setState({
                data: store.getState().objcetc.seldata1,
                islogin: store.getState().objcetc.code != undefined ? store.getState().objcetc.code : undefined,
                addshop: store.getState().objcetc.addshop != undefined ? store.getState().objcetc.addshop : []
            });

            var findIt = false;
            try {

                (this.state.addshop).forEach((item, index) => {
                    if (this.state.id == item.id) {
                       
                        findIt = true;
                        throw new Error("EndIterative");
                    } else {
                        
                        findIt = false
                        throw new Error("EndIterative");
                    };
                });

            } catch {
                if (findIt) {
                    this.setState({
                        sc: true
                    })
                } else {
                    this.setState({
                        sc: false
                    })
                }
            }



            console.log(store.getState())
        });
    }
    componentWillUnmount() {
        document.querySelector('.router').style.display = 'flex';
    }
    back() {
        this.props.history.push('/')
    }
    Collection() {
        if (this.state.islogin == 200) {
            this.props.actions.addshop(this.state.id);
            this.setState({
                sc: true
            })
        } else {
            alert('请登录后重试');
            this.props.history.push('/login')

        }
    }
    Xcollection() {

        if (this.state.islogin == 200) {
            this.props.actions.qxshoucang(this.state.id);
            this.setState({
                sc: false
            })
        } else {
            alert('请登录后重试');
            this.props.history.push('/login')

        }
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
                >详情页</NavBar>



                <div className='container'>
                    <p>id:{this.state.data.id}</p>
                    <p>标题:{this.state.data.title}</p>
                    <p>价格:{this.state.data.g}</p>
                    <p>购买人数:{this.state.data.m}</p>
                    <p>{this.state.data.img}</p>
                </div>


                <div className='detail'>
                    <ul>
                        <li>
                            <p>
                                <span className="iconfont icon-dianpu-"></span>
                            </p>
                            <p>店铺</p>
                        </li>
                        <li>
                            <p>
                                <span className="iconfont icon-kefu"></span>
                            </p>
                            <p>客服</p>
                        </li>
                        {
                            this.state.sc ?
                                <li onClick={() => { this.Xcollection() }}>
                                    <p>
                                        <img src={require('../images/yishoucang.png').default} alt='123' width='20' />
                                    </p>
                                    <p>取消收藏</p>
                                </li>
                                :
                                <li onClick={() => { this.Collection() }} >
                                    <p>
                                        <span className="iconfont icon-shoucang"></span>
                                    </p>
                                    <p>收藏</p>
                                </li>
                        }

                    </ul>
                    <div className='shop'>
                        <ul>
                            <li>加入购物车</li>
                            <li>立即购买</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({ obj: state });
const mapDispathToProps = (dispatch) => ({ actions: bindActionCreators(actions, dispatch) });

export default connect(mapStateToProps, mapDispathToProps)(Detail);


