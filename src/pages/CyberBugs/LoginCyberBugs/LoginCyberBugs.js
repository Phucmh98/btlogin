import React, { useEffect, useState } from 'react'
import { Button, Input, Modal } from 'antd';
import { UserOutlined, LockOutlined, } from '@ant-design/icons';
import { withFormik, Formik } from 'formik'
import * as Yup from 'yup';
import { connect, useDispatch, useSelector } from 'react-redux';

import { signinLoginForm } from '../../../redux/actions/CyberBugsActions';
import { OPEN_FORM_EDIT_PROJECT, RESET_NOTIFI } from '../../../redux/constants/LoginForm/DrawerConst';
import RegisterCyberBugs from './RegisterCyberBugs';

import './LoginCybers.css'

function LoginCyberBugs(props) {
    const { notifiLogin, contentLogin } = useSelector(state => state.drawerReducer);
    // console.log('content',content)
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
        if (notifiLogin !== null) {

            error();

        }
    }, [notifiLogin]);


    const error = () => {
        Modal.error({
            title: 'LOGIN FAIL',
            content: contentLogin,
            onOk: () => {
                dispatch({
                    type: RESET_NOTIFI
                })
            }
        });
    };


    return (
        <form onSubmit={handleSubmit} className="container" style={{ height: window.innerHeight }} >
            <div className='move_login' style={{ height: '100%' }}>

                <div className="d-flex flex-column justify-content-center align-items-center bg_login_account" style={{ height: '100%' }} >
                    <h3 className="text-center" style={{ fontWeight: 300, fontSize: 40, color: 'white', fontWeight: 'bold', lineHeight: '1.5' }}>LOGIN</h3>

                    <div className="d-flex mt-3" >
                        <Input onChange={handleChange} style={{ width: '100%', minWidth: 300, borderRadius: '20px' }} name="email" size="large" placeholder="Email" prefix={<UserOutlined />} className='borderInput' />
                    </div>
                    <div className="text-danger">{touched.errors && errors.email}</div>
                    <div className="d-flex mt-3">
                        <Input onChange={handleChange} style={{ width: '100%', minWidth: 300, borderRadius: '20px' }} type="password" name="password" size="large" placeholder="Password" prefix={<LockOutlined />} className='borderInput' />

                    </div>
                    <div className="text-danger">{errors.password}</div>
                    <div className='row'>
                        <Button htmlType="submit" size="large" style={{ minWidth: 150 }} className="mt-5 col-6 btn_login"  >Login</Button>

                        <Button size="large" style={{ minWidth: 150, backgroundColor: 'rgb(102,117,223)', color: '#fff' }} className="mt-5 col-6 btn_register" onClick={() => {

                            dispatch({
                                type: OPEN_FORM_EDIT_PROJECT,
                                Component: <RegisterCyberBugs />,
                                title: 'Register'
                            })
                        }}>Register</Button>
                    </div>



                    <div className="social mt-5 d-flex justify-content-around " style={{ width: 300, padding: '0 20px 0 20px' }}>
                        <Button style={{ backgroundColor: 'transparent', }} shape="circle" size={"large"} className='button-icon'>
                            <i className="fa-brands fa-facebook"></i>
                        </Button>
                        <Button style={{ backgroundColor: 'transparent', }} shape="circle" size={"large"} className='button-icon'>
                            <i className="fa-brands fa-google-plus-g"></i>
                        </Button>
                        <Button style={{ backgroundColor: 'transparent', }} shape="circle" size={"large"} className='button-icon'>
                            <i className="fa-brands fa-youtube"></i>
                        </Button>
                        <Button style={{ backgroundColor: 'transparent', }} shape="circle" size={"large"} className='button-icon'>
                            <i className="fa-brands fa-twitter"></i>
                        </Button>


                    </div>
                </div>
            </div>

        </form>
    )
}

const LoginCyberBugsWithFormik = withFormik({
    mapPropsToValues: () => ({
        email: '',
        password: '',

    }),
    validationSchema: Yup.object().shape({
        email: Yup.string().required('Email is required!').email('Email is invalid!'),
        password: Yup.string().min(6, 'Password must have min 6 characters').max(32, 'Password  have max 32 characters'),

    }),
    handleSubmit: ({ email, password, }, { props, setSubmitting }) => {

        setSubmitting(true);
        props.dispatch(signinLoginForm(email, password));

    },
    displayName: 'LoginCyberBugs',
})(LoginCyberBugs);




export default connect()(LoginCyberBugsWithFormik);