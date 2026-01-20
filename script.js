class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      this.transactions.push({ type: "deposit", amount: amount });
      return `Successfully deposited $${amount}. New balance: $${this.balance}`;
    }
    return "Deposit amount must be greater than zero.";
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      this.transactions.push({ type: "withdraw", amount: amount });
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
    }
    return "Insufficient balance or invalid amount.";
  }

  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    const deps = this.transactions
      .filter(t => t.type === "deposit")
      .map(t => t.amount);
    return `Deposits: ${deps.join(",")}`;
  }

  listAllWithdrawals() {
    const wds = this.transactions
      .filter(t => t.type === "withdraw")
      .map(t => t.amount);
    return `Withdrawals: ${wds.join(",")}`;
  }
}
const myAccount = new BankAccount();
myAccount.deposit(200);
myAccount.deposit(150);
myAccount.withdraw(50);
myAccount.deposit(100);
myAccount.withdraw(75);
