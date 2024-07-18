import LandingPage from "../pageobjects/landing.page.ts";

describe("Open eMIMS Plus Mobile App and go to Landing Page", () => {
	let loginButton: any;
	let appLogo: any;
	let createAccountButton: any;

	// Assigning locators to varaibles
	before(async () => {
		// Ensure the app is opened and the login button is located before running tests
		loginButton = await LandingPage.getloginButton();
		appLogo = await LandingPage.getappLogo();
		createAccountButton = await LandingPage.getcreateAccount();
	});

	//Check for Application logo
	it("should check if the Application Logo is displayed", async () => {
		// Assert that the login button is displayed
		const isDisplayed = await appLogo.waitForDisplayed({ timeout: 5000 });
		expect(isDisplayed).toBe(true);
	});

	//Check for Create Account button
	it("should check if the create account button is displayed", async () => {
		// Assert that the login button is displayed
		const isDisplayed = await createAccountButton.waitForDisplayed({
			timeout: 5000,
		});
		expect(isDisplayed).toBe(true);
	});

	//Check for Login button
	it("should check if the login button is displayed", async () => {
		// Assert that the login button is displayed
		const isDisplayed = await loginButton.waitForDisplayed({ timeout: 5000 });
		expect(isDisplayed).toBe(true);
	});

	//Check for Create Account button functionality
	it("should click Create Account button", async () => {
		// To click on login button
		await createAccountButton.click();
		await browser.back();
	});

	//Check for Login button functionality
	it("should click Login button", async () => {
		// To click on login button
		await loginButton.click();
		console.log("Login button clicked");
	});
});
