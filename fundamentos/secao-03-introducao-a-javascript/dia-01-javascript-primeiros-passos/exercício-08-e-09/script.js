//Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.

// let primeiro = 9;
// let segundo = 20;
// let terceiro = 120;
// if (primeiro || segundo || terceiro % 2 === 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, o código deve retornar false.

let primeiro = 2;
let segundo = 2;
let terceiro = 2;
let odd = false;
if (primeiro % 2 !== 0 || segundo % 2 !== 0 || terceiro % 2 !== 0) {
  odd = true;
};
console.log(odd);
