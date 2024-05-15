function printNumbers(nr) {
  if(typeof nr !== 'number' || nr <= 0) {
  	return "The provided value must be a positive number";
  }
  let result = "";
  for(let i = 0; i <= nr; i++) {
    result += i + " ";
  }
  result = result.trim();
  return result;
}

console.log(printNumbers(8));
