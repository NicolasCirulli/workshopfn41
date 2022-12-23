// DOC -> https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
// DOC -> https://developer.mozilla.org/es/docs/Glossary/Hoisting


/* formateaNombre() */



// Declaracion de Funcion 



function formateaNombre(){

    let nombre = prompt( 'Ingresa tu nombre' )

    let nombreEnMayus = nombre[0].toUpperCase() + nombre.slice( 1 ).toLowerCase()

    console.log( nombreEnMayus ) 
}

// Expresión de Función

const formateaNombreDos = function (){

    let nombre = prompt( 'Ingresa tu nombre' )

    let nombreEnMayus = nombre[0].toUpperCase() + nombre.slice( 1 ).toLowerCase()

    console.log( nombreEnMayus ) 
}




// Parametros de Funcion

function formatearParametro( parametroUno, parametroDos, parametroTres='rodriGo' ){

    let nombreEnMayus = parametroTres[0].toUpperCase() + parametroTres.slice( 1 ).toLowerCase()
    console.log( nombreEnMayus ) 

}
let nombre = 'nicoLAs'
let aux = 'joa'
/* formatearParametro( null, null, nombre ) 
formatearParametro( 'floR' )
formatearParametro( aux + 'QuIn' ) */


function sumar( numeroUno=0, numeroDos=0 ){
    let resultado = numeroUno + numeroDos
    console.log( resultado )
}

/* sumar( 10, 5 )
sumar( 11, 9) */



// Return y Alcance de las variables de una funcion


function resta( primerValor, segundoValor ){
    let resultado = primerValor - segundoValor
    return resultado

}

let resultadoResta = resta( 10 , 5 ) 
let resultadoResta2 = resta( 18 , 4 ) 


/* console.log( resultadoResta )
console.log( resultadoResta2 ) */



/* 
    

    2- Escriba un programa que le pregunte al usuario una temperatura 
    en grados Celsius y determine si hace mucho calor o no

    3- Escriba un programa que le pregunte al usuario un número y 
    luego imprima si es par o impar.

    4- Escriba un programa que le pregunte al usuario su velocidad actual 
    y el límite de velocidad, y luego imprima si está excediendo la velocidad o no. 
*/

/* 
1- Escriba un programa que le pregunte al usuario su edad 
    y luego imprima si es adolescente (entre 13 y 19 años inclusive) o no. */

// funcion 

// preguntar al usuario la edad 

// Se va a fijar si la edad ingresada esta en el rango 13 y 19

// Si la condicion anterior es verdadera, imprime en consola que es adolescente



function esAdolescente(){
    let edad = prompt( 'Ingrese su edad' )
    let adolescente = edad >= 13 && edad <= 19
    if( adolescente ){
        console.log( 'Es adolescente' )
    }else{
        console.log( 'No es adolescente' )
    }

}
/* esAdolescente() */

/* 2- Escriba un programa que le pregunte al usuario una temperatura 
en grados Celsius y determine si hace mucho calor o no */

// funcion
// preguntarle al usuario la temp
// determinar si la temp es mayor a 27
// si temp es mayor a 27, imprimr que hace mucho calor

function haceCalor(){
    let temp = Number( prompt( 'ingrese la temperatura') )
    let calor = temp >= 27
    if( temp && calor ){
        console.log('Hace mucho calor')
    }else if(temp && !calor){
        console.log('No hace tanto calor')
    }
    else{
        console.log('No es una temperatura correcta')
    }
}
/* haceCalor() */


/* 3- Escriba un programa que le pregunte al usuario un número y 
    luego imprima si es par o impar. */

// funcion
// pedir al usuario un numero
// evaluar si el numero ingresado es par
// decirle al usuario si es par o impar

function determinarSiEsPar( numero ){
    let par = numero % 2 === 0
    if( par ){
        console.log( 'Es par' )
    }else{
        console.log( 'Es impar' )
    }
}

determinarSiEsPar( 10 )


/* 4- Escriba un programa que le pregunte al usuario su velocidad actual 
y el límite de velocidad, y luego imprima si está excediendo la velocidad o no. */ 

function velocidad( ){

    let vel = prompt( 'Ingrese la velocidad' )
    let limite = prompt( 'Ingrese la velocidad' )

    if(vel > limite){
        console.log( 'Esta excediendo la velocidad' )
    }else{
        console.log( 'Esta en la velocidad correcta' )
    }
} 