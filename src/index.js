"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const account_1 = require("./account");
const account = new account_1.Account(1000);
console.log('Welcome to MyBank Console App!');
inquirer_1.default
    .prompt([
    {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: ['Deposit', 'Withdraw', 'Check Balance', 'Exit']
    },
    {
        type: 'input',
        name: 'amount',
        message: 'Enter amount:',
        when: (answers) => ['Deposit', 'Withdraw'].includes(answers.action),
        validate: (value) => {
            if (isNaN(value) || parseInt(value) <= 0) {
                return 'Please enter a valid amount.';
            }
            return true;
        }
    }
])
    .then((answers) => {
    switch (answers.action) {
        case 'Deposit':
            const depositAmount = parseInt(answers.amount);
            account.deposit(depositAmount);
            console.log(`Deposited ${depositAmount}. New balance: ${account.getBalance()}`);
            break;
        case 'Withdraw':
            const withdrawAmount = parseInt(answers.amount);
            if (account.withdraw(withdrawAmount)) {
                console.log(`Withdrawn ${withdrawAmount}. New balance: ${account.getBalance()}`);
            }
            else {
                console.log('Insufficient funds.');
            }
            break;
        case 'Check Balance':
            console.log(`Current balance: ${account.getBalance()}`);
            break;
        case 'Exit':
            console.log('Thank you for using MyBank Console App. Goodbye!');
            process.exit();
    }
});
