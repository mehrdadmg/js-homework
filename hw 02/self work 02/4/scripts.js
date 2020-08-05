/* 
Задание 4
Написать функцию сортировки массива
Не использовать метод sort ()
Использовать оператор цикла while
Использовать методы работы с массивами и строками
*/

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr = [3, 6, 4, 2, 8, 9, 4, 2, 35, 74, 21, 69, 32, 58, 1];

let n = true;
let cFor = 0;
let dIf = 0;
let eWhile = 0;

console.log(arr);

do {
  let a;
  n = true;
  eWhile++;
  for (i = 0; i < arr.length - 1; i++) {
    cFor++;
    if (arr[i] > arr[i + 1]) {
      dIf++;
      a = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = a;
      n = false;
    }
  }
} while (n == false);

console.log(arr);
console.log("eWhile: ", eWhile);
console.log("cFor: ", cFor);
console.log("dIf: ", dIf);
