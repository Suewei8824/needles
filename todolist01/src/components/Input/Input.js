import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { addItem } = this.props;
        return <input
            onKeyDown={(e) => { if (e.key === "Enter") { addItem(e.target.value) } }}
        />
    }
}

export default Input;