import { $ } from "@wdio/globals";

class HomePage{
    
    //Element Selectors
    searchIcon = 'android=new UiSelector().className("com.horcrux.svg.PathView").instance(1)'
    searchField = 'android.widget.EditText'

    //Search Function for Homepage
    async clickSearchIcon(){
        const searchIcon=  await $(this.searchIcon);
        const isDisplayed = await searchIcon.waitForDisplayed({ timeout: 5000 });
        expect(isDisplayed).toBe(true);
        await searchIcon.click();
    }

    async getSearchField(){
        return await $(this.searchField);
    }

    async setSearchField(drugName: string){
        const searchDrug = await this.getSearchField();
        await searchDrug.setValue(drugName);
    }

    async viewDetail(drugName:WebdriverIO.Element){
        const selector = drugName;
        const clickDrugDetails = await $(selector);
        await clickDrugDetails.click();
    }

    //Browse Brand

    //Browse Active

    //Drug Update
}

export default new HomePage();