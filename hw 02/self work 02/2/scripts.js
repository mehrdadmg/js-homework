/* 
Задание 2
Работа с предыдущим массивом group
Объявить функцию, которая добавляет нового студента в массив group
Формальные параметры - данные студента

function addNewStudent ( name, lastName, age, notebook ... ) {
    ...
}

Вызвать функцию addNewStudent, передав ей фактические данные нового студента
После этого вызвать предыдущую функцию ( getStudentsList ), чтобы убедиться, что студент добавлен в группу
*/
let group = [
  {
    name: "name1",
    lastName: "lastname1",
    age: 21,
    notebook: false,
  },
  {
    name: "name2",
    lastName: "lastname2",
    age: 22,
    notebook: true,
  },
  {
    name: "name3",
    lastName: "lastname3",
    age: 23,
    notebook: false,
  },
];

function getStudentsList(arrayOfStudents) {
  for (i = 0; i < arrayOfStudents.length; i++) {
    console.log(
      `Name: ${arrayOfStudents[i].name}, Lastname: ${arrayOfStudents[i].lastName}, Age: ${arrayOfStudents[i].age}, Notebook: ${arrayOfStudents[i].notebook}.`
    );
  }
}

function addNewStudent(newSName, newSLastName, newSAge, newSNotebook) {
  group.push({
    name: newSName,
    lastName: newSLastName,
    age: newSAge,
    notebook: newSNotebook,
  });
}

getStudentsList(group);
addNewStudent("newSName", "newSLastName", 26, true);
console.log(group.length);
getStudentsList(group);
