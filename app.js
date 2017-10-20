import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import './css/test'
import App from './pages/app'

render(<App />,document.querySelector('#root'))

if (module.hot) {
    module.hot.accept()
}

