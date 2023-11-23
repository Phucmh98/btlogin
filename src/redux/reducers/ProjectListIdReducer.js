
import { GET_LIST_ID } from "../constants/LoginForm/ProjectIdConst";
import { FILTER_USER } from "../constants/LoginForm/UserFormConst";


const stateDefault = {
    listId: [],
    

}


export const ProjectListIdReducer = (state = stateDefault,action) => {


    switch(action.type){

        case GET_LIST_ID: {
                state.listId = action.dataUser;
                console.log("dataUser",action.dataUser)
                return {...state};
        }

        
        case FILTER_USER: {
            state.listId = action.dataUserForm;
            console.log("dataUser",action.dataUserForm)
            return {...state};
    }

        default: return {...state}
    }
}