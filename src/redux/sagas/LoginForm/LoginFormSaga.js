
import { call, delay, fork, take, takeEvery, takeLatest, put, select } from 'redux-saga/effects';


import { DISPLAY_LOADING, HIDE_LOADING } from '../../constants/LoadingConst';
import { STATUS_CODE, TOKEN, USER_LOGIN } from '../../../util/constants/settingSystem'

import { history } from '../../../util/history';

import { array } from 'yup';
import { loginFormService } from '../../../services/LoginFormService';
import { USER_REGISTER_API, USER_SIGNIN_API, USLOGIN } from '../../constants/LoginForm/LoginFormConstants';
import { CLOSE_DRAWER, OPEN_NOTIFI_FAIL, OPEN_NOTIFI_FAIL_LOGIN, OPEN_NOTIFI_SUCCESS } from '../../constants/LoginForm/DrawerConst';



//Quản lý các action saga
function* signinLoginFormSaga(action) {
    console.log(action);
    yield put({
        type: DISPLAY_LOADING
    })
    yield delay(500);

    //Gọi api 
    try {
        const { data, status } = yield call(() => loginFormService.siginLoginForm(action.userLogin));

        //Lưu vào localstorage khi đăng nhập thành công
        localStorage.setItem(TOKEN, data.content.accessToken);
        localStorage.setItem(USER_LOGIN, JSON.stringify(data.content));


        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: USLOGIN,
                userLogin: data.content,

            })


            history.push('/projectmanagement');
        }

    } catch (err) {
        console.log(err.response.data)
        
        yield put({
            type: OPEN_NOTIFI_FAIL_LOGIN,
            contentLogin: err.response?.data.message,
            
        })
    }


    yield put({
        type: HIDE_LOADING
    })

}


export function* theoDoiSigninFormSaga() {
    yield takeLatest(USER_SIGNIN_API, signinLoginFormSaga);
}


function* registerLoginFormSaga(action) {
    // console.log(action.dataRegister);
    yield put({
        type: DISPLAY_LOADING
    })
    yield delay(500);

    //Gọi api 
    try {
        const { data, status } = yield call(() => loginFormService.registerLoginForm(action.dataRegister));

        if (status === STATUS_CODE.SUCCESS) {
            console.log(status)
            yield put({
                type: CLOSE_DRAWER
            })

            yield put({
                type: OPEN_NOTIFI_SUCCESS
            })

            yield put({
                type: HIDE_LOADING,
            })
        }


    } catch (err) {

        console.log(err.response?.data)
        console.log(err)
        yield put({
            type: HIDE_LOADING,
        })
        yield put({

            type: OPEN_NOTIFI_FAIL,
            content: err.response?.data.message
        })


    }



}


export function* theoDoiRegisterLoginFormSaga() {
    yield takeLatest(USER_REGISTER_API, registerLoginFormSaga);
}
