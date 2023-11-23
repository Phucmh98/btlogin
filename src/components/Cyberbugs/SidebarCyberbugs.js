import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
import {

    CrownOutlined,
    UsergroupAddOutlined,
    BarsOutlined,
    SearchOutlined,
    LayoutOutlined
} from '@ant-design/icons';

import { useDispatch, useSelector } from 'react-redux'

import '../../index.css'

const { Header, Sider, Content } = Layout;
export default function SidebarCyberbugs() {

    const dispatch = useDispatch();

    const [state, setState] = useState({
        collapsed: false,
    })
    const toggle = () => {
        setState({
            collapsed: !state.collapsed,
        });
    };
    return (
        <div style={{ height: window.innerHeight }}>

            <Sider trigger={null} collapsible collapsed={state.collapsed} style={{ height: window.innerHeight }}>
                <div className="text-right pr-2" >
                    <BarsOutlined style={{ cursor: 'pointer', color: '#fff', fontSize: 25 }}  onClick={toggle}/>
                </div>

                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>

                    <Menu.Item key="1" icon={<LayoutOutlined style={{ fontSize: 20 }} />} >
                        <span className="mb-2" >CYBER BOARD</span>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<SearchOutlined style={{ fontSize: 20 }} />}>
                        PROJECT MANAGEMENT
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UsergroupAddOutlined style={{ fontSize: 20 }} />}>
                        CREATE USER
                    </Menu.Item>
                    <Menu.Item key="4" icon={<CrownOutlined style={{ fontSize: 20 }} />}>
                        USER MANAGER
                    </Menu.Item>

                </Menu>
            </Sider>
        </div>


    )
}
