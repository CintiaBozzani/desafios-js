
//DECLARO VARIABLES E INGRESOS DE DATOS POR PROMPS
let nombre = prompt("Por favor ingresa tu nombre")
let edad = prompt("¿Cual es tu edad?")
let autorizado = ""

//VERIFICO QUE LA EDAD SEA UN NUMERO CON EL CONDICIONAL SINO ENVIO ALERTA
//isNaN Verifica que edad no sea un numero, si no lo es envio alerta pidiendo que sea un numero
if (isNaN(edad)) {
    alert("La edad debe ser un numero")
    edad = prompt("¿Cual es tu edad?")
}

//Verifico si la edad es mayor o igual que 18 con un condicional
if (edad >= 18) {
    autorizado = "ya eres mayor de edad puedes ingresar"
} else { autorizado = "no eres mayor de edad no puedes ingresar" }

//Busco un elemento por id en el html y le imprimo la concatenacion de Hola mas el nombre mas el resultado del ccondicional de edad
document.getElementById("usuario").innerHTML = "Hola " + nombre + " " + autorizado

//Pido un numero y verifico si se ingresa un numero, si no lo es emito alerta y vuelvo a solicitar el ingreso del numero
let numeroUno = prompt("ingresa un numero")
if (isNaN(numeroUno)) {
    alert("Debes ingresar un numero para poder sumarlo")
    numeroUno = prompt("ingresa un numero")
}

//Pido el segundo numero y verifico si se ingresa un numero, si no lo es emito alerta y vuelvo a solicitar el ingreso del numero
let numeroDos = prompt("ingresa otro numero")
if (isNaN(numeroDos)) {
    alert("Debes ingresar un numero para poder sumarlo")
    numeroDos = prompt("ingresa un numero")
}

//Paso los string que generan los prompt a numero con parseInt, los sumo y emito alerta con el resultado
let resultado = parseInt(numeroUno) + parseInt(numeroDos)
alert("El resultado es " + resultado)


//CREO UN ARRAY DE OBJETOS CON FRUTAS
let frutas = [
    {
        nombre: "Banana",
        precio: 13
    },
    {
        nombre: "Manzana",
        precio: 5
    },
    {
        nombre: "Kiwi",
        precio: 6
    },
    {
        nombre: "Pera",
        precio: 9
    },
    {
        nombre: "Durazno",
        precio: 25
    },
    {
        nombre: "Mandarina",
        precio: 2
    },
    {
        nombre: "Naranja",
        precio: 30
    },
    {
        nombre: "Melon",
        precio: 7
    },
    {
        nombre: "Sandia",
        precio: 1
    },

]

//CAPTURO POR PROMPT EL VALOR QUE INGRESA EL USUARIO
let dinero=prompt("¿Con cuanto dinero cuentas?")

//VERIFICO QUE EL VALOR SEA NUMERICO
if (isNaN(dinero)) {
    alert("Debes ingresar un monto para poder sumarlo")
    dinero = prompt("¿Con cuanto dinero cuentas? ")
}

//CON UN BUCLE FOR RECORRO EL ARRAY Y SEPARON CON CONDICIONAL LAS FRUTAS QUE LE ALCANZAN DE LAS QUE NO DE ACUERDO AL MONTO INGRESADO
for(let i=0;i<frutas.length;i++){
    if(frutas[i].precio < dinero){
         console.log("Te alcanza "+frutas[i].nombre)
    }else{
        console.log("No te alcanza "+frutas[i].nombre)
}
}
