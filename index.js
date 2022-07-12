
//DECLARO VARIABLES E INGRESOS DE DATOS POR PROMPS
let nombre = prompt("Por favor ingresa tu nombre")
let edad = prompt("¿Cual es tu edad?")
let autorizado="" 

//VERIFICO QUE LA EDAD SEA UN NUMERO CON EL CONDICIONAL SINO ENVIO ALERTA
//isNaN Verifica que edad no sea un numero, si no lo es envio alerta pidiendo que sea un numero
if(isNaN(edad)){ 
    alert("La edad debe ser un numero")
    edad = prompt("¿Cual es tu edad?")
}

//Verifico si la edad es mayor o igual que 18 con un condicional
if(edad>=18){
autorizado="ya eres mayor de edad puedes ingresar"
}else{autorizado="no eres mayor de edad no puedes ingresar"}

//Busco un elemento por id en el html y le imprimo la concatenacion de Hola mas el nombre mas el resultado del ccondicional de edad
document.getElementById("usuario").innerHTML="Hola " +nombre+" "+ autorizado

//Pido un numero y verifico si se ingresa un numero, si no lo es emito alerta y vuelvo a solicitar el ingreso del numero
let numeroUno =prompt("ingresa un numero")
if(isNaN(numeroUno)){
    alert("Debes ingresar un numero para poder sumarlo")
    numeroUno =prompt("ingresa un numero")
}

//Pido el segundo numero y verifico si se ingresa un numero, si no lo es emito alerta y vuelvo a solicitar el ingreso del numero
let numeroDos =prompt("ingresa otro numero")
if(isNaN(numeroDos)){
    alert("Debes ingresar un numero para poder sumarlo")
    numeroDos =prompt("ingresa un numero")
}

//Paso los string que generan los prompt a numero con parseInt, los sumo y emito alerta con el resultado
let resultado = parseInt(numeroUno)+ parseInt(numeroDos)
alert("El resultado es "+resultado)
