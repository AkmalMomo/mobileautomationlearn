//Prescribed Medicine Data
export enum PrescribedMedicines{
    ASPIRIN = 'Aspirin',
    METFORMIN = 'Metformin GH',
    LORATADINE = 'Loratadine',
    PARACETAMOL = 'Paracetamol',
    SIMVASTATIN = 'Simvastatin',
    LOSARTAN = 'Losartan',
    PREDNISOLONE = 'Prednisolone',
    IBUPROFEN = 'Ibuprofen'
};

export const pmSelectors={
    [PrescribedMedicines.ASPIRIN]:'~Ingredient, Aspirin',
    [PrescribedMedicines.METFORMIN]:'~Brand, Metformin GH',
    [PrescribedMedicines.LORATADINE]:'~Ingredient, Loratadine',
    [PrescribedMedicines.PARACETAMOL]:'~Ingredient, Paracetamol',
    [PrescribedMedicines.SIMVASTATIN]:'~Ingredient, Simvastatin',
    [PrescribedMedicines.LOSARTAN]:'~Ingredient, Losartan',
    [PrescribedMedicines.PREDNISOLONE]:'~Ingredient, Prednisolone',
    [PrescribedMedicines.IBUPROFEN]:'~Ingredient, Ibuprofen'
};

export enum KnownAllergies{
    IBUPROFEN = 'Ibuprofen',
    SILCAP = 'Silcap',
    PENICILLINS = 'Penicillins',
    LACTOSE = 'Lactose',
    ASPIRIN = 'Aspirin',
};

export const kaSelectors={
    [KnownAllergies.IBUPROFEN]:'~Ingredient, Ibuprofen',
    [KnownAllergies.SILCAP]:'~Brand, Silcap',
    [KnownAllergies.PENICILLINS]:'~Allergy Class, Penicillins',
    [KnownAllergies.LACTOSE]:'~Ingredient, Lactose',
    [KnownAllergies.ASPIRIN]:'~Ingredient, Aspirin',
};

export enum PatientHealthCondition{
    RENAL_IMPAIRMENT= 'Renal Impairment',
    ASTHMA = 'Asthma',
    PEPTIC_ULCER ='Peptic Ulcer',
    HYPERTENSION='Hypertension',
    OSTEOARTHRITIS='Osteoarthritis',
    HEART_FAILURE_ICD10 ='Heart Failure'
};

export const phcSelectors={
    [PatientHealthCondition.RENAL_IMPAIRMENT]:'~MIMS, Renal impairment',
    [PatientHealthCondition.ASTHMA]:'~MIMS, Asthma',
    [PatientHealthCondition.PEPTIC_ULCER]:'~MIMS, Peptic ulcer',
    [PatientHealthCondition.HYPERTENSION]:'~MIMS, Hypertension',
    [PatientHealthCondition.OSTEOARTHRITIS]:'~MIMS, Osteoarthritis',
    [PatientHealthCondition.HEART_FAILURE_ICD10]:'~ICD10, Heart failure'
};

//Declaring the interface: allowing multiple inputs
interface TestScenario{
    pm: PrescribedMedicines[];
    ka?: KnownAllergies[];
    phc: PatientHealthCondition[];
    expectedOutcome:'positive'|'negative';
};

/**
 * Test Scenario is based on this ticket
 * https://mimshub.atlassian.net/browse/REFPROD-492
 */
export const testScenarios:TestScenario[]=[
    //Test Scenario 1: PM + PHC +ve
    {
        pm: [PrescribedMedicines.METFORMIN],
        phc:[PatientHealthCondition.RENAL_IMPAIRMENT],
        expectedOutcome:'positive',
    },

    //Test Scenario 2: PM + PHC -ve
    {
        pm: [PrescribedMedicines.LORATADINE],
        phc: [PatientHealthCondition.ASTHMA],
        expectedOutcome: 'negative',
    },

    //Test Scenario 3: 1PM + 1KA + 1 PHC +ve
    {
        pm: [PrescribedMedicines.ASPIRIN],
        ka: [KnownAllergies.IBUPROFEN],
        phc:[PatientHealthCondition.PEPTIC_ULCER],
        expectedOutcome: 'positive',
    },

    //Test Scenario 4: 1PM + 1KA + 1 PHC -ve
    {
        pm: [PrescribedMedicines.PARACETAMOL],
        ka: [KnownAllergies.SILCAP],
        phc: [PatientHealthCondition.HYPERTENSION],
        expectedOutcome: 'negative',
    },

    //Test Scenario 5: 1> PM + 1 KA + 1 PHC +ve
    {
        pm: [PrescribedMedicines.ASPIRIN,PrescribedMedicines.SIMVASTATIN],
        ka: [KnownAllergies.PENICILLINS],
        phc: [PatientHealthCondition.PEPTIC_ULCER],
        expectedOutcome: 'positive',
    },

    //Test Scenario 6: 1> PM + 1KA + 1 PHC -ve
    {
        pm: [PrescribedMedicines.METFORMIN,PrescribedMedicines.LOSARTAN],
        ka: [KnownAllergies.LACTOSE],
        phc: [PatientHealthCondition.OSTEOARTHRITIS],
        expectedOutcome: 'negative',
    },

    //Test Scenario 7: 1> PM + 1KA + 1> PHC +ve Multiple interactions
    {
        pm:[PrescribedMedicines.ASPIRIN, PrescribedMedicines.PREDNISOLONE],
        ka: [KnownAllergies.ASPIRIN],
        phc: [PatientHealthCondition.HYPERTENSION,PatientHealthCondition.PEPTIC_ULCER],
        expectedOutcome: 'positive',
    },

    //Test Scenario 8: 1PM + 1PHC (ICD10) +ve
    {
        pm: [PrescribedMedicines.IBUPROFEN],
        phc: [PatientHealthCondition.HEART_FAILURE_ICD10],
        expectedOutcome: 'positive',
    }
];