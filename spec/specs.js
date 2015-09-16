describe("Account", function() {
  it("creates a new account with the users name and initial deposit", function() {
    var testAccount = new Account("Mika", 100);
    expect(testAccount.name).to.equal("Mika");
    expect(testAccount.initialDeposit).to.equal(100);
  });
});
