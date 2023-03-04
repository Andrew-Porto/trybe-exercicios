let bruto = 2594.92;
let inss;
let iR;
let liquido;

if (bruto <= 1556.94) {
  liquido = (bruto * 8) / 100;
  console.log(liquido.toFixed(2));
} else if (bruto <= 2594.92 && bruto > 1556.95) {
  inss = (bruto * 9) / 100;
  console.log(bruto.toFixed(2));
} else if (bruto <= 5189.82 && bruto > 2594.93) {
    inss = (bruto * 11) / 100;
    iR = inss

} else if (bruto > 5189.82) {
    inss = (bruto - 570.88);
}

else {
console.log(inss.toFixed(2));
}

if (bruto = bruto - inss) {
    
    if ((bruto >= 1903.99 && inss < 2826.65)) {
    iR = (bruto * 7.5) / 100;
    console.log(iR.toFixed(2));
    }

}

//if (liquido = bruto - iR) 