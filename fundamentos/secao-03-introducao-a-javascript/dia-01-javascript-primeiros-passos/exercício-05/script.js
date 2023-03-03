let primeiro = 1;
let segundo = 89;
let terceiro = 90;
let verificacao = primeiro > 0 && segundo > 0 && terceiro > 0;

if (verificacao) {
  if (primeiro + segundo + terceiro == 180) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log("Error 404!");
}
