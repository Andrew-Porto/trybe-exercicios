let primeiro = 7;
let segundo = 7;
let terceiro = 8;
let maior;
let maiorTodos;

if (primeiro > segundo && primeiro > terceiro) {
    maior = primeiro
    console.log(maior);
}
else if (segundo > primeiro && segundo > terceiro) {
    maior = segundo
    console.log(maior);
}
else if (terceiro > primeiro && terceiro > segundo) {
    maior = terceiro
    console.log(maior);
}

else {
    console.log('Os números são todos iguais!');
}


