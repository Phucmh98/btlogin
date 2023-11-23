import React, { useState } from 'react'
import { Button, Input, Modal, Tooltip } from 'antd';
import { UserOutlined, LockOutlined, PhoneOutlined, MehOutlined } from '@ant-design/icons';
import { withFormik, Formik } from 'formik'
import * as Yup from 'yup';
import { connect, useDispatch, useSelector } from 'react-redux';

import { registerLoginForm } from '../../../redux/actions/CyberBugsActions';
import { useEffect } from 'react';

import { CLOSE_DRAWER, RESET_NOTIFI } from '../../../redux/constants/LoginForm/DrawerConst';
import './LoginCybers.css'
function RegisterCyberBugs(props) {
    const { notifi, content } = useSelector(state => state.drawerReducer);

    const dispatch = useDispatch();
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
    } = props;

    useEffect(() => {
        if (notifi !== null) {
            if (notifi) {
                success();
            } else {
                error();
            }
        }
    }, [notifi]);



    const success = () => {
        Modal.success({
            content: 'REGISTER SUCCESS',
            onOk: () => {
                dispatch({
                    type: RESET_NOTIFI
                })
            }
        });
    };


    const error = () => {
        Modal.error({
            title: 'REGISTER FAIL',
            content: content,
            onOk: () => {
                dispatch({
                    type: RESET_NOTIFI
                })
            }
        });
    };
    return (
        <form onSubmit={handleSubmit} className="container" style={{ height: window.innerHeight - 200 }} >
            <div className='move_register' style={{ height: '100%' }}>

                <div className="d-flex flex-column justify-content-center align-items-center bg_login_register " style={{ height: '100%' }} >
                    <h3 className="text-center" style={{ fontWeight: 300, fontSize: 40, color: 'white', fontWeight: 'bold', lineHeight: '1.5' }}>REGISTER</h3>
                    <div>
                        <div className="d-flex mt-3" >
                            <Input onChange={handleChange} style={{ width: '100%', minWidth: 300, borderRadius: '20px' }} name="emailRegister" size="large" placeholder="Email Register" prefix={<UserOutlined />} className='borderInput' />
                        </div>
                        <div className="text-danger">{errors.emailRegister}</div>
                        <div className="d-flex mt-3">
                            <Input onChange={handleChange} style={{ width: '100%', minWidth: 300, borderRadius: '20px' }} type="password" name="passwordRegister" size="large" placeholder="Password" prefix={<LockOutlined />} className='borderInput' />

                        </div>
                        <div className="text-danger">{errors.passwordRegister}</div>
                    </div>

                    <div>
                        <div className="d-flex mt-3">
                            <Input onChange={handleChange} style={{ width: '100%', minWidth: 300, borderRadius: '20px' }} type="password" name="passwordConfirm" size="large" placeholder="Password Confirm" prefix={<LockOutlined />} className='borderInput' /></div>
                        <div className="text-danger">{errors.passwordConfirm}</div>
                    </div>


                    <div>
                        <div className="d-flex mt-3">
                            <Input onChange={handleChange} style={{ width: '100%', minWidth: 300, borderRadius: '20px' }} type="tel" name="phone" size="large" placeholder="Phone Number" prefix={<PhoneOutlined />} className='borderInput' /></div>
                        <div className="text-danger">{errors.phone}</div>
                    </div>
                    <div >
                        <div className="d-flex mt-3">
                            <Input onChange={handleChange} style={{ width: '100%', minWidth: 300, borderRadius: '20px' }} name="name" size="large" placeholder="Input Name" prefix={<MehOutlined />} className='borderInput' /></div >
                        <div className="text-danger">{errors.name}</div>

                    </div >




                    <div className='row'>
                        <Button htmlType="" size="large" style={{ minWidth: 150, backgroundColor: 'rgb(102,117,223)', color: '#fff' }} className="mt-5 col-6 btn_login" onClick={

                            () => { }

                        }>Sign Up</Button>

                        <Button size="large" style={{ minWidth: 150, backgroundColor: 'rgb(102,117,223)', color: '#fff' }} className="mt-5 col-6 btn_register" onClick={() => {
                            dispatch({
                                type: CLOSE_DRAWER
                            })
                        }}>Cancel</Button>
                    </div>

                </div>
            </div>

        </form>
    )
}

const RegisterCyberBugsWithFormik = withFormik({
    mapPropsToValues: () => ({

        emailRegister: '',
        passwordRegister: '',
        passwordConfirm: '',
        phone: '',
        name: ''
    }),
    validationSchema: Yup.object().shape({

        emailRegister: Yup.string().required('Email is required!').email('Email is invalid!'),
        passwordRegister: Yup.string().required('Password is required!').min(6, 'Password must have min 6 characters').max(32, 'Password  have max 32 characters'),
        passwordConfirm: Yup.string().oneOf([Yup.ref('passwordRegister'), null], 'Passwords must match').required('Password confirmation is required'),
        phone: Yup.string().required('Phone number is required').matches(/^\d+$/, 'Phone number must be a number'),
        name: Yup.string().required('Name is required!')
    }),
    handleSubmit: ({ emailRegister, passwordRegister, phone, name }, { props, setSubmitting }) => {

        setSubmitting(true)
        props.dispatch(registerLoginForm(emailRegister, passwordRegister, name, phone));

    },
    displayName: 'RegisterCyberBugs',
})(RegisterCyberBugs);




export default connect()(RegisterCyberBugsWithFormik);