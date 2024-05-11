export class Transaction {
    private readonly date: Date;
    private readonly amount: number;

    constructor(amount: number) {
        this.date = new Date();
        this.amount = amount;
    }

    getFormattedDate(): string {
        return this.date.toISOString();
    }

    getAmount(): number {
        return this.amount;
    }
}
