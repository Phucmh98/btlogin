import { EDIT_DATA_USER, GET_USER_FORM_ID } from "../constants/LoginForm/UserFormConst"

const initialState = {
    dataUser:{
        "id": 0,
        "passWord": "123456",
        "email": "test@gmail.com",
        "name": "test",
        "phoneNumber": "0123456789"
    },
    dataUserForm:[]

    
}

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {

  case EDIT_DATA_USER:{
    return {...state, dataUser:action.dataUser}
  }
  case GET_USER_FORM_ID:{
    // console.log(action.dataUserForm)
    return {...state,dataUserForm:action.dataUserForm}
  }
    

  default:
    return {...state}
  }
}
