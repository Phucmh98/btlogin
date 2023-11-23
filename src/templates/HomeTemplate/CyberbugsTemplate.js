import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import SidebarCyberbugs from '../../components/Cyberbugs/SidebarCyberbugs';


import '../../index.css';




export const CyberbugsTemplate = (props) => {

    const { Component, ...restParam } = props;
    return <Route {...restParam} render={(propsRoute) => {
        return <>
            <div className="jira" style={{height:'100%'}}>
                <SidebarCyberbugs />
                
                <br/>
                {/* <MenuCyberbugs /> */}
                    <Component {...propsRoute} />
                
            </div>
        </>
    }} />

}