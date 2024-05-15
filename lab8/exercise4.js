function generateRandom(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

function generateNumbers(min, max) {
  let generatedNumbers = [];
  for(let i = 0; i < 10; i++) {
    generatedNumbers.push(generateRandom(min,max));
  }
  console.log(generatedNumbers);
  generatedNumbers = generatedNumbers.filter((x) => x > 10);
  console.log(generatedNumbers);
  if(generatedNumbers.length >= 5) {
    console.log("Udało się!");
  }
  else {
    console.log("Nie udało się.");
  }
}

generateNumbers(1,20);
