import React from 'react';
import '../css/home.css'
import { Carousel, WingBlank } from 'antd-mobile';

import { connect } from 'react-redux';
import * as actions from '../redux/action';
// eslint-disable-next-line import/first
import { bindActionCreators } from 'redux';
import { store } from '../redux/store';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 176,
            list: []
        }
    }
    componentWillMount() {
        setTimeout(()=>{
            this.props.actions.allshop();
        },1000)
        store.subscribe(() => {
            this.setState({
                list: store.getState().objcetc.allshop
            });
            console.log(store.getState())

        });
    };
    componentWillUnmount() {
        this.setState({
            list: []
        });
    }
    search() {
        this.props.history.push('/search')
    }
    detail(id) {
        this.props.history.push(`/detail/?id=${id}`)
    }
    render() {
        return (
            <div>
                {/* 顶部 */}
                <div className='top'>
                    <div className='top_img' onClick={() => { this.search() }}>
                        <a className='placeholder'>
                            <span>寻找宝贝店铺</span>
                        </a>
                    </div>
                </div>
                {/* banner */}
                <WingBlank>
                    <Carousel
                        autoplay={false}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                    >
                        {this.state.data.map(val => (
                            <a
                                key={val}
                                href="#"
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img src={require(`../images/banner${val}.jpg`).default} alt={`broadcast${val}`}
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>
                {/* 内容区域 */}
                <div className='qy'>
                    <ul>
                        <li>
                            <p> <img src={require('../images/tm.png').default} alt='123' /> </p>
                            <p> 天猫新品 </p>
                        </li>
                        <li>
                            <p> <img src={require('../images/ju.png').default} alt='123' /> </p>
                            <p> 今日爆款 </p>
                        </li>
                        <li>
                            <p> <img src={require('../images/xq.png').default} alt='123' /> </p>
                            <p> 天猫国际 </p>
                        </li>
                        <li>
                            <p> <img src={require('../images/elm.png').default} alt='123' /> </p>
                            <p> 饿了么 </p>
                        </li>
                        <li>
                            <p> <img src={require('../images/tmcs.png').default} alt='123' /> </p>
                            <p> 天猫超市 </p>
                        </li>
                        <li>
                            <p> <img src={require('../images/czzx.png').default} alt='123' /> </p>
                            <p> 充值中心 </p>
                        </li>
                        <li>
                            <p> <img src={require('../images/jpjd.png').default} alt='123' /> </p>
                            <p> 机票酒店 </p>
                        </li>
                        <li>
                            <p> <img src={require('../images/jbzy.png').default} alt='123' /> </p>
                            <p> 金币庄园 </p>
                        </li>
                        <li>
                            <p> <img src={require('../images/alpm.png').default} alt='123' /> </p>
                            <p> 阿里拍卖 </p>
                        </li>
                        <li>
                            <p> <img src={require('../images/tbch.png').default} alt='123' /> </p>
                            <p> 淘宝吃货 </p>
                        </li>
                    </ul>
                </div>
                {/* 具体内容列表 */}
                <div className='jtnr'>
                    <p className='title_img'>
                        <img width='161px' src={require('../images/title.png').default} alt='title' />
                    </p>
                    <ul>
                        {
                            this.state.list.map((item, index) => {
                                return (
                                    <li onClick={() => { this.detail(item.id) }} key={index}>
                                        <p className='title_img'>
                                            <img width='100%' src={require(`../images/${item.img}`).default} alt='webp' />
                                        </p>
                                        <p className='recommend-title-p'>{item.title}</p>
                                        <p>
                                            <span class="recommend-sign">￥</span>
                                            <span class="recommend-price">{item.m}</span>
                                            <span class="recommend-payed">{item.g}人已购买</span>
                                        </p>
                                    </li>
                                )
                            })
                        }
                        
                    </ul>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({ obj: state });
const mapDispathToProps = (dispatch) => ({ actions: bindActionCreators(actions, dispatch) });

export default connect(mapStateToProps, mapDispathToProps)(Home);
