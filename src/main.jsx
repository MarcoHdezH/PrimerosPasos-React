import React from "react";
import ReactDOM from "react-dom/client"; // llamada al React DOM para renderizar componentes
import { CounterApp } from "./CounterApp";
import { FirstApp } from "./FirstApp";
// import {HelloWorldApp} from './HelloWorldApp'
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        {/* <HelloWorldApp/> */}
        {/* <FirstApp/> */}
        <CounterApp value={255}/>
    </React.StrictMode>
);