# learn-user-stories
User Stories Tutorial


# Bank System

## Overview
This project implements a simple bank system in TypeScript. The system supports account creation, checking balances, depositing money, and withdrawing money. It includes type definitions and an interface to ensure a clear contract for implementing banking functionality.

## File Structure
- **`bank-demo/src/types.ts`**: Contains type definitions and interface declarations for the bank system.

- **`bank-demo/tests/bankTest.ts`**: Contains all the tests related to the methods in the bank class.

## Usage
- ** npm install
- ** run the tests: npx ts-node bank-demo/tests/bankTest.ts

## Features

### 1. **Account Management**
- **Create a New Account**:
  - Ensures the user is of age (greater than 18).
  - Assigns a unique account ID and initializes the balance to 0.

### 2. **Transactions**
- **Deposit Money**:
  - Validates account and ensures the deposit amount is greater than zero.
  - Updates the account balance.

- **Withdraw Money**:
  - Validates account and ensures the withdrawal amount is valid and does not exceed the current balance.
  - Updates the account balance.

- **Check Balance**:
  - Retrieves the current balance of the account.

## Type Definitions
### AccountType
```typescript
export type AccountType = {
    id: number;      // Unique identifier for the account
    balance: number; // Current balance of the account
}
```
### BankType Interface
```typescript
export interface BankType {
    createAccount(username: string, age: number, accountNumber: number): AccountType;
    getBalance(accountNumber: number): number;
    depositMoney(accountNumber: number, amount: number): void;
    withdrawMoney(accountNumber: number, amount: number): void;
}
```

## Method Details
### `createAccount(username: string, age: number, accountNumber: number): AccountType`
- **Description**: Creates a new account with the specified username, age, and account number.
- **Parameters**:
  - `username`: The name of the account holder.
  - `age`: The age of the account holder (must be > 18).
  - `accountNumber`: A unique identifier for the account.
- **Returns**: An object representing the newly created account.

### `getBalance(accountNumber: number): number`
- **Description**: Retrieves the balance of a specific account.
- **Parameters**:
  - `accountNumber`: The account number to query.
- **Throws**: Error if the account number is invalid.
- **Returns**: The current balance of the account.

### `depositMoney(accountNumber: number, amount: number): void`
- **Description**: Deposits money into an account.
- **Parameters**:
  - `accountNumber`: The account number to deposit money into.
  - `amount`: The amount to deposit (must be > 0).
- **Throws**: Error if the account number is invalid or the amount is <= 0.

### `withdrawMoney(accountNumber: number, amount: number): void`
- **Description**: Withdraws money from an account.
- **Parameters**:
  - `accountNumber`: The account number to withdraw money from.
  - `amount`: The amount to withdraw (must be > 0 and <= account balance).
- **Throws**: Error if the account number is invalid, the amount is <= 0, or there are insufficient funds.


