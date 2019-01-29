
// использование замыкания

function makeBuffer() { 

    let text = '';
      
    return function(value) {
        if (arguments.length == 0) {
        return text;
      }
        text += value; 
     }
    }
    
    var buffer = makeBuffer();
    
    buffer('Замыкания');
    buffer(' Использовать');
    buffer(' Нужно!');
    
    
    console.log( buffer() ); // Замыкания Использовать Нужно!