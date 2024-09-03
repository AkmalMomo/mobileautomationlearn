//Main Search
export enum drugNames{
    KEYTRUDA = "Keytruda",
    VELSIPITY = "Velsipity",
    "3TC" = "3TC"
}

//Brand Name 
export enum brandNames{
    //crushable
    ACCURETIC = "Accuretic",
    ESOMEPRAZOLE = "APO-ESOMEPRAZOLE"
}

//Active Ingredient
export enum activeIngredient{
    AMOXICILLIN = "Amoxicillin",
    ZINC= "Zinc",
    PARACETAMOL = "Paracetamol"
}

//Therapeutic Class
export enum therapeuticClass{
    ANTIDEPRESSANTS = 'Antidepressants',
    DIURETICS = 'Diuretics',
    "HYPOGLYCAEMIC AGENTS" = 'Hypoglycaemic Agents'
}
//Indication

//Company
/**
 * 
 * Selector is tied to the enumerator. When update the enum, the selector should also be update.
 */

//Main Search Selector
export const drugNamesSelector={
    [drugNames.KEYTRUDA]: 'android=new UiSelector().className("android.view.ViewGroup").instance(22)',
    [drugNames.VELSIPITY]:'android=new UiSelector().className("android.view.ViewGroup").instance(22)',
    [drugNames["3TC"]]:'android=new UiSelector().className("android.view.ViewGroup").instance(22)'
}

//Brand Name Selector
export const drugBrandNamesSelector={
    [brandNames.ACCURETIC]:'~0, Accuretic, ',
    [brandNames.ESOMEPRAZOLE]:'~0, APO-Esomeprazole, '
}

//Active Ingredient Selector
export const drugIngredientsSelector={
    [activeIngredient.AMOXICILLIN]: '~0, Amoxicillin, ',
    [activeIngredient.ZINC]:'~0, Zinc, ',
    [activeIngredient.PARACETAMOL]:'~0, Paracetamol, '
}

//Therapeutic Class Selector
export const therapeuticClassSelector={
    [therapeuticClass.ANTIDEPRESSANTS]:'~0, Antidepressants, ',
    [therapeuticClass.DIURETICS]:'~0, Diuretics, ',
    [therapeuticClass["HYPOGLYCAEMIC AGENTS"]]:'~0, Hypoglycaemic agents, '
}
