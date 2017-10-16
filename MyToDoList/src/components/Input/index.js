import React, { Component } from "react";

export class Input extends Component {
    constructor(props) {
        super(props);
        this.getInputText = this.getInputText.bind(this);
        this.getValue = this.getValue.bind(this);

        this.state = {
            inputText: ""
        }
    }
    
    getInputText(evt) {
        this.setState(
            {inputText: evt.target.value}
        )
    }
    getValue() {
        let val = this.state.inputText;
        let { addItem } = this.props;
        addItem(val);
        this.setState(
            {inputText: ""}
        )
    }

    render() {

        return (
            <div>
                <input
                placeholder="add your task"
                style={{
                    width: 300,
                    height: 30,
                    border: "1px solid #ddd",
                    padding: "4px 8px",
                    boxShadow:　"0 1px 8px #ddd",
                    boxSizing: "border-box",
                    borderRadius: 4,
                    outline: "none"
                }}
                onChange={this.getInputText} value={this.state.inputText}/>
                <button 
                style={{
                    width: 50,
                    height: 30,
                    border: "1px solid #ddd",
                    borderRadius: 4,
                    boxShadow:　"0 1px 8px #ddd",
                    marginLeft: 20,
                    color:　"#fff",
                    backgroundColor: "lightseagreen",
                    outline: "none"
                }}
                onClick={this.getValue}>add</button>
            </div>
        );
    }
}

