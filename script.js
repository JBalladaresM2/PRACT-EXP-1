//========================================================================
// -------- BLOQUE 1 --------
//========================================================================

// 1. Contar caracteres de una palabra
function contarcaracteres(palabra){
  console.log (`La palabra : ${palabra} , tiene ${palabra.length} caracteres`)
}
function ejercicio_1() {
   palabra=prompt('Ingrese una palabra')
   contarcaracteres(palabra)
}
// 2. Contar apariciones de una letra específica
function contarApariciones(frase , caracter){
let c=0
for (i=0 ; i<frase.length ; i++){
    if (frase[i] == caracter) {
c++
    }
}
console.log(`la letra ${caracter} en la frase ${frase} se repite ${c} veces`)
}
function ejercicio_2() {
frase = prompt("Ingrese la frase")
caracter = prompt("Ingrese el caracter que desea ver que se repite")
contarApariciones(frase , caracter)
        }



// 3. Invertir un texto
function invertir(texto){
let texto_invertido = ""
    for (let i = texto.length - 1; i >= 0; i--) {
        texto_invertido += texto[i]
    }
    console.log(`${texto_invertido}`)
}
function ejercicio_3() {
texto = prompt("Ingrese el texto")
invertir(texto)
    
}


// 4. Comparar longitudes de cadenas
function CompararLongitudes(cadena_1, cadena_2) {
    if (cadena_1.length > cadena_2.length) {
        console.log(`"${cadena_1}" tiene mas letras`)
    } else {
        console.log(`"${cadena_2}" tiene mas letras`)
    }
}

function ejercicio_4() {
    CompararLongitudes("Garcia", "Perez")
}

// 5. Iniciales de un nombre completo
function InicialesNombre(nombre_completo) {
    const segmentos = nombre_completo.split(" ")
    let iniciales = ""

    for (let i = 0; i < segmentos.length; i++) {
        iniciales += `${segmentos[i][0]}.`
    }

    console.log(`${iniciales}`)
}

function ejercicio_5() {
    InicialesNombre("Ana Maria Torres")
}

// 6. Reemplazo de caracteres
function ReemplazarCaracteres(palabra, letra, reemplazo) {
    let resultado = ""

    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === letra) {
            resultado += reemplazo
        } else {
            resultado += palabra[i]
        }
    }

    console.log(`${resultado}`)
}

function ejercicio_6() {
    ReemplazarCaracteres("Ingenieria", "e", "3")
}

// 7. Palabra palíndroma
function palindroma(palabra) { //llamaos a la funcion polindroma
    let palabra_invertida = ""              //ponemos un let porque la variable va acambiar

    for (let i = palabra.length - 1; i >= 0; i--) { //Abrimos un for pata recorrer la palabra por un arreglo
        palabra_invertida += palabra[i]
    }

    if (palabra === palabra_invertida) {            //abrimos una condiconal si es verdadero que anote si la palabra es invertida
        console.log(`La palabra "${palabra}" es palindroma`)
    } else {
        console.log(`Tu palabra "${palabra}" no es palindroma`)
    }

}

function ejercicio_7() {    //Le ponemos valor a la funcion 
    palindroma("radar");
}

// 8. Frase con mayor cantidad de caracteres
function caracteres(a, b) {    //llamamos a la funcion

    if (a.length < b.length) {  //abrimos una condiconal y le pones length para ver cuantas caracteres tiene la palabra para imprimirla
        console.log(`"${a} " tiene mas caracteres que ${b} `)
    } else {
        console.log(`"${b}" tiene mas caracteres que ${a} `)
    }
}
function ejercicio_8() {
    caracteres("Me gusta el futbol", "Prefiero el baloncesto");//llamamos a la funcion 
}

// 9. Contar apariciones de un carácter elegido

function contarfrase(frase, letra) { //llamamos a la funcion 
    let veces = 0;
    for (let i = 0; i < frase.length; i++) {     //abrimos una for para recorrer la frase y encontrar la letra 
        if (frase[i] === letra)
            veces++;
    }
    console.log(`La letra "${letra}" se repite ${veces} veces en la frase "${frase}"`);//imprimimos
}

function ejercicio_9() {
    let frase = prompt("Escribe una frase:");
    let letra = prompt("Ingresa un caracter:");     //le ponemos los caracteres de la funcion
    contarfrase(frase, letra);
}

// 10. Dividir oración en palabras
function dividir(frase) {

    const segmentos = frase.split(" ")   // abrimos una constante y le pones un split para que salga linea por linea 

    for (let i = 0; i < segmentos.length; i++) { //el for para recorrer el codigo 
        console.log(`${segmentos[i]}`)
    }
}
function ejercicio_10() {    //le agregamos los valores o caracteres a la funcion 
    dividir("me gusta programar")
}

//========================================================================
// -------- BLOQUE 2 --------
//========================================================================

// 1. Contar caracteres de varias palabras
function ejercicio_11() {
    debugger
palabras = []                                           
n = parseInt(prompt("Ingrese la cantidad de palabras"))
for (j=0 ; j<n ; j++){
palabra=prompt(`Ingrese la palabra ${n+1} :`)
palabras.push(palabra)}
for (i=0 ; i < palabras.length ; i++){
contarcaracteres(palabras[i])
}

    }


// 2. Contar apariciones de una letra en varias frases
function ejercicio_12() {
    debugger
    serieFrases = []
n = parseInt(prompt("Ingrese la cantidad de frases"))
for (j=0 ; j<n ; j++){
frases=prompt(`Ingrese la Frase ${j+1} :`)
serieFrases.push(frases)}
caracter= prompt("Ingrese el caracter")
for (m=0 ; m < serieFrases.length ; m++){
contarApariciones(serieFrases[m] , caracter)
}
}


// 3. Invertir varios textos
function ejercicio_13() {
    debugger
textos=[]
n= prompt("Ingrese la cantidad de textos a invertir")
for (c=0 ; c<n ; c++){
 palabra=prompt(`Ingrese la palabra ${c+1} :`)
 textos.push(palabra)
}
for (j=0 ; j < textos.length ; j++){
    invertir(textos[j])
}
}


// 4. Comparar longitudes de pares de palabras en arreglo
function ejercicio_14() {
    let cadena_1, cadena_2, cadenas = []

    while (true) {
        cadena_1 = prompt("Ingresa un texto:") // dejar vacio para dejar de agregar
        if (cadena_1 === "") {
            break
        }
        cadena_2 = prompt("Ingresa otro texto:") // dejar vacio para dejar de agregar
        if (cadena_2 === "") {
            break
        }
        cadenas.push([cadena_1, cadena_2])
    }

    for (let i = 0; i < cadenas.length; i++) {
        CompararLongitudes(cadenas[i][0], cadenas[i][1])
    }
}

// 5. Iniciales de varios nombres completos
function ejercicio_15() {
    let nombre_completo, nombres = []

    while (true) {
        nombre_completo = prompt("Ingresa nombre completo:") // dejar vacio para dejar de agregar
        if (nombre_completo != "") {
            nombres.push(nombre_completo)
        } else {
            break
        }
    }

    for (let i = 0; i < nombres.length; i++) {
        InicialesNombre(nombres[i])
    }

}

// 6. Reemplazo de caracteres en varios textos
function ejercicio_16() {
    let palabra, palabras = []

    while (true) {
        palabra = prompt("Ingresa palabra:") // dejar vacio para dejar de agregar
        if (palabra != "") {
            palabras.push(palabra)
        } else {
            break
        }
    }

    const letra = prompt("Ingresa letra a reemplazar:")
    const reemplazo = prompt("Ingresa reemplazo:")

    for (let i = 0; i < palabras.length; i++) {
        ReemplazarCaracteres(palabras[i], letra, reemplazo)
    }
}

// 7. Polindromo en un arreglo 
function ejercicio_17() {                   //le abrimos un let para guardar nuestro arreglo
    let palabra, palabras = []
    while (true) {                      //abrimos un while para en cuando sea false se detenga el bucle 
        palabra = prompt("Ingrese una palabra para saber si es palindromo")
        if (palabra !== "") {               //abrimos una condicional q cuando palabra sea diferente de vacio se agrege al arreglo con el pus
            palabras.push(palabra)
        } else {
            break
        }
    }
    for (let i = 0; i < palabras.length; i++) { // le ponemos un for para las palabras vayan contadas y reciclamos el codigo n° 7
        palindroma(palabras[i]);
    }
}

// 8. Mayor numero de Caracteres
function ejercicio_18() { //le ponemos los valores que ya estaban y solamente creamos un let ponemos la frases
    let bebes = [["me gusta el futbol", "prefiero el  baloncesto"], ["hola", "adios"]] //ponemos un for para recorrer el arreglo y mandamos 
    for (i = 0; i < bebes.length; i++) {        //los datos a la funcion n° 8 que ya tiene el procedimiento 
        caracteres(bebes[i][0], bebes[i][1]);
    }
}

// 9. N apariciones
function ejercicio_19() {
    const N = parseInt(prompt("¿Cuántas palabras ingresarás?")); //ponemos dos prompt para pedir cuantas letras ingresara 
    const letra = prompt("Letra a contar en todas:"); // y la letra a buscar

    for (let i = 1; i <= N; i++) {      //ponemos un for para el limite de palabras 
        const palabra = prompt(`Palabra ${i}:`);
        contarfrase(palabra, letra);            //mandamos los datas a ala funcion n°8 y asi reciclamos codigos 
    }
}

// 10. Seperar numeros 
function ejercicio_20() {
    let num = []            //abrimos una variable para guardar los datos del arreglo
    let n;

    while (true) {
        n = prompt("Ingrese una frase")   //abrimos un while pidiendo la frase y una condicional si es n igual a vacio o a null 
        if (n === "" || n === null) {     //se acaba el ciclo y mandamos los datos a el arreglo
            break;
        } else {
            num.push(n)
            dividir(n)

        }
    }
}

//========================================================================
// -------- BLOQUE 3 --------
//========================================================================

// 17. Calcular el promedio de 5 números
function CalcularPromedio(suma, cantidad) {
    promedio = suma / cantidad
    console.log(`PROMEDIO FINAL : ${promedio}`)
}

function ejercicio_21() {
    const cantidad = 5
    suma = 0
    for (i = 0; i < cantidad; i++) {
        num = parseInt(prompt(`Ingrese el numero # ${i + 1} : `))
        suma += num
    }
    CalcularPromedio(suma, cantidad)
}

// 18. Contar cuántos de 5 números son impares.
function Impares(numero) {
    if (numero % 2 != 0) {
        return true
    }
}

function ejercicio_22() {
    let numero, cantidad_impares = 0
    const cantidad = 5

    for (let i = 0; i < cantidad; i++) {
        numero = parseInt(prompt("Ingresa un numero:")) || 0
        if (Impares(numero) === true) {
            cantidad_impares++
        }
    }

    console.log(`Cantidad de impares: ${cantidad_impares}`)
}

// 19. Leer 5 edades y contar cuántos son mayores de edad.
function MayorDeEdad(edad) {
    if (edad >= 18) {
        return true
    }
}

function ejercicio_23() {
    let edad, cantidad_edades = 0
    const cantidad = 5

    for (let i = 0; i < cantidad; i++) {
        edad = parseInt(prompt("Ingresa una edad:")) || 0
        if (MayorDeEdad(edad) === true) {
            cantidad_edades++
        }
    }

    console.log(`Mayores de edad: ${cantidad_edades}`)
}

// 20. Buscar un valor en 4 números.
function BuscarValor(numero, valor) {
    if (numero === valor) {
        console.log(`Se encontro el numero ${valor}`)
    }
}

function ejercicio_24() {
    let numero, valor

    valor = parseInt(prompt("Ingresa el valor a buscar"))

    for (let i = 0; i < 4; i++) {
        numero = parseInt(prompt("Ingresa numero:")) || 0
        BuscarValor(numero, valor)
    }
}

// 21. Concatenar 3 palabras.
function ConcatenarPalabras(palabra, concatenadas) {
    if (concatenadas === "") {
        return palabra
    } else {
        return concatenadas + " " + palabra
    }
}

function ejercicio_25() {
    let palabra, concatenado = ""

    for (let i = 0; i < 3; i++) {
        palabra = prompt("Ingresa una palabra:") || ""
        concatenado = ConcatenarPalabras(palabra, concatenado)
    }

    console.log(`Palabras concatenadas: "${concatenado}"`)
}

// 22. Calcular el cubo de 3 números.
function CalcularCubo(numero) {
    console.log(`${numero ** 3}`)
}

function ejercicio_26() {
    let numero

    for (let i = 0; i < 3; i++) {
        numero = parseInt(prompt("Ingresa numero:")) || 0
        CalcularCubo(numero)
    }
}

// 23. Tabla de multiplicar
function multiplicar(n, num) {
    for (let i = 1; i <= num; i++) {
        console.log(`
    ${n}*${i} =${i * n}  `)
    }
}
function ejercicio_27() {
    n = parseInt(prompt("Ingrese un numero para q aparesca la tabla"))
    num = parseInt(prompt("ingrese el limite de su tabla "))
    multiplicar(n, num)
}

// 24. Calcular factorial 
function CalcularFactorial(num) {
    let r = 1
    for (let i = 2; i <= num; i++) {
        r *= i;
    }
    console.log(`Tu numero ${num}! =${r}`)
}

function ejercicio_28() {
    let num = parseInt(prompt("Ingrese el numero que quiere comprobar"))
    CalcularFactorial(num)
}

// 25. leer si son pares
function leerPares(cantidad) {
    let arreglo = []
    for (let i = 0; i < cantidad; i++) {
        const num = parseInt(prompt(`Ingresa el numero ${i + 1} de ${cantidad}:`));
        arreglo.push(num)
    }

    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 === 0) {
            console.log(`Par: ${arreglo[i]} y su posicion ${i}`)
        }
    }
}

function ejercicio_29() {
    leerPares(4)
}

// 26. Sumar dos grupos
function Sumar(A, B, C) {

    for (let i = 0; i < A.length; i++) {
        C.push(A[i] + B[i]);

    }
    console.log(C);
}

function ejercicio_30() {
    const A = [2, 4, 6];
    const B = [1, 3, 5];
    const C = [];
    Sumar(A, B, C);
}

//========================================================================
// -------- BLOQUE 4 --------
//========================================================================

// 17. Promedio de un arreglo
function ejercicio_31() {
    let numero, numeros = [], suma = 0

    while (true) {
        numero = parseInt(prompt("Ingresa un numero:")) || 0
        if (numero === 0) {
            break
        }
        numeros.push(numero)
    }

    const cantidad = numeros.length

    for (let i = 0; i < cantidad; i++) {
        suma += numeros[i]
    }

    CalcularPromedio(suma, cantidad)
}

// 18. Contar impares en un arreglo
function ejercicio_32() {
    let numero, numeros = [], cantidad_impares = 0

    while (true) {
        numero = parseInt(prompt("Ingresa un numero:")) || 0
        if (numero === 0) {
            break
        }
        numeros.push(numero)
    }

    for (let i = 0; i < numeros.length; i++) {
        if (Impares(numeros[i]) === true) {
            cantidad_impares++
        }
    }

    console.log(`Cantidad de impares: ${cantidad_impares}`)
}

// 19. Mayores de edad en un arreglo
function ejercicio_33() {
    let edad, edades = [], cantidad_edades = 0

    while (true) {
        edad = parseInt(prompt("Ingresa una edad:")) || 0
        if (edad === 0) {
            break
        }
        edades.push(edad)
    }

    for (let i = 0; i < edades.length; i++) {
        if (MayorDeEdad(edades[i]) === true) {
            cantidad_edades++
        }
    }

    console.log(`Mayores de edad: ${cantidad_edades}`)
}

// 20. Buscar valor en un arreglo
function ejercicio_34() {
    let numeros = [], numero, valor

    valor = parseInt(prompt("Ingresa el valor a buscar"))

    while (true) {
        numero = parseInt(prompt("Ingresa un numero:")) || 0
        if (numero === 0) {
            break
        }
        numeros.push(numero)
    }

    for (let i = 0; i < numeros.length; i++) {
        BuscarValor(numeros[i], valor)
    }
}

// 21. Concatenar palabras de un arreglo
function ejercicio_35() {
    let palabras = [], palabra, concatenado = ""

    while (true) {
        palabra = prompt("Ingresa un numero:") || ""
        if (palabra === "") {
            break
        }
        palabras.push(palabra)
    }

    for (let i = 0; i < palabras.length; i++) {
        concatenado = ConcatenarPalabras(palabras[i], concatenado)
    }

    console.log(`Palabras concatenadas: "${concatenado}"`)
}

// 22. Cubo de elementos en arreglo
function ejercicio_36() {
    let numeros = [], numero

    while (true) {
        numero = parseInt(prompt("Ingresa un numero:")) || 0
        if (numero === 0) {
            break
        }
        numeros.push(numero)
    }

    for (let i = 0; i < numeros.length; i++) {
        CalcularCubo(numeros[i])
    }
}

// 23. Tabla de multiplicar de elementos
function ejercicio_37() {
    let numeros = [];
    for (let i = 0; i < 2; i++) {
        let n = prompt(`Ingrese un numero ${i + 1}`)
        numeros.push(n);
    }
    const limite = parseInt(prompt("Ingrese el limite"), 10)
    for (let i = 0; i < numeros.length; i++) {
        multiplicar(numeros[i], limite)
    }
}


// 24. Factorial de elementos en arreglo
function ejercicio_38() {
    let numeros = [];
    for (let i = 0; i < 2; i++) {
        let n = prompt(`Ingrese un numero ${i + 1}`)
        numeros.push(n);
    }
    for (let i = 0; i < numeros.length; i++) {
        CalcularFactorial(numeros[i]);
    }
}

// 25. Copiar pares a otro arreglo
function ejercicio_39() {
    let pares = [];
    let cantidad = parseInt(prompt("Ingrese la cantidad que va a ingresar"))
    for (let i = 0; i < cantidad; i++) {
        let n = parseInt(prompt(`Ingrese un numero ${i + 1}`))
        if (n % 2 === 0) {
            pares.push(n);
        }
    }
    console.log(`Numeros encontrados pares ${pares}`)
    if (pares > 0) {
        leerPares(pares.length)
    }
}

// 26. Suma de dos arreglos
function ejercicio_40() {
    const A = [];
    const B = [];
    let C = [];

    let total = parseInt(prompt("Cuantos numeros va ingresar"))

    for (let i = 0; i < total; i++) {
        let num1 = parseInt(prompt(`Ingrese un numero ${i + 1}para el primer arreglo`))
        A.push(num1);
    }
    for (let i = 0; i < total; i++) {
        let num2 = parseInt(prompt(`Ingrese un numero ${i + 1} para el segundo arreglo `))
        B.push(num2);
    }

    Sumar(A, B, C)
}