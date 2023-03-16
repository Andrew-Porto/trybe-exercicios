let nomes = ["Lucas", "Cassiano", "Ferraz", "Paolillo"];
let rocket = ["foguete", "não", "tem", "ré"];
let waltWhitman = ["captain", "my", "captain"];

function concatName(first, second, third) {
  first = nomes.indexOf("Cassiano", "Ferraz");
  second = rocket.indexOf("não", "tem");
  third = waltWhitman.indexOf("my",);

  if (first > -1) {
    nomes.splice(first, 2);
    nomes.push(nomes.splice(0, 1)[0]);
    nomes = nomes.join(", ");
    return nomes
  }
  if (second > -1) {
    rocket.splice(second, 2);
    rocket.push(rocket.splice(0, 1)[0]);
    rocket = rocket.join(", ");

  }
  if (third > -1) {
    waltWhitman.splice(third, 2);
    waltWhitman.push(waltWhitman.splice(1, 0));
    waltWhitman = waltWhitman.join(", captain ");

  }
}
console.log(concatName(nomes, rocket, waltWhitman));
