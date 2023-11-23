import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { Button, Layout } from 'antd';
import './HomeTemplate.css'
const {  Sider, Content } = Layout;







export const UserLoginTemplate = (props) => {

    const [{ width, height }, setSize] = useState({ width: Math.round(window.innerWidth), height: Math.round(window.innerHeight) });

    useEffect(() => {
        window.onresize = () => {
            setSize({
                width: Math.round(window.innerWidth),
                height: Math.round(window.innerHeight)
            })
        }
    }, [])


    let { Component, ...restRoute } = props;

    return <Route {...restRoute} render={(propsRoute) => {
        return <>
            <Layout>                
                    <Sider width={width * 3 / 5} style={{ height: height }} className="bg_img_login">
                    </Sider>
                
                <Content style={{ backgroundColor :'#0f253d'}}>
                    <Component {...propsRoute} />
                </Content>
            </Layout>

        </>
    }} />

}