import { $ } from "@wdio/globals";

class LoginPage {
    // Selectors for the elements
    emailSelector = 'android=new UiSelector().text("Email")';
    pwdSelector = 'android=new UiSelector().text("Password")';
    Loginbtn = "~Login";
    forgotPwd = 'android=new UiSelector().text("Forgot password?")';
	wrgPwd = 'android=new UiSelector().text("Your email address and/or password is incorrect.")';
	Tokenbtn = '~Token';
	userSignIn = '~User Sign In';

    /**
     * Get the Token button element
     * @returns {Promise<WebdriverIO.Element>} Token button element
     */
    async getTokenButton() {
        return await $(this.Tokenbtn);
    }
	
	
	async clickTokenButton(){
		const clicktokenbtn = await this.getTokenButton();
        await clicktokenbtn.click();
	}
    /**
     * Get the Email text field element
     * @returns {Promise<WebdriverIO.Element>} Email text field element
     */
    async getEmailTextField() {
        return await $(this.emailSelector);
    }

    /**
     * Set the Email text field with the provided email address
     * @param {string} emailadrr - Email address to set
     * @returns {Promise<WebdriverIO.Element>} Email text field element
     */
    async setEmailTextField(emailadrr: string) {
        const emailText = await this.getEmailTextField();
        await emailText.setValue(emailadrr);
        return emailText;
    }

    /**
     * Get the Password text field element
     * @returns {Promise<WebdriverIO.Element>} Password text field element
     */
    async getPasswordTextField() {
        return await $(this.pwdSelector);
    }

    /**
     * Set the Password text field with the provided password
     * @param {string} pwd - Password to set
     * @returns {Promise<WebdriverIO.Element>} Password text field element
     */
    async setPasswordTextField(pwd: string) {
        const pwdText = await this.getPasswordTextField();
        await pwdText.setValue(pwd);
        return pwdText;
    }

    /**
     * Get the Login button element
     * @returns {Promise<WebdriverIO.Element>} Login button element
     */
    async getLoginButton() {
        return await $(this.Loginbtn);
    }

    /**
     * Click the Login button
     * @returns {Promise<WebdriverIO.Element>} Login button element after click
     */
    async clickLoginButton() {
        const loginBtn = await this.getLoginButton();
        await loginBtn.click();
        return loginBtn;
    }

    /**
     * Get the Forgot Password message element
     * @returns {Promise<WebdriverIO.Element>} Forgot Password message element
     */
    async getForgotPwd() {
        return await $(this.forgotPwd);
    }

    /**
     * Click the Forgot Password link or button
     * @returns {Promise<void>}
     */
    async clickForgotPwd() {
        const clickforgotpwd = await this.getForgotPwd();
        await clickforgotpwd.click();
    }
	
	async getUserSignIn(){
		return await $(this.userSignIn);
	}

	async clickUserSignIn(){
		const clickUSI = await this.getUserSignIn();
		await clickUSI.click();
	}
}

export default new LoginPage();
