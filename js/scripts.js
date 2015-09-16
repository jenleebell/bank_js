function Account (name, balance) {
  this.name = name;
  this.balance = balance;
}

Account.prototype.deposit = function(amount) {
	return this.balance += amount;
};

Account.prototype.withdraw = function(amount) {
	return this.balance -= amount;
};

$(document).ready(function() {
	$("form#create-account").submit(function(event){
		var name = $("input#name").val();
		var balance = $("input#balance").val();
		var userAccount = new Account(name, balance);
			var newName = userAccount.name;
			var newBalance = userAccount.balance;

		$(".account-holder").text("Welcome " + newName + " :: Your Balance is " + "$" + newBalance);
		$("#account-balance").show();
		event.preventDefault();

	$("form#make-deposit").submit(function(event){
		var newDeposit = $("input#deposit").val();
		var newAddedBalance = userAccount.deposit(newDeposit);

		$(".account-holder").text("Welcome " + newName + " :: Your Balance is " + "$" + newAddedBalance);
		$("#account-balance").show();
		event.preventDefault();
		});
	});
});
