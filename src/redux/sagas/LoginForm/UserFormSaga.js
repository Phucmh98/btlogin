import { call, delay, put, takeLatest } from "redux-saga/effects";

import { STATUS_CODE } from "../../../util/constants/settingSystem";
import { GET_LIST_ID_SAGA } from "../../constants/LoginForm/ProjectIdConst";
import { projectIdService } from "../../../services/ProjectIdService";

import { notifiFunction } from "../../../util/Notification/notificationCyberbugs";
import { EDIT_DATA_USER, EDIT_DATA_USER_SAGA } from "../../constants/LoginForm/UserFormConst";
import { CLOSE_DRAWER } from "../../constants/LoginForm/DrawerConst";



function* editUserSaga(action) {
    
    
    try {
        const { data, status } = yield call(() => projectIdService.editUserFormId(action.dataUserEdit));
        
        //Sau khi lấy dữ liệu từ api về thành công
        if (status === STATUS_CODE.SUCCESS) {
            // console.log(data)
            yield put({
                type: CLOSE_DRAWER,
            })
            
            yield put({
                type: GET_LIST_ID_SAGA,
            })
            notifiFunction('success', 'Edited User Successfully !')
        }
    } catch (err) {
        console.log(err)
        console.log(err.response.data)
        notifiFunction('error', 'Edited User Fail !')        
    }
    
}



export function* theoDoiEditUserSaga() {
    yield takeLatest(EDIT_DATA_USER_SAGA, editUserSaga);
}



