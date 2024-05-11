"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
class Transaction {
    date;
    amount;
    constructor(amount) {
        this.date = new Date();
        this.amount = amount;
    }
    getFormattedDate() {
        return this.date.toISOString();
    }
    getAmount() {
        return this.amount;
    }
}
exports.Transaction = Transaction;
