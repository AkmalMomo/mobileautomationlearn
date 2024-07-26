import LoginPage from "../pageobjects/login.page.ts";
import * as dotenv from "dotenv";
dotenv.config();

describe("Login to the app", () => {
	let emailText: any;
	let pwdText: any;
	let emailSelector: WebdriverIO.Element;
	let pwdSelector: WebdriverIO.Element;
	let loginBtn: WebdriverIO.Element;
	let forgotPwd: WebdriverIO.Element;
	let tokenBtn: WebdriverIO.Element;
	let userSignIn: WebdriverIO.Element;
	let wrgPwd: WebdriverIO.Element;

	before(async () => {
		// Assigning variables
		console.log("Confirming on login page");
		emailText = process.env.EMAIL;
		pwdText = process.env.PASSWORD;
		emailSelector = await LoginPage.getEmailTextField();
		pwdSelector = await LoginPage.getPasswordTextField();
		loginBtn = await LoginPage.getLoginButton();
		forgotPwd = await LoginPage.getForgotPwd();
		tokenBtn = await LoginPage.getTokenButton();
		userSignIn = await LoginPage.getUserSignIn();
		wrgPwd = await LoginPage.getWrongPwd();
	});

	//Check for Login Field
	it("should check if login field is displayed", async () => {
		const isDisplayed = await emailSelector.waitForDisplayed({ timeout: 5000 });
		expect(isDisplayed).toBe(true);
	});

	//Check for password field
	it("should check if password field is displayed", async () => {
		const isDisplayed = await pwdSelector.waitForDisplayed({ timeout: 5000 });
		expect(isDisplayed).toBe(true);
	});

	//Check for Login button
	it("should check if login button is displayed", async () => {
		const isDisplayed = await loginBtn.waitForDisplayed({ timeout: 5000 });
		expect(isDisplayed).toBe(true);
	});

	//Check for Forgot Password
	it("shoud check if forgot password is displayed", async () => {
		const isDisplayed = await forgotPwd.waitForDisplayed({ timeout: 5000 });
		expect(isDisplayed).toBe(true);
	});

	//Check for Forgot Password is Clickable
	it("shoud check if forgot password is clickable", async () => {
		await LoginPage.clickForgotPwd();
		await browser.back();
	});

	//Check for Token Button
	it("should check if Token button is displayed", async () => {
		const isDisplayed = await tokenBtn.waitForDisplayed({ timeout: 5000 });
		expect(isDisplayed).toBe(true);
	});

	//Check for Token Button is Clickable
	it("should check if Token Button is clickable", async () => {
		await LoginPage.clickTokenButton();
		await LoginPage.clickUserSignIn();
	});

	//Check fail login scenario
	it("should not be able to login with incorrect credential", async () => {
		await LoginPage.setEmailTextField('invalidmail@mail.to');
		await LoginPage.setPasswordTextField('12345');
		await LoginPage.clickLoginButton();
		const isDisplayed = await wrgPwd.waitForDisplayed({ timeout: 5000 });
		expect(isDisplayed).toBe(true);
	});

	//Check for success login scenario
	it("should be able to login with correct credential", async () => {
		await LoginPage.setEmailTextField(emailText);
		await LoginPage.setPasswordTextField(pwdText);
		await LoginPage.clickLoginButton();
	});
});
