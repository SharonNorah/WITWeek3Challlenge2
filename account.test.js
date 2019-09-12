
const BankAccount = require('./account.js');
const client = new BankAccount('sharon', 0, 22850, 'active');
test('open account withname and account number', () => {
    expect(client.open('sharon', 22850)).toBe; "sharon, your account has been opened your account number is 22850"
});
test('name must be string and accountnumber must be an integer', () => {
    expect(client.open('sharon', 'aa23')).toBe; "name must be characters and accountNumber must be an integer"
});
test('newly open account has zero balance', () => {
    expect(client.getBalance()).toBe; '${this.name}, your balance is ${this.balance}'
});

test('can deposit money in active account', () => {
    expect(client.deposit(5000)).toBe; 'sharon, you have deposited 5000 and your new balance is ${this.balance'
});

test('can withdraw money from active account', () => {
    expect(client.withdraw(2000)).toBe; 'sharon, you have withdrawn 2000 and your new balance is 3000'
});

test('check if the account is still active', () => {
    expect(client.close()).toBe; "sharon, the account is active, carry out your transactions"
});
test('check if account is closed', () => {
    expect(client.close()).toBe; 'this account is closed, you cant carry out transactions'
});


client1 = new BankAccount('norah', 0, 22440, 'inactive');
test('can deposit money in closed account', () => {
    expect(client.deposit(5000)).toBe; "this account is inactive"
});
test('can withdraw money from a closed account', () => {
    expect(client.withdraw(2000)).toBe; "you either have insufficient funds or the account is closed"
});


