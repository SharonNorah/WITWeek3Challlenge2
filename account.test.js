// tests here
const BankAccount = require('./account.js');
let x = new BankAccount('sharon', 5000)


/*
test('open account with name and an amount of 5000', () => {
    expect(new BankAccount('sharon',5000)).toequal({"balance": 5000, "name":'sharon'} );
});
*/

test('getBalance', () => {
    expect(x.getBalance()).toBe(5000);
});



test('deposit balance += amount on the account', () => {
    expect(x.deposit(2000)).toBe(7000);
});


test('withdraw balance -= amount on the account', () => {
    expect(new BankAccount('withdraw')).toequal(amount);
});



/*
test('close  the account', () => {
    expect (BankAccount('close')).toBe();
});
*/