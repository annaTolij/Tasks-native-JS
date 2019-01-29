
// Используйте функцию sort для того, чтобы «перетрясти» элементы массива в случайном порядке.

var arr = [1, 2, 3, 4, 5, 6, 7];
function shuffle(a, b){

  // if( Math.random() > 0.5){
  //   return 1
  // }else{
  //   return -1
  // }

  // или

  return (Math.random() - 0.5)
}
arr.sort(shuffle)
console.log( arr ); // элементы в случайном порядке, например [3,5,1,2,4]