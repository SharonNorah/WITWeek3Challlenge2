class BankAccount {
  constructor(name, accountNumber, initialDeposit, accountStatus) {
    this.name = name;
    this.initialDeposit = initialDeposit;
    this.accountStatus = accountStatus;
    this.accountNumber = accountNumber;
  }

  getBalance() {
    if (
      this.accountStatus === "active" &&
      (this.balance = this.initialDeposit)
    ) {
      // this.balance += initialDeposit;
      return `${this.name}, your balance is ${this.balance}`;
    }
    return `this account is inactive`;
  }

  open(name, accountNumber, initialDeposit) {
    if (typeof this.name === "string" && Number.isInteger(accountNumber)) {
      return `${this.name}, your account has been opened with account number: ${this.accountNumber}, initialDeposit: ${this.initialDeposit}`;
    }
    return "name must be characters and accountNumber must be an integer";
  }
  deposit(amount) {
    if (this.balance >= 0 && this.accountStatus === "active") {
      this.balance += amount;
      return `${this.name}, you have deposited ${amount} and your new balance is ${this.balance}`;
    }
    return "this account is inactive";
  }
  withdraw(amount) {
    this.balance -= amount;
    if (this.balance - amount >= 0 && this.accountStatus === "active") {
      return `${this.name}, you have withdrawn ${amount} and your new balance is ${this.balance}`;
    }
    return "you have insufficient funds";
  }
  //set the accountsatus to inactive
  close() {
    this.accountStatus === "inactive";
    return "this account is closed, you cant carry out transactions";
  }
}
module.exports = BankAccount;
let client = new BankAccount("sharon", 22850, 5000, "active");
//console.log(client.open("sharon", 22850, 5000));
//console.log(client.getBalance(5000));
//console.log(client.deposit(5000));
//console.log(client.withdraw(2000));
console.log(client.close());

//client = new BankAccount('norah', 0, 22440, 'inactive');
