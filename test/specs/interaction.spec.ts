import InteractionPage from "../pageobjects/interaction.page.ts";
import { kaSelectors, phcSelectors, pmSelectors, testScenarios } from "../resources/interactive.ts";
import * as dotenv from "dotenv";
dotenv.config();

describe('Interaction Page functionality test',()=>{
    let InteractionPageDriver: WebdriverIO.Element;

    before(async()=>{
        console.log('Starting Interaction Page Test Case')
        
    });

    //TC1: Navigate to Interaction page
    it("Should be able to navigate to Interaction Page",async()=>{
        InteractionPageDriver = await InteractionPage.clickInteractionPage();
    });

    //Test Scenario: Different Combination of PM + KA + PHC
    //TS1: 1PM + 1 PHC (+ve)
    it("Scenario 1: 1PM + 1 PHC (+ve)",async()=>{

        //Get the Test Scenario 1 Data
        const scenario1 = testScenarios.find(scenario =>
            scenario.pm.length === 1 &&
            scenario.phc.length === 1 &&
            !scenario.ka &&
            scenario.expectedOutcome === 'positive'
        );

        //Test Scenario 1 Data Prescribe Med
        const PrescribedMedicine = scenario1?.pm[0];
        if (typeof PrescribedMedicine === 'string') {
            console.log(PrescribedMedicine);

        //Calling the Selector based on the PrescribedMedicine
        const pmSelector = pmSelectors[PrescribedMedicine];
        
        //Input PrescribedMed Field
        InteractionPageDriver = await InteractionPage.setPrescribedMedSearchField(PrescribedMedicine);
        InteractionPageDriver = await InteractionPage.selectSearchItem(pmSelector);
        };

        //Test Scenario 1 Data PHC
        const PatientHealthCondition = scenario1?.phc[0];
        if (typeof PatientHealthCondition=== 'string'){

        //Calling the Selector based on the PHC
        const phcSelector = phcSelectors[PatientHealthCondition];
        
        //Input PHC Field
        InteractionPageDriver = await InteractionPage.setPatientHealthConditionField(PatientHealthCondition);
        InteractionPageDriver = await InteractionPage.selectSearchItem(phcSelector);
        };

        //Click Check Interaction Button
        await InteractionPage.checkInteractionClick();

        //Navigate Health Condition Check Menu
        await InteractionPage.navHealthCondition();
        const checkResult = '~Renal impairment & Metformin hydrochloride , Extreme caution, Good';
        await InteractionPage.checkIsDisplayedTrue(checkResult);

        //Navigate to Interaction page and clear all
        InteractionPageDriver = await InteractionPage.clickInteractionPage();
        await InteractionPage.clearAll();

    });

    it("Scenario 2: 1PM + 1PHC (-ve)",async()=>{

        //Get the Test Scenario  Data
        const scenario2 = testScenarios.find(scenario =>
            scenario.pm.length === 1 &&
            scenario.phc.length === 1 &&
            !scenario.ka &&
            scenario.expectedOutcome === 'negative'
        );

        //Test Scenario 2 Data PM
        const PrescribedMedicine = scenario2?.pm[0];
        if (typeof PrescribedMedicine === 'string') {
            console.log(PrescribedMedicine);

        //Calling the Selector based on the PrescribedMedicine
        const pmSelector = pmSelectors[PrescribedMedicine];
        
        //Input PrescribedMed Field
        InteractionPageDriver = await InteractionPage.setPrescribedMedSearchField(PrescribedMedicine);
        InteractionPageDriver = await InteractionPage.selectSearchItem(pmSelector);
        };

        //Test Scenario 2 Data PHC
        const PatientHealthCondition = scenario2?.phc[0];
        if (typeof PatientHealthCondition=== 'string'){

        //Calling the Selector based on the PHC
        const phcSelector = phcSelectors[PatientHealthCondition];
        
        //Input PHC Field
        InteractionPageDriver = await InteractionPage.setPatientHealthConditionField(PatientHealthCondition);
        InteractionPageDriver = await InteractionPage.selectSearchItem(phcSelector);
        };

        //Click Check Interaction Button
        await InteractionPage.checkInteractionClick();

        //Navigate Health Condition Check Menu
        await InteractionPage.navHealthCondition();
        const checkResult= '//android.widget.TextView[@text="  No health condition warnings found"]';
        await InteractionPage.checkIsDisplayedTrue(checkResult);

        //Navigate to Interaction page and clear all
        InteractionPageDriver = await InteractionPage.clickInteractionPage();
        await InteractionPage.clearAll();
    });

    it("Scenario 3: 1PM + 1KA + 1 PHC (+ve)",async()=>{

        //Get the Test Scenario  Data
        const scenario3 = testScenarios.find(scenario =>
            scenario.pm.length === 1 &&
            scenario.phc.length === 1 &&
            (scenario.ka?.length ?? 0) === 1 &&
            scenario.expectedOutcome === 'positive'
        );

        //Test Scenario 3 Data PM
        const PrescribedMedicine = scenario3?.pm[0];
        if (typeof PrescribedMedicine === 'string') {
            console.log(PrescribedMedicine);

        //Calling the Selector based on the PrescribedMedicine
        const pmSelector = pmSelectors[PrescribedMedicine];

         //Input PrescribedMed Field
         InteractionPageDriver = await InteractionPage.setPrescribedMedSearchField(PrescribedMedicine);
         InteractionPageDriver = await InteractionPage.selectSearchItem(pmSelector);
        };

        //Test Scenario 3 Data KA
        const KnownAllergies = scenario3?.ka?.[0];
        if (typeof KnownAllergies === 'string'){
            
        //Calling the selector based on the KnownAllergies
        const kaSelector = kaSelectors[KnownAllergies];

        //Input Known Allergies Field
        InteractionPageDriver = await InteractionPage.setKnownAllergiesField(KnownAllergies);
        InteractionPageDriver = await InteractionPage.selectSearchItem(kaSelector);
        };

        //Test Scenario 3 Data PHC
        const PatientHealthCondition = scenario3?.phc[0];
        if (typeof PatientHealthCondition=== 'string'){

        //Calling the Selector based on the PHC
        const phcSelector = phcSelectors[PatientHealthCondition];
        
        //Input PHC Field
        InteractionPageDriver = await InteractionPage.setPatientHealthConditionField(PatientHealthCondition);
        InteractionPageDriver = await InteractionPage.selectSearchItem(phcSelector);
        };
        
        //Click Check Interaction Button
        await InteractionPage.checkInteractionClick();

        //Navigate Health Condition Check Menu
        await InteractionPage.navHealthCondition();
        const checkResult= '~Peptic ulcer & Aspirin , Extreme caution, Good';
        await InteractionPage.checkIsDisplayedTrue(checkResult);

        //Navigate to Interaction page and clear all
        InteractionPageDriver = await InteractionPage.clickInteractionPage();
        await InteractionPage.clearAll();
    });

    it("Scenario 4: 1PM + 1KA + 1 PHC (-ve)",async()=>{

        //Get the Test Scenario  Data
        const scenario4 = testScenarios.find(scenario =>
            scenario.pm.length === 1 &&
            scenario.phc.length === 1 &&
            (scenario.ka?.length ?? 0) === 1 &&
            scenario.expectedOutcome === 'negative'
        );

        //Test Scenario 3 Data PM
        const PrescribedMedicine = scenario4?.pm[0];
        if (typeof PrescribedMedicine === 'string') {
            console.log(PrescribedMedicine);

        //Calling the Selector based on the PrescribedMedicine
        const pmSelector = pmSelectors[PrescribedMedicine];

         //Input PrescribedMed Field
         InteractionPageDriver = await InteractionPage.setPrescribedMedSearchField(PrescribedMedicine);
         InteractionPageDriver = await InteractionPage.selectSearchItem(pmSelector);
        };

        //Test Scenario 3 Data KA
        const KnownAllergies = scenario4?.ka?.[0];
        if (typeof KnownAllergies === 'string'){
            
        //Calling the selector based on the KnownAllergies
        const kaSelector = kaSelectors[KnownAllergies];

        //Input Known Allergies Field
        InteractionPageDriver = await InteractionPage.setKnownAllergiesField(KnownAllergies);
        InteractionPageDriver = await InteractionPage.selectSearchItem(kaSelector);
        };

        //Test Scenario 3 Data PHC
        const PatientHealthCondition = scenario4?.phc[0];
        if (typeof PatientHealthCondition=== 'string'){

        //Calling the Selector based on the PHC
        const phcSelector = phcSelectors[PatientHealthCondition];
        
        //Input PHC Field
        InteractionPageDriver = await InteractionPage.setPatientHealthConditionField(PatientHealthCondition);
        InteractionPageDriver = await InteractionPage.selectSearchItem(phcSelector);
        };
        
        //Click Check Interaction Button
        await InteractionPage.checkInteractionClick();

        //Navigate Health Condition Check Menu
        await InteractionPage.navHealthCondition();
        const checkResult= '//android.widget.TextView[@text="  No health condition warnings found"]';
        await InteractionPage.checkIsDisplayedTrue(checkResult);

        //Navigate to Interaction page and clear all
        InteractionPageDriver = await InteractionPage.clickInteractionPage();
        await InteractionPage.clearAll();
    });

});