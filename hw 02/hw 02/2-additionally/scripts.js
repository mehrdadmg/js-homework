/* 
Additionally 1
Объявите функцию с одним формальным параметром, которая проверяет тип данных переданного аргумента и
если это число, возвращает текущую дату в формате "20.02.2019, 13:21:51"
в противном случае возвращает строку "Неверный тип данных"
Вызовите функцию
*/

const newData = new Date();
console.log(newData);

function isDate(n) {
  let dateStr;
  if (!(n instanceof Date)) {
    return "Неверный тип данных";
  } else {
    let dateTemp = newData.toLocaleDateString().split("/");
    let timeTemp = newData.toLocaleTimeString().slice(0, 7).split(":");

    dateStr =
      dateTemp[1] +
      "." +
      dateTemp[0] +
      "." +
      dateTemp[2] +
      "  " +
      timeTemp.join(":");
  }
  return dateStr;
}

console.log(isDate(new Date(2020, 0, 01)));
