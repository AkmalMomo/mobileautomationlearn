import HomePage from "../pageobjects/homepage.page.ts";
import { drugNames } from "../resources/drugname.ts";
import { drugNamesSelector } from "../resources/drugname.ts";

describe("Homepage functionality test", () => {
	// Assigning locators to varaibles
	let searchField: WebdriverIO.Element;

	before(async () => {
		searchField = await HomePage.getSearchField();
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


		console.log("element is clicked but nothing happen?");
	});
});
