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
		var newAccount = new Account(name, balance);
			var newName = newAccount.name;
			var newBalance = newAccount.balance;

		$(".account-holder").text("Welcome " + newName + " :: Your Balance is " + "$" + newBalance);
		$("#account-balance").show();
		event.preventDefault();
	});
});
