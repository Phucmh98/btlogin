import React from 'react'
import { CLOSE_DRAWER, OPEN_DRAWER, OPEN_FORM_CREATE_TASK, OPEN_FORM_EDIT_PROJECT, OPEN_NOTIFI_FAIL, OPEN_NOTIFI_FAIL_LOGIN, OPEN_NOTIFI_SUCCESS, RESET_NOTIFI } from '../constants/LoginForm/DrawerConst'

const initialState = {
    visible: false,
    title:'',
    content:'',
    contentLogin:'',
    ComponentContentDrawer: <p>default</p>,
    callBackSubmit: (propsValue) => { alert('click demo!') },
    notifi:null,
    notifiLogin:null
}

export const drawerReducer = (state = initialState, action) => {
    switch (action.type) {

        case OPEN_DRAWER:
            return { ...state, visible: true }
        case CLOSE_DRAWER:
            return { ...state, visible: false }
        case OPEN_FORM_EDIT_PROJECT: {
            
            state.visible = true;
            state.ComponentContentDrawer = action.Component;
            state.title = action.title;
            return { ...state }

        }
        case OPEN_NOTIFI_FAIL: {            
            state.notifi = false;
            state.content = action.content
            
            return { ...state }

        }
        case OPEN_NOTIFI_FAIL_LOGIN: {            
            state.notifiLogin = false;
            state.contentLogin = action.contentLogin
            
            return { ...state }

        }
        case OPEN_NOTIFI_SUCCESS: {            
            state.notifi = true;
                        
            return { ...state }

        }
        case RESET_NOTIFI:{
            return {...state, notifi: null, content:'', notifiLogin: null, contentLogin:''}
            
        }


        case OPEN_FORM_CREATE_TASK : {
            
            state.visible = true;
            state.title = action.title;
            state.ComponentContentDrawer = action.Component;
            return {...state};

        }

        

        default:
            return state
    }
}
