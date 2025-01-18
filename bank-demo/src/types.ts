export type AccountType = {
    id: number, // Unique identifier for the account
    balance: number // Current balance of the account
}

export interface BankType {
    /**
     * Creates a new account for the given user.
     * @param username - The username of the account holder.
     * @param age - The age of the account holder; must be > 18.
     * @param accountNumber - A unique account number for the new account.
     * @returns The created account object.
     */
    createAccount(username: string, age: number, accountNumber: number): AccountType
    
    /**
     * Retrieves the balance of a specific account.
     * @param accountNumber - The account number to check the balance for.
     * @returns The current balance of the account.
     * @throws Error if the account number is invalid.
     */
    getBalance(accountNumber: number): number

    /**
     * Deposits a specified amount of money into an account.
     * @param accountNumber - The account number to deposit money into.
     * @param amount - The amount to deposit; must be > 0.
     * @throws Error if the account number is invalid or amount <= 0.
     */
    depositMoney(accountNumber: number, amount: number): void

    /**
     * Withdraws a specified amount of money from an account.
     * @param accountNumber - The account number to withdraw money from.
     * @param amount - The amount to withdraw; must be > 0 and <= account balance.
     * @throws Error if the account number is invalid, amount <= 0, or insufficient balance.
     */
    withdrawMoney(accountNumber: number, amount: number): void
}

