export class Account {
    private balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    deposit(amount: number) {
        this.balance += amount;
    }

    withdraw(amount: number) {
        if (amount <= this.balance) {
            this.balance -= amount;
            return true;
        }
        return false;  // Insufficient funds
    }

    getBalance() {
        return this.balance;
    }
}
