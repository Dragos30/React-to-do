import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList";
import About from "./About";

var destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <About/>
        <TodoList />
    </div>,
    destination
);