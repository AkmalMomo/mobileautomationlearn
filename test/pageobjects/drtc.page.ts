import { $ } from "@wdio/globals";

class DRTCPage{
    navResources='~, Resources'
    navDRTC ='~ADD-ON, Don’t Rush to Crush';
    drtcSearchField='android.widget.EditText';

    async navResourcePage(){
        const navResources = await $(this.navResources);
        const isDisplayed= await navResources.waitForDisplayed({timeout:5000});
        expect(isDisplayed).toBe(true);
        await navResources.click();
        return navResources;
    };

    async navDRTCPage(){
        const navDRTC = await $(this.navDRTC);
        const isDisplayed = await navDRTC.waitForDisplayed({timeout:5000});
        expect(isDisplayed).toBe(true);
        await navDRTC.click();
        return navDRTC;
    };

    async getDRTCSearchField(){
        return await $(this.drtcSearchField);
    };

    async setDRTCSearchField(drugName:string){
        const searchDRTC = await this.getDRTCSearchField();
        const isDisplayed = await searchDRTC.waitForDisplayed({timeout:5000});
        expect(isDisplayed).toBe(true);
        await searchDRTC.setValue(drugName);
        return searchDRTC;
    };
};

export default new DRTCPage();