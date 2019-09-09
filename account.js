class BankAccount {
    constructor(name, initialDeposit) {
        // your code here
        this.name = name;
        this.balance = initialDeposit;
        this.history = [];
    }

    getBalance(initialDeposit) {
        // your code here
        if (this.balance < 0) {
            return false;
        } else {
            console.log(`${this.name} your balance is ${this.balance}`);
        }

    }

    /* open(name, amount) {
         // your code here
         do {
 
         }*/

    deposit(amount) {
        // your code here
        if (amount < 0) {
            return false;
            console.log('Amount must be positive!');
        } else {
            this.balance += amount;
            this.history.push(amount);
            return (`Deposit: ${this.name} your new balance is ${this.balance}`);
        }

    }

    withdraw(amount) {
        // your code here
        if (this.balance - amount >= 0) {
            this.balance -= amount;
            return (`${this.name} you have withdrawn ${amount} andyour new balance is ${this.balance}`);
        }
        return false;
    }


}

/*close(name, initialDeposit) {


}*/


const client = new BankAccount('sharon', 5000);
console.log(client.getBalance());
console.log(client.deposit());
console.log(client.withdraw());
//console.log(client.open());
//console.log(client.close());