import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { items, onDelete } = this.props;
        return <ul>
            {
                items.map((item, index) => {
                    return <li 
                    style={{
                        listStyle: "none",
                        margin: 20,
                        marginLeft: 0
                    }}
                    key={index}>
                        <span
                            style={{
                                marginRight: 20,
                                textDecoration: item.status === "deleted" ? "line-through" : "none"
                            }}
                        >{item.text}</span>
                        <button
                            onClick={() => onDelete(index)}
                        >delete</button>
                    </li>
                })
            }
        </ul>
    }
}

export default List;