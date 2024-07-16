import {$} from '@wdio/globals'



class LoginPage{
    //Locators
    async getloginButton(){
        const loginButton = await $('~Login');
        return loginButton;
        }

    // async getcreateAccount(): Promise<ChainablePromiseElement<WebdriverIO.Element>>{
    // const createAccount = await $('~Create Account');
    // return createAccount;
    // }
}

export default new LoginPage();