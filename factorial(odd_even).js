
//"факториал" четных или нечетных чисел, в зависимости от четности N

var N = 7;
var lastNumber;
var result = 1;
lastNumber = N % 2 === 0 ? 2 : 1;
for (var i = lastNumber; i <= N; i += 2) {
  result *= i;
}
console.log(result);