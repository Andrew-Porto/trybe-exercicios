let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

info["recorrente"] = "Sim";
// console.log(info);
// console.log("Bem-Vinda, " + info.personagem);

// for (let newInfo in info){
//     console.log(newInfo);
// }

// for (let newValues in info){
//     console.log(info[newValues]);
// }


let newObj = Object.assign({},info );
newObj.personagem += " e Tio Patinhas";
newObj.origem += " e Christmas on Bear Mountain, Dell's Four Color Comics #178";
newObj.nota += " e O último MacPatinhas"
newObj.recorrente = "Ambos recorrentes"

console.log(newObj);