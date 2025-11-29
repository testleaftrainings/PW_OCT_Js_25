import { WrapperMethod } from "./playwright";

export class LoginPage extends WrapperMethod{

    async loadUrl(url:string){
        await this.launchApp(url)
    }

    async loginData(username:string,password:string){
await this.type("#username",username)
await this.type("#password",password)
    }


    async clickLogin(){
        await this.click(".decorativeSubmit")
    }
}