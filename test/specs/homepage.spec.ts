import HomePage from "../pageobjects/homepage.page.ts";
import sendAuthRequest from '../resources/services/service.ts'
import { drugNames } from "../resources/drugname.ts";
import { drugNamesSelector } from "../resources/drugname.ts";
import * as dotenv from "dotenv";
dotenv.config();

describe("Homepage functionality test", () => {
	// Assigning locators to varaibles
	let searchField: WebdriverIO.Element;
	let baseUrl: any;

	before(async () => {
		searchField = await HomePage.getSearchField();
		baseUrl = process.env.BASEURL;
		console.log(baseUrl);
	});

	it('should be able to get the request',async()=>{
		try {
			const result = await sendAuthRequest(baseUrl);
			console.log(result);
		  } catch (error) {
			console.error('Error making auth request:', error);
		  }
	});

	it("should check if search icon is displayed and functional", async () => {
		HomePage.clickSearchIcon();
	});

	it("should check if search field is displayed", async () => {
		const isDisplayed = await searchField.waitForDisplayed({ timeout: 5000 });
		expect(isDisplayed).toBe(true);
	});

	it("should be able to input value to the search field", async () => {
		const drugNamesArray = Object.values(drugNames);
		const randomIndex = Math.floor(Math.random() * drugNamesArray.length);
		const randomDrugName = drugNamesArray[randomIndex];
		const randomDrugSelector = drugNamesSelector[randomDrugName];
		
		await HomePage.setSearchField(randomDrugName);
		const drugElement = await $(randomDrugSelector);
		await drugElement.waitForDisplayed({ timeout: 5000 });
		await HomePage.viewDetail(drugElement)
	});
});
