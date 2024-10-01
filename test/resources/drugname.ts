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
export enum Indication{
    ADHD = 'ADHD (attention deficit hyperactivity disorder)',
    MI = 'Myocardial Infarction',
    GBM = 'Glioblastoma Multiforme'
}

//Company
export enum Company{
    AZ = "AstraZeneca Pty Ltd",
    PF = 'Pfizer Australia Pty Ltd',
    '3M' = '3M Australia'

}

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
    [brandNames.ACCURETIC]:'~Accuretic, ',
    [brandNames.ESOMEPRAZOLE]:'~APO-Esomeprazole, '
}

//Active Ingredient Selector
export const drugIngredientsSelector={
    [activeIngredient.AMOXICILLIN]: '~Amoxicillin, ',
    [activeIngredient.ZINC]:'~Zinc, ',
    [activeIngredient.PARACETAMOL]:'~Paracetamol, '
}

//Therapeutic Class Selector
export const therapeuticClassSelector={
    [therapeuticClass.ANTIDEPRESSANTS]:'~Antidepressants, ',
    [therapeuticClass.DIURETICS]:'~Diuretics, ',
    [therapeuticClass["HYPOGLYCAEMIC AGENTS"]]:'~Hypoglycaemic agents, '
}

//Indication Selector
export const indicationSelector={
    [Indication.ADHD]:'~ADHD (attention deficit hyperactivity disorder), ',
    [Indication.MI]:'~Myocardial infarction, ',
    [Indication.GBM]:'~Glioblastoma multiforme, '
}

//Company Selector
export const companySelector={
    [Company.AZ]:'~AstraZeneca Pty Ltd, ',
    [Company.PF]:'~Pfizer Australia Pty Ltd, ',
    [Company["3M"]]:'~3M Australia, '
}
