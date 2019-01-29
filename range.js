
// Создайте функцию filterRangeInPlace(arr, a, b), которая получает массив с числами arr 
// и удаляет из него все числа вне диапазона a..b. То есть, проверка имеет вид a ≤ arr[i] ≤ b. 
// Функция должна менять сам массив и ничего не возвращать.


function filterRangeInPlace(arr, a, b) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] < a || arr[i] > b) {
        arr.splice(i--, 1);
      }
    }
  }
  arr = [5, 3, 8, 1, 2, 0, -1, 4, 15, 5, 4, 2, 3, 5, 1];
  filterRangeInPlace(arr, 1, 2);
  console.log(arr);