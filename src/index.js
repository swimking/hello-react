import React from "react";
import  ReactDOM  from "react-dom";
import App from "./App";
import Fragment from "./Frag";

ReactDOM.render(<App/>, document.getElementById('main'));
ReactDOM.render(<Fragment name={'james'}/>, document.getElementById('list-compiler'));