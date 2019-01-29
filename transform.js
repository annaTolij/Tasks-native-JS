
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть, дефисы удаляются, а все слова после них получают заглавную букву.

function camelize(str) {
    // console.log(str);
    var arr = str.split("-");
    // console.log(arr);
  
    for (var i = 1; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      // console.log(arr);
    }
    return arr.join("");
  }
  
  console.log(camelize("b-ack-gro-und-col-or-"));
  