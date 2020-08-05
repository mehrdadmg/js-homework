/* 
Задание 3
Объявить функцию, которая получает в качестве аргумента строку 
и удаляет из нее символы, код которых больше 1103 или меньше 1040
Функция должна вернуть новую строку
Применить эту функцию к строке:

"Вчbvnера 789 был home work наiuyстоtящий + празrorднgfdик" 
*/

let myStr = "Вчbvnера 789 был home work наiuyстоtящий + празrorднgfdик";

function filterStr(str) {
  let tempArr = str.split("");

  tempArr.forEach((item, i) => {
    if (item.charCodeAt(0) > 1103 || item.charCodeAt(0) < 1040) {
      tempArr.splice(i, 1);
    }
  });
  return tempArr.join("");
}

let newStr = filterStr(myStr);

console.log(newStr);
