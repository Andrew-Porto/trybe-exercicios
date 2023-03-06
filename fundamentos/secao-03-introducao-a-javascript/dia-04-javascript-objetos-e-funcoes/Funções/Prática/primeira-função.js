let saldo = 1500;

function somaSaldo(valor) {
    return valor + saldo;
};

function subtraiSaldo(valor) {
    return saldo - valor;
};

function multiplicaSaldo(valor) {
    return valor * saldo;
};

function divideSaldo(valor) {
    return saldo / valor;
};

console.log(somaSaldo(250));
console.log(subtraiSaldo(175));
console.log(multiplicaSaldo(2));
console.log(divideSaldo(2));