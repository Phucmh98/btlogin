import { all } from "redux-saga/effects";


import * as LoginFormSaga from './LoginForm/LoginFormSaga'
import * as ProjectIdSaga from './LoginForm/ProjectIdSaga'
import * as UserFormSaga from './LoginForm/UserFormSaga'


export function* rootSaga() {

  yield all([


    //Loginform saga 
    LoginFormSaga.theoDoiSigninFormSaga(),
    LoginFormSaga.theoDoiRegisterLoginFormSaga(),

    ProjectIdSaga.theoDoiGetListUserSaga(),
    ProjectIdSaga.theoDoiDeleteUserSaga(),
    ProjectIdSaga.theoDoiGetUserFormSaga(),
    ProjectIdSaga.theoDoifilterUserFormSaga(),

    UserFormSaga.theoDoiEditUserSaga()
  ])


}