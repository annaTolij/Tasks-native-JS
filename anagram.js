
//удаляет анаграммы, возвращая только один элемент из одинакого нбора символов

var arr = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", "8-()"];
var arr2 = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

function clean(arr) {
    obj = {};
    
    for (var i = 0; i < arr.length; i++) {
      var arrSortWord = arr[i]
        .toLowerCase()
        .split("")
        .sort()
        .join("");
      obj[arrSortWord] = arr[i];
    }  
   var result = [];
   for (var key in obj) result.push(obj[key]);
   return result; 
  }

  console.log(clean(arr));
  console.log(clean(arr2));