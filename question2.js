function processLoans(scores) {
    const eligible = scores.filter(score => score > 700);
    console.log("The filtered scores");
    eligible.forEach(score => {
      console.log(score);
    });
  
    const adjustedScores = scores.map(score => score + 20);
    console.log("The mapped scores");
    adjustedScores.forEach(score =>{
      console.log(score);
    });
  
    console.log("The total sum of all the original credit scores");
    const totalRisk = scores.reduce((total, score) => total + score, 0);
    console.log(totalRisk);
  
    console.log("Returns true if atleast one applicant has a score of 900")
    const hasPerfectScore = scores.some(score => score === 900);console.log(hasPerfectScore);
  
    console.log("Returns true if all applicants have a score of 400")
    const haveMinimumScore = scores.every(score => score >= 400);
    console.log(haveMinimumScore);
  
    console.log("The first score that is below 500");
    const firstScore = scores.find(score => score < 500);
    console.log(firstScore);
  
    console.log("The index of the first score below 500");
    const firstIndex = scores.findIndex(score => score < 500);
    console.log(firstIndex);
  
  }
  
  processLoans([650, 800, 500, 720, 410, 900]);
  
  