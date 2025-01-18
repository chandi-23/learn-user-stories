import { BankType, AccountType } from "./types";

export class Bank implements BankType {
    private accounts: AccountType[] = [];
    private usernames: string[] = [];

    public constructor(accounts: AccountType[], usernames: string[] ) {
        this.accounts = accounts;
        this.usernames = usernames;
    }

    private isAccountNumberInvalid(accountNumber: number): Boolean{
        return accountNumber.toString().length != 10;
    }

    private isUsernameExists(username: string): Boolean {
        return this.usernames.includes(username)
    }

    private findAccountById(accountNumber: number): AccountType | undefined{
        return this.accounts.find((account)=> account.id===accountNumber)
    }

    createAccount(username: string, age: number, accountNumber: number): AccountType {

        if(this.isAccountNumberInvalid(accountNumber)){
            throw new Error('Invalid account number.');
        }

        if(this.isUsernameExists(username)){
            throw new Error('Username already exists.');
        }

        if(age < 18) {
            throw new Error('User is under 18');
        }

        if(this.findAccountById(accountNumber)) {
            throw new Error('Account already exists');
        }

        const newAccount:AccountType = {
            id: accountNumber,
            balance: 0
        }
    
        this.accounts.push(newAccount);
        return newAccount
    }

    getBalance(accountNumber: number): number {
        const account = this.accounts.find((account)=> account.id===accountNumber)
        if (!account) {
            throw new Error('Account not found.');
        }

        return account.balance;
    }

    depositMoney(accountNumber: number, amount: number): void {
        if (amount <= 0) {
            throw new Error('Deposit amount must be greater than zero.');
        }
        const account = this.accounts.find((account)=> account.id===accountNumber)
        if (!account) {
            throw new Error('Account not found.');
        }
        account.balance += amount
        
    }
}