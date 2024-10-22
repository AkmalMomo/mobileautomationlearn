export enum drtcDrugName{
    CHLORTALIDONE='Chlortalidone',
    DIAZEPAM ='Diazepam',
    MEFENAMIC ='Mefenamic Acid'
}

export const drtcDrugNameSelector={
    [drtcDrugName.CHLORTALIDONE]:'~CHLORTALIDONE',
    [drtcDrugName.DIAZEPAM]:'~DIAZEPAM',
    [drtcDrugName.MEFENAMIC]:'~MEFENAMIC ACID'
}