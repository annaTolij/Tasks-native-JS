
//удаляет из массивва повторяющиеся элементы

var arr = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", "8-()"];

  function clean(arr) {
    obj = {};
    
     for (var i = 0; i < arr.length; i++) {
        var str = arr[i];
        obj[str] = true;
     }
    // console.log(obj);
    return Object.keys(obj);
  }

console.log(clean(arr));