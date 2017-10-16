import React, { Component } from 'react';
import './State.css';

class State extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { onFilter } = this.props;
        return (
            <div>
                <button onClick={() => onFilter("all")}>全部</button>
                <button onClick={() => onFilter("deleted")}>已删除</button>
                <button onClick={() => onFilter("active")}>进行中</button>
            </div>
        );
    }
}

export default State;