import {$} from '@wdio/globals'
import { ChainablePromiseElement } from 'webdriverio';


class LoginPage{
    //Locators
    get loginButton(): ChainablePromiseElement<WebdriverIO.Element>{
        return $('~Login');
    }

    get createAccount(): ChainablePromiseElement<WebdriverIO.Element>{
        return $('~Create Account');
    }
}

export default new LoginPage();