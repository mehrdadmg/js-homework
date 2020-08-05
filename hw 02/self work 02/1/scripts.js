/* 
Создать массив group, элементы которого будут объектами, содержащими данные каждого студента группы

Какие данные - на ваше усмотрение ( например, имя, фамилия, возраст, наличие ноутбука и т.д. )

var group = [
        {
                name: "...",
                lastName: "...",
                age: ...,
                notebook: false,
                ...
]
Создать функцию, которая итерирует массив group, выводя в консоль данные каждого студента одной строкой

( предварительно преобразовав объект в строку, не забудьте сивол-разделитель )

function getStudentsList ( arrayOfStudents ) {
        ...
}
Можно вернуть новый массив ( массив строк, а не объектов ) и вывести его в консоль
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

getStudentsList(group);
