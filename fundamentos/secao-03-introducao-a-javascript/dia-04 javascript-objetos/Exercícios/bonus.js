let lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

let lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

let lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

let allLessons = {};
Object.assign(allLessons, lesson1, lesson2, lesson3);
console.log(allLessons);

// function addProperty(object, key, value) {
//   object[key] = value;
// }

// addProperty(lesson2, "turno", "noite");

// console.log(lesson2);

// let keys = "";

// function listObject(objects) {
//   console.log(Object.keys(objects));
// }
// listObject(lesson1);

// function sizeObject (obj) {
//   console.log('O tamanho do objeto é: ' + Object.keys(obj).length);
// }
// sizeObject(lesson3)

// function valueObj (values) {
//   console.log(Object.values(values));
// }
// valueObj(lesson1)


