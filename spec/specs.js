describe("Account", function() {
  it("creates a new account with the users name and initial deposit", function() {
    var testAccount = new Account("Mika", 100);
    expect(testAccount.name).to.equal("Mika");
    expect(testAccount.balance).to.equal(100);
  });
  
    it("adds a deposit method", function() {
    var testAccount = new Account("Mika", 100);
    testAccount.deposit(100);
    expect(testAccount.balance).to.equal(200);
  });
});
