import { BrowserRouter, Switch } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <App />
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);