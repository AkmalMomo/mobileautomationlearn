import HomePage from "../pageobjects/homepage.page.ts";
import sendAuthRequest from '../resources/services/service.ts'
import { drugNames } from "../resources/drugname.ts";
import { drugNamesSelector } from "../resources/drugname.ts";
import * as dotenv from "dotenv";
dotenv.config();

describe("Homepage functionality test", () => {
	// Assigning locators to varaibles
	let searchField: WebdriverIO.Element;
	let testNavIcon: WebdriverIO.Element;
	let testHomeIcon: WebdriverIO.Element;
	let baseUrl: any;

	before(async () => {
		searchField = await HomePage.getSearchField();
		baseUrl = process.env.BASEURL;
		console.log(baseUrl);
	});

	//Can be ignored later, this is for PoC for GET request to get token
	it('should be able to get the request',async()=>{
		try {
			const result = await sendAuthRequest(baseUrl);
			console.log(result);
		  } catch (error) {
			console.error('Error making auth request:', error);
		  }
	});

	//TC1: Navigation Bar: Search
	it('should check if navigation bar: Search is displayed and functional',async()=>{
		testNavIcon = await HomePage.clickSearchTab();
		testNavIcon.click();
	});

	//TC2: Navigation Bar: Interactions
	it('should check if navigation bar: Interactions is displayed and functional',async()=>{
		HomePage.clickInteractionTab();
	});

	//TC3: Navigation Bar: Pill Identifier
	it('should check if navigation bar: Pill Identifier is displayed and functional',async()=>{
		HomePage.clickPillIdTab();
	});

	//TC4: Navigation Bar: Resources
	it('should check if navigation bar: Resources is displayed and functional',async()=>{
		HomePage.clickResourcesTab();
	});

	//TC5: Navigation Bar: Home
	it('should check if navigation bar: Home is displayed and functional',async()=>{
		//For some reason the element need to be clicked twice
		testHomeIcon = await HomePage.clickHomeTab();
		HomePage.clickHomeTab();
	})
	
	//TC6: Home: Search Icon is Clickable
	it("should check if search icon is displayed and functional", async () => {
		HomePage.clickSearchIcon();
	});

	//TC7: Home: Search Field is Present
	it("should check if search field is displayed", async () => {
		const isDisplayed = await searchField.waitForDisplayed({ timeout: 5000 });
		expect(isDisplayed).toBe(true);
	});

	//TC8: Home: Search Drug
	it("should be able to input value to the search field", async () => {
		//Getting random Drug Names from the list
		const drugNamesArray = Object.values(drugNames);
		const randomIndex = Math.floor(Math.random() * drugNamesArray.length);
		const randomDrugName = drugNamesArray[randomIndex];
		const randomDrugSelector = drugNamesSelector[randomDrugName];
		
		//Start of test Case
		await HomePage.setSearchField(randomDrugName);
		const drugElement = await $(randomDrugSelector);
		await drugElement.waitForDisplayed({ timeout: 5000 });
		await HomePage.viewDetail(drugElement)
	});
});
