import React from 'react';
import { Icon, Grid } from 'antd-mobile';
import '../css/search.css'
import '../css/sear/iconfont.css'
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    back(){
        this.props.history.push('/')

    }
    render() {
        return (
            <div>
                <div className='search'>
                    <div className='search_i'>
                        <span>宝贝</span>
                        <input type="text" />
                        <span class="iconfont icon-sousuo"></span>
                    </div>
                    <div className='qx' onClick={()=>{this.back()}}>
                        取消
                    </div>
                </div>
            </div>
        )
    }
}

export default Search


