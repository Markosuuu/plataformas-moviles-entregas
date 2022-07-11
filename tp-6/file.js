/*
	Crear un directorio tp-6/ en su repositorio de entregas, y subir el archivo como tp-6/index.html.

	Dentro de este mismo archivo HTML implementar las funciones pedidas en el código Javascript.

	Adicional: Usar al menos una vez cada una de las 3 formas distintas de definición de funciones que vimos en clase.

	Para la entrega incluir un link al repositorio de Github, y otro link a la versión funcionando en Github Pages del sitio.
*/

// Numeros

// Implementar una función "suma" que retorne la suma de 2 numeros
// ejemplo: suma(2,3) retorna 5
function suma(a,b) {
    return a + b;
}

console.log("suma(2,3): ", suma(2,3))


// Implementar una función "elevarAlCubo" que eleve al cubo un numero
// ejemplo: elevarAlCubo(3) retorna 27
var elevarAlCubo = function(n) {
    return n**3;
}

console.log("elevarAlCubo(3): ", elevarAlCubo(3))


// Implementar una función "restoDivisionEntera" para devolver el resto de una división entera entre un dividendo y un divisor
// ejemplo: restoDivisionEntera(3,2) retorna 1

var restoDivisionEntera = (dividendo, divisor) => {
    return dividendo % divisor;
}

console.log("restoDivisionEntera(3,2): ", restoDivisionEntera(3,2))


// Implementar una función "numeroPi" para devolver el numero PI
// ejemplo: numeroPi() retorna 3,14...
function numeroPi() {
    return Math.PI;
}

console.log("numeroPi(): ", numeroPi())


// Implementar una función "numeroRandom" para devolver un número random / aleatorio
// ejemplo: numeroRandom() retorna 0,123...
var numeroRandom = function() {
    return Math.random();
}

console.log("numeroRandom(): ", numeroRandom())


// Implementar una función "mejorNumeroRandom" para devolver un número random entre 2 valores recibidos como parámetros
// ejemplo: mejorNumeroRandom(1,6) retorna 3
var mejorNumeroRandom = (desde,hasta) => {
    return Math.random() * (hasta - desde) + desde;
}

console.log("mejorNumeroRandom(1,6): ", mejorNumeroRandom(1,6))


// Cadenas de Caracteres

// Implementar una función "transformarMayuscula" que transforme a mayúscula la palabra recibida como parámetro
// ejemplo: transformarMayuscula("Plataformas Móviles") retorna "PLATAFORMAS MÓVILES"
function transformarMayuscula(cadena) {
    return cadena.toUpperCase();
}

console.log("transformarMayuscula(\"Plataformas Móviles\"): ", transformarMayuscula("Plataformas Móviles"))

// Implementar una función "primeraLetra" que nos devuelva la inicial de la palabra recibida como parámetro
// ejemplo: primeraLetra("Plataformas") retorna "P"

var primeraLetra = function(cadena) {
    return cadena[0];
}

console.log("primeraLetra(\"Plataformas\"): ", primeraLetra("Plataformas"))


// Implementar una función "ultimaLetra" que nos devuelva la letra final la palabra recibida como parámetro
// ejemplo: ultimaLetra("Plataformas") retorna "s"
var ultimaLetra = (cadena) => {
    return cadena[cadena.length - 1];
}

console.log("ultimaLetra(\"Plataformas\"): ", ultimaLetra("Plataformas"))


// Implementar una función "primeraLetraMayuscula" que devuelve la palabra original con su primera letra en mayúscula
// ejemplo: primeraLetraMayuscula("plataformas") retorna "Plataformas"
function primeraLetraMayuscula(cadena) {
    var primeraLetraMayuscula = transformarMayuscula(primeraLetra(cadena));

    var restoDeLaPalabra = cadena.slice(1, cadena.length);

    return primeraLetraMayuscula + restoDeLaPalabra;
}

console.log("primeraLetraMayuscula(\"plataformas\"): ", primeraLetraMayuscula("plataformas"))

// Implementar una función "palabraAListaDeLetras" que dada una palabra me retorne un listado de sus letras
// ejemplo: palabraAListaDeLetras("hola") retorna ['h', 'o', 'l', 'a'];
var palabraAListaDeLetras = function(cadena) {
    let lista = [];

    for(var i = 0; i < cadena.length; i++) {
        lista.push(cadena[i]);
    }

    return lista;
}

console.log("palabraAListaDeLetras(\"hola\"): ", palabraAListaDeLetras("hola"))

// Implementar una función "listadoDeLetrasAPalabra" que dado un listado de letras, devuelva una palabra
// ejemplo: listadoDeLetrasAPalabra(["h", "o", "l", "a"]) retorna "hola";
var listadoDeLetrasAPalabra = (lista) => {
    var cadena = lista.join('');

    return cadena;
}

console.log("listadoDeLetrasAPalabra([\"h\", \"o\", \"l\", \"a\"]): ", listadoDeLetrasAPalabra(["h", "o", "l", "a"]))

// Implementar una función "palabraInvertida" que devuelva la palabra invertida
// ejemplo: palabraInvertida("hola") retorna "aloh";
function palabraInvertida(cadena) {
    let palabra = "";
    for(let i = cadena.length -1; i >= 0; i--){
        palabra += cadena[i];
    }

    return palabra;
}

console.log("palabraInvertida(\"hola\"): ", palabraInvertida("hola"))
