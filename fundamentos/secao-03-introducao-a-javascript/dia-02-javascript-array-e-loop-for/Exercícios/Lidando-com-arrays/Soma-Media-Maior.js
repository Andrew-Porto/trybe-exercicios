let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;
let maior = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
  soma = soma + numbers[index];
  media = soma / numbers.length;
  if (numbers[index] > maior) {
    maior = numbers[index];
  }
}
console.log("Maior número: " + maior);
console.log("Média aritmética do valores: " + media.toFixed(2));

if (media > 20) {
  console.log("Valor da média maior que 20");
} else {
  console.log("Valor menor ou igual a 20");
}
console.log("Soma de todos os números: " + soma);
