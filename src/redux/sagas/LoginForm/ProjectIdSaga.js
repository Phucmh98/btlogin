import { call, delay, put, takeLatest } from "redux-saga/effects";

import { STATUS_CODE } from "../../../util/constants/settingSystem";
import { DELETE_ID_USER, DELETE_ID_USER_SAGA, GET_LIST_ID, GET_LIST_ID_SAGA } from "../../constants/LoginForm/ProjectIdConst";
import { projectIdService } from "../../../services/ProjectIdService";
import { DISPLAY_LOADING, HIDE_LOADING } from "../../constants/LoadingConst";
import { notifiFunction } from "../../../util/Notification/notificationCyberbugs";
import { FILTER_USER, FILTER_USER_SAGA, GET_USER_FORM_ID, GET_USER_FORM_ID_SAGA } from "../../constants/LoginForm/UserFormConst";


function *getListUserSaga(action) { 

    try {
        const {data,status} = yield call( () => projectIdService.getAllUser());
 
        //Sau khi lấy dữ liệu từ api về thành công
        if(status === STATUS_CODE.SUCCESS) {
            console.log(data)
            yield put({
                type:GET_LIST_ID,
                dataUser:data.content
            })         
        }
    }catch(err) {
        console.log(err.response?.data)
        console.log(err)
        
       
    }

}


export function* theoDoiGetListUserSaga() {
    yield takeLatest(GET_LIST_ID_SAGA, getListUserSaga);
}


function * deleteUserSaga(action) { 
    yield put({
        type: DISPLAY_LOADING
    })
    yield delay (300);
    try {
        const {data,status} = yield call( () => projectIdService.deleteUserId(action.userId));
        yield put({
            type: HIDE_LOADING
        })
 
        //Sau khi lấy dữ liệu từ api về thành công
        if(status === STATUS_CODE.SUCCESS) {
            
            yield put({
                type:GET_LIST_ID_SAGA,
                
            })
            
            
            notifiFunction('success','Delete User Successfully !')
        }
    }catch(err) {
        console.log(err)
        console.log(err.response.data)
        yield put({
            type: HIDE_LOADING
        })
        notifiFunction('error',`${err.response?.data.content}`)
    }
    yield put({
        type: HIDE_LOADING
    })
}


export function* theoDoiDeleteUserSaga() {
    yield takeLatest(DELETE_ID_USER_SAGA, deleteUserSaga);
}


function* getUserFormSaga(action) {
    console.log(action.userId)
    try {
        const { data, status } = yield call(() => projectIdService.getUserFormId(action.userId));
        

        //Sau khi lấy dữ liệu từ api về thành công
        if (status === STATUS_CODE.SUCCESS) {

            yield put({
                type: GET_USER_FORM_ID,
                dataUserForm: data.content
            })
            // notifiFunction('success','Delete User Successfully !')
        }
    } catch (err) {
        console.log(err)
        console.log(err.response.data)
        
    }
}


export function* theoDoiGetUserFormSaga() {
    yield takeLatest(GET_USER_FORM_ID_SAGA, getUserFormSaga);
}


function* filterUserFormSaga(action) {
    console.log(action.keyword)
    try {
        const { data, status } = yield call(() => projectIdService.getUserFormId(action.keyword));
        

        //Sau khi lấy dữ liệu từ api về thành công
        if (status === STATUS_CODE.SUCCESS) {

            yield put({
                type: FILTER_USER,
                dataUserForm: data.content
            })
            // notifiFunction('success','Delete User Successfully !')
        }
    } catch (err) {
        console.log(err)
        console.log(err.response.data)
        
    }
}


export function* theoDoifilterUserFormSaga() {
    yield takeLatest(FILTER_USER_SAGA, filterUserFormSaga);
}


