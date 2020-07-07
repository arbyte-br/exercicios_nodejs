let rs = require("readline-sync")

let mes = rs.question("qual o mes? \n")

let dia = rs.question("qual o dia?")

if (mes == 1) {

    if (dia <= 20 ){

        console.log('Seu signo é Capricórnio!')
    }

    else {

        console.log('Seu signo é Aquário!')
    }
}

else if (mes == 2) {

    if (dia <= 18){

        console.log('Seu signo é Aquário!')
    }

    else {

        console.log ('Seu signo é Peixes!')
    }
}

else if (mes == 3) {

    if (dia <= 20){

        console.log('Seu signo é Peixes!')
    }
    else {

        console.log ('Seu signo é Áries!')
    }
}
else if (mes == 4) {

    if (dia <= 20){

        console.log('Seu signo é Áries!')
    }
    else {

        console.log ('Seu signo é Touro!')
    }
}
else if (mes == 5) {

    if (dia <= 20){

        console.log('Seu signo é Touro!')
    }
    else {

        console.log ('Seu signo é Gemêos!')
    }
}
else if (mes == 6) {

    if (dia <= 20){

        console.log('Seu signo é Gemêos!')
    }
    else {

        console.log ('Seu signo é Câncer!')
    }
}
else if (mes == 7) {

    if (dia <= 22){

        console.log('Seu signo é Câncer!')
    }
    else {

        console.log ('Seu signo é Leão!')
    }
}
else if (mes == 8) {

    if (dia <= 22){

        console.log('Seu signo é Leão!')
    }
    else {

        console.log ('Seu signo é Virgem!')
    }
}
else if (mes == 9) {

    if (dia <= 22){

        console.log('Seu signo é Virgem!')
    }
    else {

        console.log ('Seu signo é Libra!')
    }
}
else if (mes == 10) {

    if (dia <= 22){

        console.log('Seu signo é Libra!')
    }
    else {

        console.log ('Seu signo é Escorpião!')
    }
}
else if (mes == 11) {

    if (dia <= 21){

        console.log('Seu signo é Escorpião!')
    }
    else {

        console.log ('Seu signo é Sagitário!')
    }
}
else if (mes == 12) {

    if (dia <= 21){

        console.log('Seu signo é Sagitário!')
    }
    else {
        
        console.log ('Seu signo é Capricórnio!')
    }
}