export const moneyFormatter = (moneyAmt: number) =>
    new Intl.NumberFormat('en-ca', { style: 'currency', currency: 'CAD' }).format(moneyAmt)

export const increamentPercentage = (increament: number) =>
    new Intl.NumberFormat('en-CA', { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 6 }).format(increament);