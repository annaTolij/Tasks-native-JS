
// создает новый массив из соследовательной суммы заданного массива

function getSums(arr) {

    var newArr = [];
  var result = arr.reduce(function(sum, current, i) {
    return newArr[i] = sum + current;
  }, 0);
    return newArr;
    
  }
  
  console.log( getSums([-2,-3,-3,2]) ); //[-2, -5, -8, -6]