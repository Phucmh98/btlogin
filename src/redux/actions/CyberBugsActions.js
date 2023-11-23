import { USER_REGISTER_API, USER_SIGNIN_API } from "../constants/LoginForm/LoginFormConstants"
import { EDIT_DATA_USER_SAGA } from "../constants/LoginForm/UserFormConst"



export const signinLoginForm = (email, password) => {
    return {
        type: USER_SIGNIN_API,
        userLogin: {
            email: email,
            password: password
        }
    }
}


export const registerLoginForm = (emailRegister, passwordRegister, name, phone) => {
    return {
        type: USER_REGISTER_API,
        dataRegister: {
            email: emailRegister,
            password: passwordRegister,
            name: name,
            phoneNumber: phone,            

        }
    }
}

export const editUserForm = ( idUser,emailEdit, passwordEdit,  nameEdit,phoneEdit) => {
    return {
        type: EDIT_DATA_USER_SAGA,
        dataUserEdit: {
            id: idUser,
            email: emailEdit,
            password: passwordEdit,
            name: nameEdit,
            phoneNumber: phoneEdit,           

        }
    }
}