import { baseService } from "./baseService";

export class LoginFormService extends baseService{
    constructor(){
        super()
    }
    siginLoginForm = (dataSigin) =>{
        return this.post(`Users/signin`,dataSigin)
    }
    registerLoginForm =(dataRegister)=>{
        return this.post(`Users/signup`,dataRegister)
    }
  
}
export const loginFormService = new LoginFormService();