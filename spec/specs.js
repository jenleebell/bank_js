describe("Account", function() {
  it("creates a new account with the users name and initial deposit", function() {
    var testAccount = new Account("Mika", 100);
    expect(testAccount.name).to.equal("Mika");
    expect(testAccount.balance).to.equal(100);
  });
    it("adds a withdraw method", function() {
    var testAccount = new Account("Mika", 100);
    testAccount.withdraw(50);
    expect(testAccount.balance).to.equal(150);
  });
});
