class CheckingAccount {
  constructor(initialBalance) {
    if (initialBalance < 0) {
      throw new Error("Initial balance cannot be negative");
    }
    this._balance = initialBalance || 0;
  }
  get balance() {
    return this._balance;
  }
  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Amount must be positive");
    }
    this._balance += amount;
  }
  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Amount must be positive");
    }
    if (amount > this._balance) {
      throw new Error("Insufficient funds");
    }
    this._balance -= amount;
  }
}
