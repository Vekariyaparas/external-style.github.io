import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from './reportWebVitals'
import '../src/style.css';
import Registration from "./componant/Registration";

const test=ReactDOM.createRoot(document.getElementById('external'));

test.render(

    <Registration/>
);

    reportWebVitals();


