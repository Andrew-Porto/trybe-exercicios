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













// let nomes = concatName(["Lucas", "Cassiano", "Ferraz", "Paolillo"]);
// let rocket = concatName(["foguete", "não", "tem", "ré"]);
// let waltWhitman = concatName(["captain", "my", "captain"]);

// function concatName (first, second, third ) {
  
//   first = nomes.indexOf('Cassiano', 'Ferraz');
//   nomes.splice(first, 2);
//   nomes.push(nomes.splice(0, 1)[0]);
//   nomes = sentence.nomes.join(', ');

//   second = rocket.indexOf('não', 'tem')
//   rocket.splice(second, 2);
//   rocket.push(sentence.rocket.splice(0, 1)[0]);
//   rocket = sentence.rocket.join(', ');

//   third = waltWhitman.indexOf('my')
//   waltWhitman.splice(third, 2);
//   waltWhitman.push(sentence.waltWhitman.splice(1, 0));
//   waltWhitman = sentence.waltWhitman.join(', captain');

//   return concatName
// }

// console.log(concatName);

// let sentence = {
//   nomes: ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'],
//   rocket: ['foguete', 'não', 'tem', 'ré'],
//   waltWhitman: ['captain', 'my', 'captain'],
// };

// function concatName(first, second, third) {
//   first = sentence.nomes.indexOf('Cassiano', 'Ferraz');
//   second = sentence.rocket.indexOf('não', 'tem');
//   third = sentence.waltWhitman.indexOf('my');
//   for (const key in sentence) {
//     if (first > -1) {
//     sentence.nomes.splice(first, 2);
//     sentence.nomes.push(sentence.nomes.splice(0, 1)[0]);
//     sentence.nomes = sentence.nomes.join(', ');
//     } if (second > -1) {
//     sentence.rocket.splice(second, 2);
//     sentence.rocket.push(sentence.rocket.splice(0, 1)[0]);
//     sentence.rocket = sentence.rocket.join(', ');
//     } if (third > -1) {
//     sentence.waltWhitman.splice(third, 2);
//     sentence.waltWhitman.push(sentence.waltWhitman.splice(1, 0));
//     sentence.waltWhitman = sentence.waltWhitman.join(', captain');
//     } 
//   }
// }

// console.log(concatName(sentence));









//GPT


let sentence = {
  nomes: ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'],
  rocket: ['foguete', 'não', 'tem', 'ré'],
  waltWhitman: ['captain', 'my', 'captain'],
};

function concatName(first, second, third) {
  let names = sentence.nomes.indexOf('Cassiano', 'Ferraz');
  let rocket = sentence.rocket.indexOf('não', 'tem');
  let waltWhitman = sentence.waltWhitman.indexOf('my');

  console.log(names);

}





















































// function splitSentence(trybe, vqv, rocket) {
//     return trybe.split(' ', 3)
//     return vqv.split(" ", 3)
//     return rocket.split(' ')
//   }
//   console.log(splitSentence('go Trybe', 'vamo que vamo', 'foguete'));

//   const compareTrue = (val1, val2) => (val1 && val2 === true ? true : false);
