import HomePage from "../pageobjects/homepage.page.ts";
import sendAuthRequest from '../resources/services/service.ts'
import { activeIngredient, brandNames, Company, companySelector, drugBrandNamesSelector, drugIngredientsSelector, drugNames, Indication, indicationSelector, therapeuticClass, therapeuticClassSelector } from "../resources/drugname.ts";
import { drugNamesSelector } from "../resources/drugname.ts";
import * as dotenv from "dotenv";
dotenv.config();

describe("Homepage functionality test", () => {
	// Assigning locators to varaibles
	let searchField: WebdriverIO.Element;
	let testNavIcon: WebdriverIO.Element;
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

	//This should consist of multiple test case. Not only for view details but checking if each tab function correctly based on the drug type.
	//Some drug type has different tab due to differrent classification
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
		await HomePage.clickHomeTab();
	});


	//TC9: Browse Brand
	it("should be able to browse by brand name",async()=>{
		await HomePage.clickBrowseBrand();
		//Randomize. List can be update at resources/drugname.ts
		const brandNamesArray = Object.values(brandNames);
		const randomIndex = Math.floor(Math.random()*brandNamesArray.length);
		const randomBrandName = brandNamesArray[randomIndex];
		const randomBrandSelector = drugBrandNamesSelector[randomBrandName];

		//Start of test Case
		await HomePage.setSearchField(randomBrandName);
		const brandElement = await $(randomBrandSelector);
		await brandElement.waitForDisplayed({timeout:5000});
		await brandElement.click();
		await HomePage.clickHomeTab();
	});

	//TC10: Browse Active Ingredients
	it("should be able to browse by active ingredient",async()=>{
		await HomePage.clickHomeTab();
		await HomePage.clickActiveIngredient();
		//Randomize. List can be update at resources/drugname.ts
		const activeIngredientArray = Object.values(activeIngredient);
		const randomIndex = Math.floor(Math.random()*activeIngredientArray.length);
		const randomActiveIngredient = activeIngredientArray[randomIndex];
		const randomActiveIngredientSelector = drugIngredientsSelector[randomActiveIngredient];

		//Start of test case
		await HomePage.setSearchField(randomActiveIngredient);
		const activeIngredientElement = await $(randomActiveIngredientSelector);
		await activeIngredientElement.waitForDisplayed({timeout:5000});
		await activeIngredientElement.click();
		await HomePage.clickHomeTab();
		
	});

	//TC11: Browse Therapeutic Class
	it("should be able to browse by therapeutic class",async()=>{
		await HomePage.clickHomeTab();
		await HomePage.clickTherapeuticClass();
		//Randomize. List can be update at resources/drugname.ts
		const therapeuticClassArray = Object.values(therapeuticClass);
		const randomIndex = Math.floor(Math.random()*therapeuticClassArray.length);
		const randomTherapeuticClass = therapeuticClassArray[randomIndex];
		const randomTherapeuticClassSelector = therapeuticClassSelector[randomTherapeuticClass];

		//Start of test case
		await HomePage.setSearchField(randomTherapeuticClass);
		const therapeuticClassElement = await $(randomTherapeuticClassSelector);
		await therapeuticClassElement.waitForDisplayed({timeout:5000});
		await therapeuticClassElement.click();
		await HomePage.clickHomeTab();
	});

	//TC12: Browse Indication
	it("should be able to browse indication",async()=>{
		await HomePage.clickHomeTab();
		await HomePage.clickIndication();
		//Randomize. List can be update at resources/drugname.ts
		const indicationClassArray = Object.values(Indication);
		const randomIndex = Math.floor(Math.random()*indicationClassArray.length);
		const randomIndication = indicationClassArray[randomIndex];
		const randomIndicationSelector = indicationSelector[randomIndication];

		//start of test case
		await HomePage.setSearchField(randomIndication);
		const indicationElement = await $(randomIndicationSelector);
		await indicationElement.waitForDisplayed({timeout:5000});
		await indicationElement.click();
		await HomePage.clickHomeTab();
	});

	//TC13: Browse Company
	it("should be able to browse company",async()=>{
		await HomePage.clickHomeTab();
		await HomePage.clickCompany();
		//Randomize. List can be updated at resouces/drugname.ts
		const companyArray= Object.values(Company);
		const randomIndex = Math.floor(Math.random()*companyArray.length);
		const randomCompany = companyArray[randomIndex];
		const randomCompanySelector = companySelector[randomCompany];

		//start of test case
		await HomePage.setSearchField(randomCompany);
		const companyElement = await $(randomCompanySelector);
		await companyElement.waitForDisplayed({timeout:5000});
		await companyElement.click();
		await HomePage.clickHomeTab();
	});

});
