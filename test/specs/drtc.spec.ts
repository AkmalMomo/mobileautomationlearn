import drtcPage from "../pageobjects/drtc.page.ts";
import * as dotenv from "dotenv";
dotenv.config();

describe('Interaction Page functionality test',()=>{
    //Sometimes is required for xpath navigation
    //Using this will ensure more reliability rather than calling it directly.
    let DRTCPageDriver : WebdriverIO.Element;

    before(async()=>{
        console.log('Starting DRTC Page Test Case')   
    });

    //TC1: Navigate to DRTC page
    it("Should be able to navigate to Interaction Page",async()=>{
        DRTCPageDriver = await drtcPage.navResourcePage();
        await drtcPage.navDRTCPage();      
    });


});