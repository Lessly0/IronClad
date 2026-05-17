function validateBankPassword(password){
    const lowerPassword = password.toLowerCase();
    const lengthcheck = password.length >=8;
    const noPasswordWord = !lowerPassword.includes("password");
    const hasVowel = /[aeiou]/.test(lowerPassword);
  
     if (lengthcheck && noPasswordWord && hasVowel) {
      return "Access Granted";
    } else {
      return "Access Denied";
    }
  }
  
  console.log(validateBankPassword("Hello123"));
  
  function generateYearlyReport(startYear, endYear) {
    for (let year = startYear; year <= endYear; year++) {
      const isLeapYear =
        (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  
      if (isLeapYear) {
        console.log(`Year ${year} is a special audit year.`);
      }
  
      if (year % 10 === 0) {
        console.log(`${year} - Decade Anniversary`);
      }
  
      else if (year % 5 === 0) {
        console.log(`${year} - 5 Year Anniversary`);
      }
    }
  }
  
  generateYearlyReport(2000, 2020);