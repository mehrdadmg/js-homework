/* 
Задание 5
Есть два массива, в первом - имена, во втором - фамилии
Нужно создать массив, элементы которого будут содержать имя и фамилию одной строкой

names [ i ] ="Сергей", 
lastNames [ i ] = "Коломенцев"

Результат:
newArray [ i ] = "Сергей Коломенцев"
*/

const arrName = ["name1", "name2", "name3", "name4", "name5"];
const arrLastName = [
  "lastname1",
  "lastname2",
  "lastname3",
  "lastname4",
  "lastname5",
];
let arrNameAndLastname = [];

for (i = 0; i < arrName.length; i++) {
  arrNameAndLastname[i] = arrName[i] + " " + arrLastName[i];
}

console.log(arrName);
console.log(arrLastName);
console.log(arrNameAndLastname);
