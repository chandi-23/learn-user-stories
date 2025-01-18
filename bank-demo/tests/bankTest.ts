import { Bank } from '../src/bank';

const accounts = [{ id: 1234567890, balance: 5000 },
{ id: 1234567891, balance: 10000 }];

const usernames = ['user1', 'user2'];

const bank = new Bank(accounts, usernames);

console.log(bank)

try {
    bank.createAccount('user1', 20, 1234567892);
    console.log('Scenario 1 failed');
}
catch(e) {
    console.log('Scenario 1 passed');
}

// scenario 2: unsuccessful account creation due to customer being below 18

try {
    bank.createAccount('user1', 17, 1234567899);
    console.log('Scenario 2 failed');
}
catch(e) {
    console.log('Scenario 2 passed');
}

// Scenario 3: unsuccessful account creation due to invalid username

try {
    bank.createAccount('user3', 20, 1234567888);
    console.log('Scenario 3 failed as expected');
}
catch(e) {
    console.log('Scenario 3 passed');
}

// see the available accounts
console.log(bank)

console.log("Test 4: get balance of the account `1234567888`");
try {
    const balance = bank.getBalance(1234567888);
    console.log("Balance amount:", balance);
} 
catch (error) {
    console.error("Test 4 Failed:");
}

console.log("Test 5: Depositing money of 500 into an account `1234567888`");
try {
    bank.depositMoney(1234567888, 500);
    const balance = bank.getBalance(1234567888);
    console.log("Deposit successful. New balance:", balance);
} 
catch (error) {
    console.error("Test 5 Failed:");
}

console.log("Test 6: Withdrawing  200 from an account `1234567888`");
try {
    bank.withdrawMoney(1234567888, 200);
    const balance = bank.getBalance(1234567888);
    console.log("Withdrawal successful. New balance:", balance);
} 
catch (error) {
    console.error("Test 6 Failed:");
}

console.log("Test 7: Attempting to withdraw 1000 from '1234567888' (more than available)");
try {
    bank.withdrawMoney(1234567888, 1000);
    console.error("Test 7 Failed: Overdraft allowed.");
} 
catch (error) {
    if (error instanceof Error) {
        console.log("Test 7 Passed:", error.message);
    } else {
        console.log("Test 7 Passed: Unknown error occurred.");
    }
}
