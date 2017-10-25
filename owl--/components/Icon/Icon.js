import React, { Component } from 'react';
import styles from './Icon.scss';
import classNames from 'classnames';

class Icon extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { type, color, style, className, ...rest } = this.props;
        return <i
            {...rest}    
            className={classNames(styles.icon, type, { [className]: !!className })}
            style={{
                color: color,
                ...style
            }}
        ></i>
    }
}

export default Icon;