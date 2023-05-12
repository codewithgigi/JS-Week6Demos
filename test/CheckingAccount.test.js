const expect = chai.expect;

describe("CheckingAccount", () => {
  describe("#constructor", () => {
    it("should set the initial balance", () => {
      const account = new CheckingAccount(100);
      expect(account.balance).to.equal(100);
    });

    it("should set the initial balance to 0 if no initial balance is provided", () => {
      const account = new CheckingAccount();
      expect(account.balance).to.equal(0);
    });

    it("should throw an error if the initial balance is negative", () => {
      expect(() => new CheckingAccount(-100)).to.throw(
        "Initial balance cannot be negative",
      );
    });
  });

  describe("#deposit", () => {
    it("should increase the balance by the deposit amount", () => {
      const account = new CheckingAccount(100);
      account.deposit(50);
      expect(account.balance).to.equal(150);
    });

    it("should throw an error if the deposit amount is not positive", () => {
      const account = new CheckingAccount(100);
      expect(() => account.deposit(0)).to.throw("Amount must be positive");
      expect(() => account.deposit(-50)).to.throw("Amount must be positive");
    });
  });

  describe("#withdraw", () => {
    it("should decrease the balance by the withdrawal amount", () => {
      const account = new CheckingAccount(100);
      account.withdraw(50);
      expect(account.balance).to.equal(50);
    });

    it("should throw an error if the withdrawal amount is not positive", () => {
      const account = new CheckingAccount(100);
      expect(() => account.withdraw(0)).to.throw("Amount must be positive");
      expect(() => account.withdraw(-50)).to.throw("Amount must be positive");
    });
  });

  it("should throw an error if there are insufficient funds for the withdrawal", () => {
    const account = new CheckingAccount(100);
    expect(() => account.withdraw(200)).to.throw("Insufficient funds");
  });
});
