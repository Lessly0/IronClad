let balance=1000;
let transactionHistory=[];
function atmTransaction(transactionType,amount){
  if (transactionType == "Withdrawl"){
    if(amount <= 0){
      alert("Your amount is negative")
    }
    else if(amount <= balance){
      balance = balance - amount;
      alert(`New balance is $${balance}`);
      transactionHistory.push(`Withdrawl: $${amount}`);
      alert("Transaction History:\n" + transactionHistory.join("\n"));
    }
    else{
      alert("Insufficient funds. Your balance is $" + balance)
    }
  }
  else if(transactionType == "Deposit"){
      if(amount > 0){
        balance = balance + amount;
        alert(`New balance is $${balance}`);
        transactionHistory.push(`Deposit: $${amount}`);
        alert("Transaction History:\n" + transactionHistory.join("\n"));
      }
      else{
        alert("Your amount is negative")
      }
  }
  else{
    alert("Invalid transaction type")
  }
}
let transactionType = prompt("Enter transaction type: Withdrawl or Deposit");
let amount = Number(prompt("Enter amount:"));

atmTransaction(transactionType, amount);




