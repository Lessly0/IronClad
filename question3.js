const fraudID = 5510;

function check(transactions){
  console.log("Checking if there is a fraudID in the array")
  const fraud = transactions.includes(fraudID);
  console.log(fraud);

  if(fraud == true){
    console.log("Checking the index of the fraudID");
    const indexFraud = transactions.indexOf(fraudID);
    console.log(indexFraud)
    if(indexFraud !== -1){
      transactions.splice(indexFraud,1)
    }
    console.log("After removing the fraudID")  
    transactions.forEach(item =>{
      console.log(`Transaction ${item} cleared.`)
    });
  }
  else{
    console.log("There is no fraudID")
  }

  console.log("The last 3 transactions of the day")
  const lastTransactions = transactions.slice(-3);
  lastTransactions.forEach(item =>{
    console.log(item);
  });
}

check([1042,8922,3301, 5510,7719,9920]);