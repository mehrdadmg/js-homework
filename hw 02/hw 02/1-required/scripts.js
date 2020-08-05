/* 
required 1

Создайте пустой массив letters
Создайте строку из нескольких слов, например "Backend As A Service"
Напилите код, который разбивает эту строку на массив слов и пушит 
в массив letters первый символ каждого слова Выведите результат в консоль
Объедините все элементы массива letters в одну строку и выведите ее в консоль
*/

let letters = [];
const str = "Backend As A Service";

function createArr1Symbol(str) {
  let tempArr = str.split(" ");
  console.log(tempArr);
  tempArr.forEach((item) => letters.push(item.slice(0, 1)));
}
let createStr = (arr) => arr.join("");

createArr1Symbol(str);
let newStr = createStr(letters);

console.log(letters);
console.log(newStr);
