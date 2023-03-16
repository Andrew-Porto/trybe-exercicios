// let nomes = ["Lucas", "Cassiano", "Ferraz", "Paolillo"];
// let rocket = ['foguete', 'não', 'tem', 'ré'];
// let waltWhitman = ['captain', 'my', 'captain']

// function concatName(first, last) {
//   if (nomes = nomes ) {
//     first = nomes.shift()
//     last = nomes.pop()
//     nomes = last + ', ' + first
//     return nomes
//   }
//     if (waltWhitman = waltWhitman ) {
//       first = waltWhitman.shift()
//       last = waltWhitman.pop()
//       waltWhitman = last + ', ' + first
//       return waltWhitman
//     }
//       if (rocket = rocket ) {
//         first = rocket.shift()
//         last = rocket.pop()
//         rocket = last + ', ' + first
//         return rocket
//       }

// }

// console.log(concatName(nomes, nomes));
// console.log(concatName(waltWhitman, waltWhitman));
// console.log(concatName(rocket, rocket));
// console.log(concatName(waltWhitman.shift(), waltWhitman.pop()));
// console.log(concatName(rocket.shift(), rocket.pop()));













let nomes = concatName(["Lucas", "Cassiano", "Ferraz", "Paolillo"]);
let rocket = concatName(["foguete", "não", "tem", "ré"]);
let waltWhitman = concatName(["captain", "my", "captain"]);

function concatName (first, second, third ) {
  
  first = nomes.indexOf('Cassiano', 'Ferraz');
  nomes.splice(first, 2);
  nomes.push(nomes.splice(0, 1)[0]);
  nomes = sentence.nomes.join(', ');

  second = rocket.indexOf('não', 'tem')
  rocket.splice(second, 2);
  rocket.push(sentence.rocket.splice(0, 1)[0]);
  rocket = sentence.rocket.join(', ');

  third = waltWhitman.indexOf('my')
  waltWhitman.splice(third, 2);
  waltWhitman.push(sentence.waltWhitman.splice(1, 0));
  waltWhitman = sentence.waltWhitman.join(', captain');

  return concatName
}

console.log(concatName);



















































// function splitSentence(trybe, vqv, rocket) {
//     return trybe.split(' ', 3)
//     return vqv.split(" ", 3)
//     return rocket.split(' ')
//   }
//   console.log(splitSentence('go Trybe', 'vamo que vamo', 'foguete'));

//   const compareTrue = (val1, val2) => (val1 && val2 === true ? true : false);
