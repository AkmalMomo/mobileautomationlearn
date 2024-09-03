import { $ } from "@wdio/globals";

class HomePage {
	//Element Selectors
	searchIcon = 'android=new UiSelector().className("com.horcrux.svg.PathView").instance(1)';
	searchField = "android.widget.EditText";
	abbrevPI = 'android=new UiSelector().text("Abbrev PI")';
	navHomeIcon = 'android=new UiSelector().text("Home")';
	navSearchIcon = 'android=new UiSelector().text("Search")';
	navInteractionIcon = 'android=new UiSelector().description(", Interactions")';
	navPillIdIcon = 'android=new UiSelector().description(", Pill Identifier")';
	navResourcesIcon = 'android= new UiSelector().description(", Resources")';
	browseBrand = '~Brand, Brand Name, ';
	browseActiveIngredient = '~Ingredient, Active Ingredient, '
	browseTherapeuticClass= '~MIMS Class, Therapeutic Class, '

	//Search Function for Homepage
	async clickSearchIcon() {
		const searchIcon = await $(this.searchIcon);
		const isDisplayed = await searchIcon.waitForDisplayed({ timeout: 5000 });
		expect(isDisplayed).toBe(true);
		await searchIcon.click();
	}

	async getSearchField() {
		return await $(this.searchField);
	}

	async setSearchField(drugName: string) {
		const searchDrug = await this.getSearchField();
		await searchDrug.setValue(drugName);
	}

	async viewDetail(drugSelector: WebdriverIO.Element) {
		const selector = drugSelector;
		const clickDrugDetails = await $(selector);
		let isSummaryPresent = false;
		// const drugNameSelector = `android=new UiSelector().text("${drugName}")`;
		const abbrevPIchecker = this.abbrevPI;

		//This Do-While loop is necessary because the app won't register the click intermitently
		do {
			await clickDrugDetails.click();
			await browser.pause(1000); // Optional: Add a short pause to avoid too rapid clicking
			isSummaryPresent = await $(abbrevPIchecker).isExisting();
		} while (!isSummaryPresent);
		console.log(`summary is now present`);
	}

	//Browse Brand
	async clickBrowseBrand() {
		const navBrowseBrand = await $(this.browseBrand);
		const isDisplayed = await navBrowseBrand.waitForDisplayed({ timeout: 5000 });
		expect(isDisplayed).toBe(true);
		await navBrowseBrand.click();
	}

	//Browse Active Ingredient
	async clickActiveIngredient() {
		const navActiveIngredient = await $(this.browseActiveIngredient);
		const isDisplayed = await navActiveIngredient.waitForDisplayed({timeout: 5000});
		expect(isDisplayed).toBe(true);
		await navActiveIngredient.click();
	}

	//Browse Therapeutic Class
	async clickTherapeuticClass(){
		const navTherapeuticClass = await $(this.browseTherapeuticClass);
		const isDisplayed = await navTherapeuticClass.waitForDisplayed({timeout:5000});
		expect(isDisplayed).toBe(true);
		await navTherapeuticClass.click();
	}

	//Drug Update

	//Home Tab
	async clickHomeTab() {
		const navHomeIcon = await $(this.navHomeIcon);
		const isDisplayed = await navHomeIcon.waitForDisplayed({ timeout: 5000 });
		expect(isDisplayed).toBe(true);
		await navHomeIcon.click();
		return navHomeIcon;
	}

	//Search Tab
	async clickSearchTab() {
		const navSearchIcon = await $(this.navSearchIcon);
		const isDisplayed = await navSearchIcon.waitForDisplayed({ timeout: 5000 });
		expect(isDisplayed).toBe(true);
		// await navSearchIcon.click();
		return navSearchIcon;
	}

	//Interactions Tab
	async clickInteractionTab() {
		const navInteractionIcon = await $(this.navInteractionIcon);
		const isDisplayed = await navInteractionIcon.waitForDisplayed({ timeout: 5000 });
		expect(isDisplayed).toBe(true);
		await navInteractionIcon.click();
	}

	//Pill Identifier Tab
	async clickPillIdTab() {
		const navPillIdIcon = await $(this.navPillIdIcon);
		const isDisplayed = await navPillIdIcon.waitForDisplayed({ timeout: 5000 });
		expect(isDisplayed).toBe(true);
		await navPillIdIcon.click();
	}

	//Resources Tab
	async clickResourcesTab() {
		const navResourcesIcon = await $(this.navResourcesIcon);
		const isDisplayed = await navResourcesIcon.waitForDisplayed({ timeout: 5000 });
		expect(isDisplayed).toBe(true);
		await navResourcesIcon.click();
	}
}

export default new HomePage();
