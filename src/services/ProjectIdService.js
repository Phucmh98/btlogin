import { baseService } from "./baseService";

export class ProjectIdService extends baseService{
    constructor(){
        super()
    }
    getAllUser = () =>{
        return this.get(`Users/getUser`)
    }
    deleteUserId =(userId)=>{
        return this.delete(`Users/deleteUser?id=${userId}`)
    }
    getUserFormId =(userId)=>{
        return this.get(`Users/getUser?keyword=${userId}`)
    }
    editUserFormId = (dataUserEdit)=>{
        return this.put(`Users/editUser`,dataUserEdit)
    }
  
}
export const projectIdService = new ProjectIdService();