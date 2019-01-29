
// Есть массив строк arr. Создайте массив arrSorted – из тех же элементов, но отсортированный.
// Исходный массив не должен меняться.
// var arr = ["HTML", "JavaScript", "CSS"];

var arr = ["HTML", "JavaScript", "CSS"];

//   var arrSorted = arr.slice();
// arr.sort(function(a, b) {
//   if (a < b) {
//     return -1;
//   } else {
//     return 1;
//   }
// });

var arrSorted = arr.slice().sort();
console.log( arrSorted ); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (без изменений)