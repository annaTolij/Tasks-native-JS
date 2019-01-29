
var list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  
  // 1. Напишите функцию printList(list), которая выводит элементы списка по очереди, при помощи цикла.
  function cyclePrintList(objcycle) {
    while (true) {
      if (objcycle.next == null) {
        console.log(objcycle.value);
        break;
      } else {
        console.log(objcycle.value);
        objcycle = objcycle.next;
      }
    }
  }
  cyclePrintList(list);
  
  // 2. Напишите функцию printList(list) при помощи рекурсии.
  
  function recursionPrintList(objrec) {
    console.log(objrec.value);
   if(objrec.next){
     recursionPrintList(objrec.next);
   }
  }
  recursionPrintList(list);
  
  // 3. Напишите функцию printReverseList(list), которая выводит элементы списка в обратном порядке, при помощи рекурсии. Для списка выше она должна выводить 4,3,2,1
  
  function RecRevPrintList(objrecrev) {
    if(objrecrev.next){
     RecRevPrintList(objrecrev.next);
   }
    console.log(objrecrev.value);
  }
  RecRevPrintList(list);
  
  // 4. Сделайте вариант printReverseList(list), использующий не рекурсию, а цикл.
  
  function printReverseList(obj) {
  
  }
  printReverseList(list);  