import React, { Component } from "react";
import styles from "./DropdownMenu.scss";
import Dropdown from "rc-dropdown";
import 'rc-dropdown/assets/index.css';
import Server from '../../utils/server';
import {
    getCookie
} from '../../utils/func';
import { Avatar } from '../index';
import { Base64 } from 'js-base64';

class DropdownMenu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let userinfo = Base64.decode(getCookie("realname"));
        const menu = (
            <div className={styles.container}>
                <div className={styles.avatar}></div>
                <div className={styles.name}>
                    {
                        userinfo
                    }
                </div>
                <ul
                    className={styles.ul}
                    style={{
                        width: "100%",
                        listStyle: "none"
                    }}
                >
                    <li
                        className={styles.li}
                        onClick={() => {
                            window.location.host.indexOf("alpha-") > -1 ?
                                window.location.href = "//alpha-owl.aidigger.com/profile"
                                :
                                window.location.href = "//owl.aidigger.com/profile"
                        }}
                    >设置</li>
                </ul>
                <div
                    className={styles.footer}
                    style={{
                        width: "100%"
                    }}
                    onClick={() => {
                        new Server().logout().then(res => {
                            window.location.href = "/";
                        }).catch(err => {
                            console.error("登出失败");
                        })
                    }}
                >退出</div>
            </div >
        );

        return (
            <Dropdown
                trigger={["click"]}
                animation="slide-up"
                placement="bottomRight"
                overlay={menu}
            >
                <Avatar />
            </Dropdown>
        );
    }
}

export default DropdownMenu;