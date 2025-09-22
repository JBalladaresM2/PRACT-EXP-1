//========================================================================
// -------- BLOQUE 1 --------
//========================================================================

// 1. Contar caracteres de una palabra
function ejercicio_1() {
    const palabra = "Ingenieria"
    console.log(`La palabra "${palabra}" tiene ${palabra.length} letras`)
}

// 2. Contar apariciones de una letra específica
function ejercicio_2() {
    const frase = "Ingenieria en Software"
    const letra = "e"
    let veces = 0

    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === letra) {
            veces++
        }
    }

    console.log(`La letra "${letra}" se repite ${veces} veces en la frase "${frase}"`)
}

// 3. Invertir un texto
function ejercicio_3() {
    const texto = "Hola Mundo!"
    let texto_invertido = ""

    for (let i = texto.length - 1; i >= 0; i--) {
        texto_invertido += texto[i]
    }

    console.log(`${texto_invertido}`)
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
function palindroma(palabra) {
    let palabra_invertida = ""

    for (let i = palabra.length - 1; i >= 0; i--) {
        palabra_invertida += palabra[i]
    }

    if (palabra === palabra_invertida) {
        console.log(`La palabra "${palabra}" es palindroma`)
    } else {
        console.log(`Tu palabra "${palabra}" no es palindroma`)
    }

}
function ejercicio_7() {
    palindroma("radar");

}

// 8. Frase con mayor cantidad de caracteres
function caracteres(a, b) {

    if (a.length < b.length) {
        console.log(`"${a} " tiene mas caracteres que ${b} `)
    } else {
        console.log(`"${b}" tiene mas caracteres que ${a} `)
    }
}
function ejercicio_8() {
    caracteres("Me gusta el futbol", "Prefiero el baloncesto");
}

// 9. Contar apariciones de un carácter elegido

function contarfrase(frase, letra) {
    let veces = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === letra)
            veces++;
    }
    console.log(`La letra "${letra}" se repite ${veces} veces en la frase "${frase}"`);
}

function ejercicio_9() {
    let frase = prompt("Escribe una frase:");
    let letra = prompt("Ingresa un caracter:");
    contarfrase(frase, letra);
}



// 10. Dividir oración en palabras
function dividir(frase) {

    const segmentos = frase.split(" ")

    for (let i = 0; i < segmentos.length; i++) {
        console.log(`${segmentos[i]}`)
    }
}
function ejercicio_10() {
    dividir("me gusta programar")
}

//========================================================================
// -------- BLOQUE 2 --------
//========================================================================

// 1. Contar caracteres de varias palabras
function ejercicio_11() {
    let fruta, frutas = []

    while (true) {
        fruta = prompt("Ingresa un fruta:") // dejar vacio para dejar de agregar
        if (fruta != "") {
            frutas.push(fruta)
        } else {
            break
        }
    }

    for (let i = 0; i < frutas.length; i++) {
        console.log(`"${frutas[i]}" tiene ${frutas[i].length} letras.`)
    }
}

// 2. Contar apariciones de una letra en varias frases
function ejercicio_12() {
    let frase, frases = [], veces = 0

    while (true) {
        frase = prompt("Ingresa una frase:") // dejar vacio para dejar de agregar
        if (frase != "") {
            frases.push(frase)
        } else {
            break
        }
    }

    const letra = prompt("Ingresa un caracter:")


    for (let i = 0; i < frases.length; i++) {
        for (let j = 0; j < frases[i].length; j++) {
            if (frases[i][j] === letra) {
                veces++
            }
        }
        console.log(`La letra "${letra}" se repite ${veces} veces en la frase #${i + 1} "${frases[i]}".`)
        veces = 0
    }
}

// 3. Invertir varios textos
function ejercicio_13() {
    let texto, textos = [], texto_invertido

    while (true) {
        texto = prompt("Ingresa un texto:") // dejar vacio para dejar de agregar
        if (texto != "") {
            textos.push(texto)
        } else {
            break
        }
    }

    for (let i = 0; i < textos.length; i++) {
        texto_invertido = ""

        for (let j = textos[i].length - 1; j >= 0; j--) {
            texto_invertido += textos[i][j]
        }

        console.log(`${textos[i]} -> ${texto_invertido}`)
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
    debugger;
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
function ejercicio_17() {
    debugger
    let palabra, palabras = []
    while (true) {
        palabra = prompt("Ingrese una palabra para saber si es palindromo")
        if (palabra !== "") {
            palabras.push(palabra)
        } else {
            break
        }
    }
    for (let i = 0; i < palabras.length; i++) {
        palindroma(palabras[i]);

    }
}

// 8 Mayor numero de Caracteres
function ejercicio_18() {
    let bebes = [["me gusta el futbol", "prefiero el  baloncesto"], ["hola", "adios"]]
    for (i = 0; i < bebes.length; i++) {
        caracteres(bebes[i][0], bebes[i][1]);
    }
}

// 9 N apariciones
function ejercicio_19() {
    const N = parseInt(prompt("¿Cuántas palabras ingresarás?"));
    const letra = prompt("Letra a contar en todas:");

    for (let i = 1; i <= N; i++) {
        const palabra = prompt(`Palabra ${i}:`);
        contarfrase(palabra, letra);
    }
}

//10 Seperar numeros 
function ejercicio_20() {
    let num = []
    let n;

    while (true) {
        n = prompt("Ingrese una frase")
        if (n === "" || n === null) {
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
    let promedio = suma / cantidad
    console.log(`Promedio: ${promedio}`)
}

function ejercicio_21() {
    let numero, suma
    const cantidad = 5

    for (let i = 0; i < cantidad; i++) {
        numero = parseInt(prompt("Ingresa un numero:")) || 0
        suma += numero
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

// 23 Tabla de multiplicar
function ejercicio_27() {
    n = parseInt(prompt("Ingrese un numero para q aparesca la tabla"))
    num = parseInt(prompt("ingrese el limite de su tabla "))
    for (let i = 0; i <= n; i++) {
        console.log(`Tabla de multiplicar de ${n}
    ${i}*${n} =${i * n}  `)
    }
}

// 24  Calcular factorial 
function CalcularFactorial(num) {
    let r = 1
    for (let i = 2; i < num; i++) {
        r *= i;
    }
    console.log(`Tu numero ${num}! =${r}`)
}

function ejercicio_28() {
    let num = parseInt(prompt("Ingrese el numero que quiere comprobar"))
    CalcularFactorial(num)
}

// 25 leer si son pares
function ejercicio_29() {
    let arreglo = []
    for (let i = 0; i <= 3; i++) {
        const num = parseInt(prompt(`Ingresa el numero ${i + 1} de 4:`, 10));
        arreglo.push(num)
    }

    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 === 0) {
            console.log(`Par: ${arreglo[i]} y su posicion ${i}`)

        }
    }
}

// 26  Sumar dos grupos
function ejercicio_30(){
    const A = [2, 4, 6];
    const B = [1, 3, 5];
    const C = [];

    for (let i = 0; i < A.length; i++) {
    C.push(A[i] + B[i]);
    }

    console.log(C); 
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