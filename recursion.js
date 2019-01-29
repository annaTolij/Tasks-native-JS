
// рекурсия
// вычислить функцию f

function f(x, y){
    if(x === y || x < 0 || y < 0){
      return x;
    }else if(x > y){
     return f(x - 1, y) +  f(Math.floor(x/2), y);
    }else{
      return f(x, y - 1) + f(x, Math.floor(y / 2) ) ;
    }
  }
  console.log( f(7, 10) );