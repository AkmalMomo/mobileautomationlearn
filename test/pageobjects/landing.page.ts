import { $ } from "@wdio/globals";
import { ChainablePromiseElement } from "webdriverio";

class LandingPage {
	//Locators
	async getloginButton() {
		const loginButton = await $("~Login");
		return loginButton;
	}

	async getcreateAccount(): Promise<
		ChainablePromiseElement<WebdriverIO.Element>
	> {
		const createAccount = await $("~Create Account");
		return createAccount;
	}

	async getappLogo() {
		const appLogo = await $("android.widget.ImageView");
		return appLogo;
	}
}

export default new LandingPage();
