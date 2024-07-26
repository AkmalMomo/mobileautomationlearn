export enum drugNames{
    KEYTRUDA = "Keytruda",
    VELSIPITY = "Velsipity",
    "3TC" = "3TC"
}

export const drugNamesSelector={

    //Selector kinda weird here. Using Invalid Character? 
    [drugNames.KEYTRUDA]: 'android=new UiSelector().className("android.view.ViewGroup").instance(23)',
    [drugNames.VELSIPITY]:'android=new UiSelector().className("android.view.ViewGroup").instance(23)',
    [drugNames["3TC"]]:'android=new UiSelector().className("android.view.ViewGroup").instance(23)'
}