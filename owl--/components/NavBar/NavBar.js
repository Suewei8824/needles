import React, { Component } from 'react';
import { Icon, Avatar, DropdownMenu } from '../index';
import styles from './NavBar.scss';
import avatar from './Avatar.png';
import Server from '../../utils/server';

class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { userinfo, style, color, bimg } = this.props;
        return (
            <nav className={styles.nav} style={style}>
                <div>
                    <div
                    style={{
                        height: 30,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                    >
                        <a
                            href="/"
                            style={{
                                width: 80,
                                display: "inline-block",
                                textDecoration: "none"
                            }}
                        >
                        <Icon
                            type="ei-labs"
                            color={color}
                            style={{
                                height: 28,
                                lineHeight: "28px"
                            }}
                        /> 
                        </a>
                        {
                            !!bimg && (
                                <span className={styles.line}></span>
                            )
                        }
                        <img className={styles.icon} src={bimg} />
                    </div>
                    <DropdownMenu />
                </div>
            </nav>
        );
    }
}
export default NavBar;