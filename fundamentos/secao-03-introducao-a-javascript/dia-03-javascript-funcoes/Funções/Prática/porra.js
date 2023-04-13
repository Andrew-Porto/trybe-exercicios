// let nomes = ["Lucas", "Cassiano", "Ferraz", "Paolillo"];
// let rocket = ["foguete", "não", "tem", "ré"];
// let waltWhitman = ["captain", "my", "captain"];

// function concatName(first, second, third) {
//   let names = nomes.indexOf("Cassiano", "Ferraz");
//   let rockets = rocket.indexOf("não", "tem");
//   let waltWhitmans = waltWhitman.indexOf("my");

//   if (names > -1) {
//     nomes.splice(names, 2);
//     nomes.push(nomes.splice(0, 1)[0]);
//     nomes = nomes.join(", ");
//   }
//   if (rockets > -1) {
//     rocket.splice(rockets, 2);
//     rocket.push(rocket.splice(0, 1)[0]);
//     rocket = rocket.join(", ");
//   }
//   if (waltWhitmans > -1) {
//     waltWhitman.splice(waltWhitmans, 2);
//     waltWhitman.push(waltWhitman.splice(1, 0));
//     waltWhitman = waltWhitman.join(", captain ");
//   }
//   return nomes;
// }
// console.log(concatName(nomes, rocket, waltWhitman));







// let nomes = ["Lucas", "Cassiano", "Ferraz", "Paolillo"];
// let rocket = ["foguete", "não", "tem", "ré"];
// let waltWhitman = ["captain", "my", "captain"];

// function concatName(nomes, rocket, waltWhitman) {
//   let names = nomes.indexOf("Cassiano");
//   let ferraz = nomes.indexOf("Ferraz");
//   let rockets = rocket.indexOf("não");
//   let tem = rocket.indexOf("tem");
//   let waltWhitmans = waltWhitman.indexOf("my");

//   if (names > -1 && ferraz > -1) {
//     nomes.splice(names, 1);
//     nomes.splice(ferraz - 1, 1);
//     nomes.push(nomes.splice(0, 1)[0]);
//     nomes = nomes.join(", ");
//   }
//   if (rockets > -1 && tem > -1) {
//     rocket.splice(rockets, 1);
//     rocket.splice(tem - 1, 1);
//     rocket.push(rocket.splice(0, 1)[0]);
//     rocket = rocket.join(", ");
//   }
//   if (waltWhitmans > -1) {
//     waltWhitman.splice(waltWhitmans, 1);
//     waltWhitman = waltWhitman.join(", ");
//   }
//   return nomes, rocket, waltWhitman;
// }
// console.log(concatName(nomes, rocket, waltWhitman));


function concatName(second) {
  // return second[second.length-1] + ", " + second[0];
  return `${second[second.length - 1]}, ${second[0]}`;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));


// function splitSentence(trybe) {
//   return trybe.split(' ', 3);

// }
// console.log(splitSentence('go Trybe'));
// console.log(splitSentence('vamo que vamo'));
// console.log(splitSentence('foguete'));
