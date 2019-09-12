class BankAccount {
    constructor(name, balance, accountNumber, accountStatus) {
        this.name = name;
        this.balance = 0;
        this.accountStatus = accountStatus;
        this.accountNumber = accountNumber;
    }

    getBalance(amount) {
        if (this.accountStatus === 'active' && (this.balance = 0)) {
            this.balance += amount;
            return `${this.name}, your balance is ${this.balance}`
        }
        return `this account is inactive`;
    }

    open(name, accountNumber) {
        if (typeof this.name === 'string' && (Number.isInteger(accountNumber))) {
            return `${this.name}, your account has been opened your account number is ${this.accountNumber}`;
        }
        return "name must be characters and accountNumber must be an integer";
    }
    deposit(amount) {
        if (this.balance >= 0 && this.accountStatus === 'active') {
            this.balance += amount;
            return (`${this.name}, you have deposited ${amount} and your new balance is ${this.balance}`);
        }
        return "this account is inactive";
    }
    withdraw(amount) {
        this.balance -= amount;
        if (this.balance - amount >= 0 && this.accountStatus === 'active') {
            return (`${this.name}, you have withdrawn ${amount} and your new balance is ${this.balance}`);
        }
        return "you either have insufficient funds or the account is closed";
    }
    close(accountStatus) {
        if (this.accountStatus === 'inactive') {
            return "this account is closed, you cant carry out transactions";
        }
        return `${this.name}, the account is active, carry out your transactions`;
    }
}
module.exports = BankAccount;
let client = new BankAccount('sharon', 0, 22850, 'active');
console.log(client.open('sharon', 22850));
console.log(client.getBalance(0));
console.log(client.deposit(5000));
console.log(client.withdraw(2000));
console.log(client.close());

client = new BankAccount('norah', 0, 22440, 'inactive');
console.log(client.open('norah', 22440));
console.log(client.getBalance(0));
console.log(client.deposit(5000));
console.log(client.withdraw(2000));
console.log(client.close());
