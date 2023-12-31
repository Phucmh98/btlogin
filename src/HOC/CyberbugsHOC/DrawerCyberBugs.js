import React, { useState } from 'react'
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { CLOSE_DRAWER } from '../../redux/constants/LoginForm/DrawerConst';



export default function DrawerCyberBugs(props) {



    const { visible, ComponentContentDrawer,callBackSubmit,title } = useSelector(state => state.drawerReducer);

    const dispatch = useDispatch();

    console.log('visible', visible)


    
    const onClose = () => {
        dispatch({ type: CLOSE_DRAWER });

    };
    return (
        <>
            {/* <button onClick={showDrawer}>showdrawer</button> */}
            <Drawer
                title={title}
                width={720}
                onClose={onClose}
                visible={visible}
                bodyStyle={{ paddingBottom: 80 }}

               
            >
                {/* Nội dung thay đổi của drawer */}
                {ComponentContentDrawer}
     
            </Drawer>
        </>
    )
}
