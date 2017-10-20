import React from 'react';
import {Component} from 'react';
export default class Content extends Component {
    render(){
        return <div>
            {this.props.children}
        </div>
    }
}