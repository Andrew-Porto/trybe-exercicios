let courrentHour = 4;
let message = '';

if (courrentHour >= 22) {
    message = 'Não deveríamos comer nada, é hora de dormir'
}

if (courrentHour >= 18 && courrentHour < 22) {
    message = 'Rango da noite, vamos jantar :D'
}

if (courrentHour >= 14 && courrentHour < 18) {
    message = 'Vamos fazer um bolo pro café da tarde?'
}

if (courrentHour >= 11 && courrentHour < 14) {
    message = 'Hora do almoço!!!'
}

if (courrentHour >= 4 && courrentHour <= 10) {
    message = 'Hmmm, cheiro de café recém-passado'
}

console.log(message);
