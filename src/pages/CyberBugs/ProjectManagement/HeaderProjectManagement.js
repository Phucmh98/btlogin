import React from 'react'

import './ProjectManegement.css'
import { useSelector } from 'react-redux';
import { Popover } from 'antd';

export default function HeaderProjectManagement() {
    const { userLogin } = useSelector(state => state.UserLoginCyberBugsReducer)

    const content = ()=>{
        return <a className='btn-logout' href="/login" >
            LOGOUT <i className="fa-solid fa-right-from-bracket"></i>
        </a>
    }
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <h3 style={{ color: 'white', fontWeight: 'bold', margin: '0' }}>USER MANAGEMENT</h3>
                <form className="d-flex" role="search">
                    <Popover placement="bottomRight" title='INFORMATION' content={content}>
                        <div className="profile-container" style={{ cursor: 'pointer' }}>
                            <img
                                className="profile-avatar"
                                src={userLogin.avatar}
                                alt="Your Avatar"
                            />
                            <span className="profile-name" style={{ color: 'white', fontSize: '16px' }}>{userLogin.name.toUpperCase()} <i className="fa-solid fa-caret-down"></i>

                            </span>
                        </div>
                    </Popover>
                </form>
            </div>
        </nav>





    )
}
