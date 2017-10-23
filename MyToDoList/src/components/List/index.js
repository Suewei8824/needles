import React, { Component } from "react";

export class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { items, tasks, deleteCurrentTask } = this.props;
        return (
        <ul style={{ paddingTop: 50}}>
        {
            tasks.map((task, index) => {
                return (
                    <div>
                        <li
                        style={{
                            listStyleType: "none",
                            display: "inline-block",
                            textDecoration: task.item.status === "deleted" ? "line-through" : "none" 
                        }}
                        key={index}>{task.item.text}
                        </li>
                        <button 
                        style={{
                            width: 50,
                            height: 30,
                            border: "1px solid #ddd",
                            boxShadow:　"0 1px 8px #ddd",
                            marginLeft: 10,
                            color:　"#fff",
                            backgroundColor: "lightseagreen",
                            outline: "none"
                        }}
                        onClick={() => deleteCurrentTask(index)}>delete</button>
                    </div>
                );
            })
        }
        </ul>
        )        
    }
}