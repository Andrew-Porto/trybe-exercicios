let primeiro = 1;
let segundo = 89;
let terceiro = 90;
//Gabarito
// let verificacao = primeiro > 0 && segundo > 0 && terceiro > 0;

// if (verificacao) {
//   if (primeiro + segundo + terceiro == 180) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// } else {
//   console.log("Error 404!");
// }

if (primeiro <= 0 || segundo <= 0 || terceiro <= 0) {
  console.log("Error 404!");
} else if (primeiro + segundo + terceiro == 180) {
  console.log(true);
} else {
  console.log(false);
}
