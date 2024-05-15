function random(max) {
  return Math.floor(Math.random() * max);
}

let array = [];
for(let i = 0; i < 20; i++) {
  array.push(random(20));
}
//console.log(array);

array.sort((a,b) => a - b);
//console.log(array);

let sum = 0;
/*1*/ array.forEach(el => sum += el);
/*2*/ let sum2 = array.reduce((acc,el) => acc += el);
console.log(sum);

console.log(sum/array.length);
