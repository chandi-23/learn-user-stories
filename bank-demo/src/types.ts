export type AccountType = {
    id: number,
    balance: number
}

export interface BankType {
    createAccount(username: string, age: number, accountNumber: number): AccountType
    
    getBalance(accountNumber: number): number

    depositMoney(accountNumber: number, amount: number): void
}

