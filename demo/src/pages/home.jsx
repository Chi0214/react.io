import React from 'react';
import '../css/home.css'
import { Carousel, WingBlank } from 'antd-mobile';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 176,
            list: [
                {
                    title: '韩国拉面锅网红金色煮面泡面锅泡面小食堂韩剧同款进口加厚黄铝锅',
                    img: 'list1.webp',
                    m: '100',
                    g: '20'
                },
                {
                    title: '欧式复古花纹浮雕zakka杯子好看的彩色家用水晶玻璃杯早餐牛奶杯',
                    img: 'list2.webp',
                    m: '100',
                    g: '20'
                },
                {
                    title: '韩国拉面锅网红金色煮面泡面锅泡面小食堂韩剧同款进口加厚黄铝锅',
                    img: 'list1.webp',
                    m: '100',
                    g: '20'
                },
                {
                    title: '欧式复古花纹浮雕zakka杯子好看的彩色家用水晶玻璃杯早餐牛奶杯',
                    img: 'list2.webp',
                    m: '100',
                    g: '20'
                },
                {
                    title: '韩国拉面锅网红金色煮面泡面锅泡面小食堂韩剧同款进口加厚黄铝锅',
                    img: 'list1.webp',
                    m: '100',
                    g: '20'
                },
                {
                    title: '欧式复古花纹浮雕zakka杯子好看的彩色家用水晶玻璃杯早餐牛奶杯',
                    img: 'list2.webp',
                    m: '100',
                    g: '20'
                }
            ]
        }
    }
    search() {
        this.props.history.push('/search')
    }
    detail() {
        this.props.history.push('/detail')
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
                                    <li onClick={() => { this.detail() }}>
                                        <p className='title_img'>
                                            <img width='100%' src={require(`../images/${item.img}`).default} alt='webp' />
                                        </p>
                                        <p className='recommend-title-p'>{item.title}</p>
                                        <span class="recommend-sign">￥</span>
                                        <span class="recommend-price">{item.m}</span>
                                        <span class="recommend-payed">{item.g}人已购买</span>
                                    </li>
                                )
                            })
                        }
                        {/* <li onClick={}>
                            <p className='title_img'>
                                <img width='100%' src={require("../images/list1.webp").default} alt='webp' />
                            </p>
                            <p className='recommend-title-p'>韩国拉面锅网红金色煮面泡面锅泡面小食堂韩剧同款进口加厚黄铝锅</p>
                            <span class="recommend-sign">￥</span>
                            <span class="recommend-price">18.9</span>
                            <span class="recommend-payed">1156人已购买</span>
                        </li>
                        <li>
                            <p className='title_img'>
                                <img width='100%' src={require('../images/list2.webp').default} alt='webp' />
                            </p>
                            <p className='recommend-title-p'>陶瓷筷子筒筷子盒筷子篓沥水筷子笼架 厨房筷筒子筷架家用收纳桶</p>
                            <span class="recommend-sign">￥</span>
                            <span class="recommend-price">18.9</span>
                            <span class="recommend-payed">1156人已购买</span>
                        </li>
                        <li>
                            <p className='title_img'>
                                <img width='100%' src={require('../images/list1.webp').default} alt='webp' />
                            </p>
                            <p className='recommend-title-p'>韩国拉面锅网红金色煮面泡面锅泡面小食堂韩剧同款进口加厚黄铝锅</p>
                            <span class="recommend-sign">￥</span>
                            <span class="recommend-price">18.9</span>
                            <span class="recommend-payed">1156人已购买</span>
                        </li>
                        <li>
                            <p className='title_img'>
                                <img width='100%' src={require('../images/list1.webp').default} alt='webp' />
                            </p>
                            <p className='recommend-title-p'>韩国拉面锅网红金色煮面泡面锅泡面小食堂韩剧同款进口加厚黄铝锅</p>
                            <span class="recommend-sign">￥</span>
                            <span class="recommend-price">18.9</span>
                            <span class="recommend-payed">1156人已购买</span>
                        </li> */}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Home;
