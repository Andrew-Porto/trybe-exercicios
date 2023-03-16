// let customer = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };
  
//   let newKey = 'lastName';
//   let lastName = 'Ferreira';
  
//   function addProperty(object, key, value) {
//     object[key] = value;
//   };
  
//   addProperty(customer, newKey, lastName);
//   console.log(customer);


student = {}

let key = 'Name';
let names = 'Andrew'; 

function addProperty(object, key, value){
    student[key] = value;
};
addProperty(student, key, names);
console.log(student);

newKey = 'E-mail';
endress = 'intheand@outlook.com'

let eMail = student.newKey + ': ' + student.endress

addProperty(student, newKey, endress);
console.log(student);