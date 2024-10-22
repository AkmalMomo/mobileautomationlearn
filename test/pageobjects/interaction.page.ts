import { $ } from "@wdio/globals";

class InteractionPage{
    navInteractionIcon ='android=new UiSelector().text("Interactions")';
    prescribeMedSearchField= '//android.widget.EditText[contains(@text, "Prescribed")]';
    knownAllergiesField ='//android.widget.EditText[contains(@text, "Known")]';
    patientHealthConditionField ='//android.widget.EditText[contains(@text, "Health Condition")]';
    checkInteractionButton ='~Check Interactions';
    navHealthConditionBtn ='~Health Condition Check';
    clearAllTest ='//android.widget.TextView[contains(@text,"Clear all")]';


    async clickInteractionPage(){
        const navInteractionIcon = await $(this.navInteractionIcon);
		const isDisplayed = await navInteractionIcon.waitForDisplayed({ timeout: 5000 });
		expect(isDisplayed).toBe(true);
		await navInteractionIcon.click();
        return navInteractionIcon;
    }

    async getPrescribedMedSearchField(){
        return await $(this.prescribeMedSearchField)
    }

    async setPrescribedMedSearchField(PrescribedMed:string){
        const searchDrug = await this.getPrescribedMedSearchField();
        const isDisplayed = await searchDrug.waitForDisplayed({ timeout: 5000 });
        expect(isDisplayed).toBe(true);
        await searchDrug.waitForEnabled({ timeout: 5000 });
        await searchDrug.setValue(PrescribedMed);
        return searchDrug;
    }

    async getKnownAllergiesField(){
        return await $(this.knownAllergiesField);
    }

    async setKnownAllergiesField(KnownAll:string){
        const searchAllergies = await this.getKnownAllergiesField();
        const isDisplayed = await searchAllergies.waitForDisplayed({timeout:5000});
        expect(isDisplayed).toBe(true);
        await searchAllergies.waitForEnabled({timeout:5000});
        await searchAllergies.setValue(KnownAll);
        return searchAllergies;
    };

    async getPatientHealthConditionField(){
        return await $(this.patientHealthConditionField);
    };

    async setPatientHealthConditionField(PatientHealth:string){
        const searchPtHP = await this.getPatientHealthConditionField();
        const isDisplayed = await searchPtHP.waitForDisplayed({timeout:5000});
        expect(isDisplayed).toBe(true);
        await searchPtHP.waitForEnabled({timeout:5000});
        await searchPtHP.setValue(PatientHealth);
        return searchPtHP;
    };

    async selectSearchItem(elementSelect:string){
        const pmElement = await $(elementSelect);
        await pmElement.waitForDisplayed({timeout:5000});
        await pmElement.click();
        return pmElement;
    };

    async checkInteractionClick(){
        const clickbtn = await $(this.checkInteractionButton);
        await clickbtn.click();
    };

    async navHealthCondition(){
        const navHC = await $(this.navHealthConditionBtn);
        await navHC.click();
    };

    async checkIsDisplayedTrue(HCAssert:string){
        const assertExistElement = await $(HCAssert);
        const isDisplayed= await assertExistElement.waitForDisplayed({timeout:5000});
        expect(isDisplayed).toBe(true);
        return isDisplayed;
    };

    async checkIsDisplayed(HCAssert:string){
        const assertExistElement = await $(HCAssert);
        const isDisplayed= await assertExistElement.isDisplayed();
        return isDisplayed;
    };

    async clearAll(){
        const CA = await $(this.clearAllTest);

        let checkAll = await this.checkIsDisplayed(this.clearAllTest);
        while(checkAll){
            await CA.click();
            checkAll = await this.checkIsDisplayed(this.clearAllTest);

        };
    };
}

export default new InteractionPage();