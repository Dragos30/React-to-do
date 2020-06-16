import React, { Component } from "react";
import Item1 from "./Items";
import "./TodoList.css";

class About extends Component{
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this);
    }
    addItem(Item1) {
        var item1 = this.state.items;
        if (this._inputElement.value !== "") {
            item1.unshift({
                text: this._inputElement.value,
                key: Date.now()
            });
            this.setState({
                items: Item1
            });

            this._inputElement.value = "Item1";
        }
        console.log(item1);
        Item1.preventDefault();
    }
    render() {
        return (
            <div onLoad={this.addItem}>
                <Item1>
                   <img></img>
                </Item1>
            </div>
        )
    }
}
export default About;