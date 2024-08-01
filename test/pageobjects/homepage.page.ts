import { $ } from "@wdio/globals";

class HomePage {
	//Element Selectors
	searchIcon = 'android=new UiSelector().className("com.horcrux.svg.PathView").instance(1)';
	searchField = "android.widget.EditText";
	abbrevPI ='android=new UiSelector().text("Abbrev PI")'

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
		const drugNameSelector = this.abbrevPI;

        //This Do-While loop is necessary because the app won't register the click intermitently
		do {
			await clickDrugDetails.click();
			await browser.pause(1000); // Optional: Add a short pause to avoid too rapid clicking
			isSummaryPresent = await $(drugNameSelector).isExisting();
		} while (!isSummaryPresent);
		console.log(`summary is now present`);
	}

	//Browse Brand

	//Browse Active

	//Drug Update
}

export default new HomePage();
