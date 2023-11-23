import React, { useState, useEffect, useRef } from 'react'
import { Table, Tag, Space, Button, Avatar, Popconfirm, AutoComplete, Input } from 'antd';


import { useSelector, useDispatch } from 'react-redux'

import { GET_LIST_ID, GET_LIST_ID_SAGA, DELETE_ID_USER_SAGA } from '../../../redux/constants/LoginForm/ProjectIdConst';
import { OPEN_FORM_EDIT_PROJECT } from '../../../redux/constants/LoginForm/DrawerConst';
import EditUserCyberBugs from '../LoginCyberBugs/EditUserCyberBugs';
import { FILTER_USER_SAGA, GET_USER_FORM_ID_SAGA } from '../../../redux/constants/LoginForm/UserFormConst';
import './ProjectManegement.css'
import HeaderProjectManagement from './HeaderProjectManagement';


export default function ProjectManagement(props) {
    //Lấy dữ liệu từ reducer về component

    const { listId } = useSelector(state => state.ProjectListIdReducer)
    // console.log('listId', listId)



    const userOptionsFormat = [];

    listId.forEach((item) => {
        userOptionsFormat.push(item.name);
    });

    listId.forEach((item) => {
        userOptionsFormat.push(item.email);
    });

    listId.forEach((item) => {
        userOptionsFormat.push(item.phoneNumber);
    });



    const onSearch = (value) => {
        console.log('onSelect', value);
        dispatch({
            type: FILTER_USER_SAGA,
            keyword: value
        })
    };


    //Sử dụng useDispatch để gọi action
    const dispatch = useDispatch();
    const [state, setState] = useState({
        filteredInfo: null,
        sortedInfo: null,
    });

    useEffect(() => {

        dispatch({ type: GET_LIST_ID_SAGA })
    }, [])

    const handleChange = (pagination, filters, sorter) => {
        // console.log('Various parameters', pagination, filters, sorter);
        setState({
            filteredInfo: filters,
            sortedInfo: sorter,
        });
    };

    const clearFilters = () => {
        setState({ filteredInfo: null });
    };

    const clearAll = () => {
        setState({
            filteredInfo: null,
            sortedInfo: null,
        });
    };

    const setAgeSort = () => {
        setState({
            sortedInfo: {
                order: 'descend',
                columnKey: 'age',
            },
        });
    };

    let { sortedInfo, filteredInfo } = state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
        {
            title: 'ID User',
            dataIndex: 'userId',
            key: 'userId',
            sorter: (item2, item1) => {
                return item2.userId - item1.userId;
            },
            sortDirections: ['descend'],

        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',

            sorter: (item2, item1) => {
                let email1 = item1.email?.trim().toLowerCase();
                let email2 = item2.email?.trim().toLowerCase();
                if (email2 < email1) {
                    return -1;
                }
                return 1;
            },


        },


        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: (item2, item1) => {
                let name1 = item1.name?.trim().toLowerCase();
                let name2 = item2.name?.trim().toLowerCase();
                if (name2 < name1) {
                    return -1;
                }
                return 1;
            },

        },
        {
            title: 'Phone Number',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',



        },
        {
            title: 'Avatar',
            key: 'avatar',
            render: (text, record, index) => {
                return (
                    <div key={index}>
                        <img
                            src={record.avatar}
                            alt={`avatar ${index}`}
                            style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                            }}
                        />
                    </div>
                );
            },
        },


        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (text, record, index) => {
                return <div>
                    <button className="btn ml-3 mr-3 btn-primary btn_edit" onClick={() => {

                        //dispatch lên reducer nội dung drawer
                        dispatch({
                            type: OPEN_FORM_EDIT_PROJECT,
                            title: 'EDIT USER',
                            Component: <EditUserCyberBugs />,
                        });
                        //dispatch dữ liệu dòng hiện tai lên reducer

                        dispatch({
                            type: GET_USER_FORM_ID_SAGA,
                            userId: record.userId
                        });
                    }}>
                        {/* <FormOutlined style={{ fontSize: 17 }} /> */}
                        EDIT
                    </button>
                    <Popconfirm
                        title="Are you sure to delete this project?"
                        onConfirm={() => {
                            dispatch({ type: DELETE_ID_USER_SAGA, userId: record.userId })
                        }}

                        okText="Yes"
                        cancelText="No"
                    >
                        <button className="btn btn-danger btn_delete ">
                            {/* <DeleteOutlined style={{ fontSize: 17 }} /> */}
                            DELETE
                        </button>
                    </Popconfirm>

                </div>
            },
        }
    ];
    return (
        <div className="container-fluid " style={{ height: window.innerHeight }}>
            <HeaderProjectManagement/>
            <div className='bg_project'>
                
                <div style={{ width: '100%', marginBottom: '20px',marginTop:'10px' }}>
                    <Input.Search
                        placeholder="Input Your Search"
                        allowClear
                        enterButton="SEARCH"
                        size="large"
                        onSearch={onSearch}

                    />
                </div>
                <div style={{ overflowX: 'auto', maxHeight: window.innerHeight - 150, backgroundColor: 'white' }}>
                    <Table style={{ fontSize: '16px' }} columns={columns} rowKey={"userId"} dataSource={listId} onChange={handleChange} bordered={true} size='middle' />
                </div>
            </div>


        </div>
    )
}
