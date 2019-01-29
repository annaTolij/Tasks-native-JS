
// сортировать в порядке убывания

function compareNumeric(a, b) {
    // return b-a;
    if (a > b) return -1;
    if (a < b) return 1;
  }
  var arr = [5, 2, 1, -10, 8];
  arr.sort(compareNumeric);
  console.log( arr ); // 8, 5, 2, 1, -10