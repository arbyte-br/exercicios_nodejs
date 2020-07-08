let rs = require("readline-sync")

let ladoa = rs.questionInt("Qual o tamanho do lado a? \n")

let ladob = rs.questionInt("Qual o tamanho do lado b? \n")

let resultado = ladoa * ladob

console.log ("Seu quadrado mede "+ resultado)

if (resultado <= 10){

    console.log ("Pequeno")
}

else if (resultado <= 20){

    console.log("Medio")
}

else if (resultado <= 30){
    
    console.log("Grande")
}
   