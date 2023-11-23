import React from 'react'
import { useSelector } from 'react-redux'
import { Modal } from 'antd';

export default function FailLogin() {
    const { title, content } = useSelector(state => state.drawerReducer);
    const error = () => {
        Modal.error({
            title: 'This is an error message',
            content: content,
        });
    };
    
    return null
}
