let array = ["java", "javascript", "python", "html", "css"];
let maior = array[0];
let menor = array[0];

for (let index = 1; index < array.length; index += 1) {
  if (array[index].length > maior.length) {
    maior = array[index];
  }
  if (array[index].length < menor.length) {
    menor = array[index];
  }
}

console.log("Maior string: " + maior);
console.log("Menor string: " + menor);
