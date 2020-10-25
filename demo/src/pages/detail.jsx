import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import '../css/detail.css'
import '../css/detail/iconfont.css'
class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount(){
        document.querySelector('.router').style.display = 'none';
    }
    componentWillUnmount(){
        document.querySelector('.router').style.display = 'flex';
    }
    back(){
        console.log(this.props);
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => {this.back()}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >详情页</NavBar>

                <div className='detail'>
                    <ul>
                        <li>
                            <p>
                                <span class="iconfont icon-dianpu-"></span>
                            </p>
                            <p>店铺</p>
                        </li>
                        <li>
                            <p>
                                <span class="iconfont icon-kefu"></span>
                            </p>
                            <p>客服</p>
                        </li>
                        <li>
                            <p>
                                <span class="iconfont icon-shoucang"></span>
                            </p>
                            <p>收藏</p>
                        </li>
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

export default Detail


