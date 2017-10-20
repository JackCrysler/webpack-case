import React from 'react';
import {Component} from 'react';


class Nav extends Component {
    render(){
        return <ul>
            <li><a href="#home">首页</a></li>
            <li><a href="#list">列表页</a></li>
            <li><a href="#detail">详情页</a></li>
            
        </ul>
    }
}

export default Nav;