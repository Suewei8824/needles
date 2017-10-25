/*
 * @Author: kaijun.he 
 * @Date: 2017-10-12 09:07:42 
 * @Last Modified by: kaijun.he
 * @Last Modified time: 2017-10-16 20:05:10
 */

/**
 * 头像组件（接受一个 username 字段，返回一个头像）
 */
import React from 'react';
import styles from './Avatar.scss';

const Avatar = ({ userinfo, ...rest }) => {
    let realname = userinfo.realname.toUpperCase();
    let left, right;
    if (!realname || realname.length === 0) {
        left = "未";
        right = "知";
    } else if (realname.length > 1) {
        left = realname.slice(-2)[0];
        right = realname.slice(-2)[1];
    } else if (realname.length === 1) {
        left = right = realname[0];
    }
    return <div
        className={styles.avatar}
        {...rest}
    >
        {/* <div>{left}</div>
        <div>{right}</div> */}
    </div>
}

Avatar.defaultProps = {
    userinfo: {
        realname: "未知"
    }
}

export default Avatar;