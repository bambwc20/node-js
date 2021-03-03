
/*
var plus = function(a, b){
  return a + b;
};

console.log(plus(5, 10));
console.log('계산완료!');
*/

var C = function(res) {
  console.log(res)
}

function slowfunc(a, b, callback){
  callback(a+b);
}

slowfunc(5, 10, C);

console.log('계산완료!');