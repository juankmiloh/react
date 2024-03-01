import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HelloWorldApp } from './HelloWorldApp';
// import { FirstApp } from './FirstApp';
import { CounterApp } from "./CounterApp";
import "./styles.css";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <FirstApp title="Hola soy Goku!" subTitle={123} /> */}
        {/* <FirstApp subTitle={123} /> */}
        <CounterApp value={ 20 } />
    </React.StrictMode>
);