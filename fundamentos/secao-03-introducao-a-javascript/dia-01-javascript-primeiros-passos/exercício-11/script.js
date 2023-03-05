let bruto = 0;
let inss;
let iR;
let liquido;
console.log("Salário Bruto");
console.log(bruto);

//cálculo do valor de desconto inss

if (bruto <= 1556.94 && bruto > 0) {
  inss = (bruto * 8) / 100;
  console.log("Valor de desconto inss");
  console.log(inss.toFixed(2));
} else if (bruto <= 2594.92 && bruto > 1556.95) {
  inss = (bruto * 9) / 100;
  console.log("Valor de desconto inss");
  console.log(inss.toFixed(2));
} else if (bruto <= 5189.82 && bruto > 2594.93) {
  inss = (bruto * 11) / 100;
  console.log("Valor de desconto inss");
  console.log(inss.toFixed(2));
} else if (bruto > 5189.82) {
  inss = bruto - 570.88;
  console.log("Valor de desconto inss");
  console.log(inss.toFixed(2));
} else {
  console.log("Error 404: Valor inválido!");
  
}

//cálculo do valor de desconto IR
if ((bruto = bruto - inss && bruto > 0)) {
  if (bruto >= 1903.99 && inss < 2826.65) {
    iR = (bruto * 7.5) / 100;
    console.log("Valor de desconto IR");
    console.log(iR.toFixed(2));
  } else if (bruto > 1556.95 && bruto < 2594.92) {
    console.log("Valor de salário a ser recebido");
  } else if (bruto >= 2826.66 && inss < 3751.05) {
    iR = (bruto * 15) / 100;
    console.log("Valor de desconto IR");
    console.log(iR.toFixed(2));
  } else if (bruto >= 3751.06 && inss < 4664.68) {
    iR = (bruto * 22.5) / 100;
    console.log("Valor de desconto IR");
    console.log(iR.toFixed(2));
  } else if (bruto >= 4664.68) {
    iR = (bruto * 27.5) / 100;
    console.log("Valor de desconto IR");
    console.log(iR.toFixed(2));
  }
} else {
  console.log("Abaixo do valor minimo para desconto do imposto de renda!");
}

//cálculo do valor liquido
if ((liquido = bruto - iR)) {
  console.log("Valor de salário a ser recebido");
  console.log(liquido.toFixed(2));
}
