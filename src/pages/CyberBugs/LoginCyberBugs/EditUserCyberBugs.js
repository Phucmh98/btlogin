import React, { useState } from 'react'
import { Button, Input, Modal, Tooltip } from 'antd';
import { UserOutlined, LockOutlined, PhoneOutlined, InfoOutlined, SolutionOutlined } from '@ant-design/icons';
import { withFormik } from 'formik'
import * as Yup from 'yup';
import { connect, useDispatch, useSelector } from 'react-redux';

import { editUserForm } from '../../../redux/actions/CyberBugsActions';
import { useEffect } from 'react';

import { CLOSE_DRAWER, RESET_NOTIFI } from '../../../redux/constants/LoginForm/DrawerConst';
import './LoginCybers.css'
function EditUserCyberBugs(props) {

    const { dataUserForm } = useSelector(state => state.UserReducer)
    // console.log('dataUserForm', dataUserForm)
    // console.log('dataUserForm email', dataUserForm[0]?.email)




    useEffect(() => {
        props.setValues({
            ...props.values,
            userId: dataUserForm[0]?.userId || '',
            emailEdit: dataUserForm[0]?.email || '',
            phoneEdit: dataUserForm[0]?.phoneNumber || '',
            nameEdit: dataUserForm[0]?.name || '',
            passwordEdit: '',
            passwordConfirm: '',

        });
    }, [dataUserForm]);


    const dispatch = useDispatch();
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue
    } = props;

    return (
        <form onSubmit={handleSubmit} className="container" style={{ height: window.innerHeight -200}} >
            <div className="d-flex flex-column justify-content-center align-items-center bg_edit_user" style={{ height: '100%'}} >
                <h3 className="text-center" style={{ fontWeight: 'bold', fontSize: 35,color:'white' }}>EDIT USER</h3>
                <div>
                    <div className="d-flex mt-3" >
                        <div>
                            <div style={{color:'white',fontWeight:'500'}}>ID User:</div>
                            <Input onChange={handleChange} style={{ width: '100%', minWidth: 300,borderRadius: '20px'  }} name="userId" size="large" placeholder="User Id" prefix={<InfoOutlined />} disabled value={dataUserForm[0]?.userId} className='borderInput'/>
                        </div>
                    </div>
                    <div className="d-flex mt-3" >
                        <div>
                            <div style={{color:'white',fontWeight:'500'}}>Email:</div>

                            <Input onChange={handleChange} style={{ width: '100%', minWidth: 300 ,borderRadius: '20px'}} name="emailEdit" size="large" placeholder="Email Edit" prefix={<UserOutlined />} value={values.emailEdit} className='borderInput'/>
                        </div>
                    </div>
                    <div className="text-danger">{touched.emailEdit && errors.emailEdit}</div>
                    <div className="d-flex mt-3">
                        <div>

                            <div style={{color:'white',fontWeight:'500'}}>Password:</div>
                            <Input onChange={handleChange} style={{ width: '100%', minWidth: 300,borderRadius: '20px' }} type="password" name="passwordEdit" size="large" placeholder="Password" prefix={<LockOutlined />} value={values.passwordEdit} className='borderInput'/>
                        </div>

                    </div>
                    <div className="text-danger">{errors.passwordEdit}</div>
                </div>

                <div>
                    <div className="d-flex mt-3">
                        <div>
                            <div style={{color:'white',fontWeight:'500'}}>Password Confirm:</div>
                            <Input onChange={handleChange} style={{ width: '100%', minWidth: 300,borderRadius: '20px' }} type="password" name="passwordConfirm" size="large" placeholder="Password Confirm" prefix={<LockOutlined />} value={values.passwordConfirm} className='borderInput'/></div>

                    </div>
                    <div className="text-danger">{errors.passwordConfirm}</div>
                </div>
                <div>
                    <div className="d-flex mt-3">
                        <div>
                            <div style={{color:'white',fontWeight:'500'}}>User Name:</div>
                            <Input onChange={handleChange} style={{ width: '100%', minWidth: 300,borderRadius: '20px' }} name="nameEdit" size="large" placeholder="Edit Name" prefix={<SolutionOutlined />} value={values.nameEdit} className='borderInput'/>
                        </div >
                    </div >
                    <div className="text-danger text-center">{touched.nameEdit && errors.nameEdit}</div>
                </div>

                <div>
                    <div className="d-flex mt-3">
                        <div>
                            <div style={{color:'white',fontWeight:'500'}}>Phone:</div>
                            <Input onChange={handleChange} style={{ width: '100%', minWidth: 300,borderRadius: '20px' }} type="tel" name="phoneEdit" size="large" placeholder="Phone Edit" prefix={<PhoneOutlined />} value={values.phoneEdit} className='borderInput'/>
                        </div>
                    </div>
                    <div className="text-danger text-center">{touched.phoneEdit && errors.phoneEdit} </div>
                </div>



                <div className='row'>

                    <Button htmlType="submit" size="large" style={{ minWidth: 150, backgroundColor: 'rgb(102,117,223)', color: '#fff' }} className="mt-5 col-6 btn_login" onClick={() => {
                    }}>Ok</Button>
                    <Button size="large" style={{ minWidth: 150, backgroundColor: 'rgb(102,117,223)', color: '#fff' }} className="mt-5 col-6 btn_register" onClick={() => {
                        dispatch({
                            type: CLOSE_DRAWER
                        })
                    }}>Cancel</Button>
                </div>

            </div>

        </form >
    )
}

const EditUserCyberBugsWithFormik = withFormik({
    mapPropsToValues: () => ({
        userId: '',
        emailEdit: '',
        passwordEdit: '',
        passwordConfirm: '',
        phoneEdit: '',
        nameEdit: '',
    }),
    validationSchema: Yup.object().shape({

        emailEdit: Yup.string().required('Email is required!').email('Email is invalid!'),
        passwordEdit: Yup.string().required('Password is required!').min(6, 'Password must have min 6 characters').max(32, 'Password  have max 32 characters'),
        passwordConfirm: Yup.string().oneOf([Yup.ref('passwordEdit'), null], 'Passwords must match').required('Password confirmation is required'),
        phoneEdit: Yup.string().required('Phone number is required').matches(/^\d+$/, 'Phone number must be a number'),
        nameEdit: Yup.string().required('Name is required!')
    }),
    handleSubmit: ({ userId, emailEdit, passwordEdit, nameEdit, phoneEdit }, { props, setSubmitting }) => {

        setSubmitting(true)
        props.dispatch(editUserForm(userId, emailEdit, passwordEdit, nameEdit, phoneEdit));
        console.log('khởi tao api')

    },
    displayName: 'EditUserCyberBugs',
})(EditUserCyberBugs);




export default connect()(EditUserCyberBugsWithFormik);