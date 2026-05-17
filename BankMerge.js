function bankMerge(branchA,branchB){
    console.log("A new merged database:")
    const allCustomers = branchA.concat(branchB);
    allCustomers.forEach(item =>{
      console.log(item);
    });
  
    console.log("The new merged array as a single string");
    const mergedString =allCustomers.join(" - ")
    console.log(mergedString);
  
  }
  
  function flatData(messyData){
    console.log("A new single dimension array")
    const flat = messyData.flat();
    flat.forEach(item =>{
      console.log(item);
    });
  
    console.log("Sorted names alphabetically")
    const sortedFlat = [...flat].sort();
    sortedFlat.forEach(item =>{
      console.log(item);
    });
  
    console.log("Reversed names alphabetically")
    const reverseFlat = [...flat].reverse();
    reverseFlat.forEach(item =>{
      console.log(item);
    });
  
  }
  
  bankMerge(["Alice","Bob"],["Charlie","Diana"]);
  flatData([["Eve", "Frank"],["Grace"],["Hank", "Ivy"]]);
  
  console.log("New teller windows status:");
  const tellerWindows = new Array(5).fill("Closed");
  tellerWindows.forEach(window => {
    console.log(window);
  });
  