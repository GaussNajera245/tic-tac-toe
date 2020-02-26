import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { add, divide, multiply, substract } from './math.js'


// import App from './components/app'

function App(){
    return (
        <ul>
            <li>{add(1,2)}</li>
            <li>{multiply(2,3)}</li>
            <li>{substract(7,2)}</li>
            <li>{divide(5,2)}</li>
        </ul>
    )
}




ReactDOM.render( <App />, document.getElementById("root"));

