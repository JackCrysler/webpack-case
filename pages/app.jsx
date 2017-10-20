import React from 'react';
import {Component} from 'react';

import Nav from '../components/nav'
import Content from '../components/content'

import Home from './home'
import List from './list'
import Detail from './detail'


export default class App extends Component {
    constructor(){
        super()
        this.state = {
            route: <Home/>
        }
    }
    componentDidMount(){
        window.onhashchange = ()=>{
            switch (window.location.hash){
                case '#home':
                this.setState({
                    route: <Home/>
                })
                break;
                case '#list':
                this.setState({
                    route: <List/>
                })
                break;
                case '#detail':
                this.setState({
                    route: <Detail/>
                });
                break;
            }
        }
    }
    render(){
        return <div>
            <Content>
                {this.state.route}
            </Content>
            <Nav />
        </div>
    }
}