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
function ejercicio_7() {
    const palabra = "radar"
    let palabra_invertida = ""

    for (let i = palabra.length - 1; i >= 0; i--) {
        palabra_invertida += palabra[i]
    }

    if (palabra === palabra_invertida) {
        console.log(`La palabra "${palabra}" es palindroma`)
    } else {
        console.log(`Tu palabra no es palindroma`)
    }
}

// 8. Frase con mayor cantidad de caracteres
function ejercicio_8() {
    const frase_1 = "Me gusta el fútbol"
    const frase_2 = "Prefiero el baloncesto"

    if (frase_1.length < frase_2.length) {
        console.log(`"${frase_1}" tiene mas caracteres`)
    } else {
        console.log(`"${frase_2}" tiene mas caracteres`)
    }
}

// 9. Contar apariciones de un carácter elegido
function ejercicio_9() {
    const frase = prompt("Escribe una frase:")
    const letra = prompt("Ingresa un caracter:")
    let veces = 0

    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === letra) {
            veces++
        }
    }

    console.log(`La letra "${letra}" se repite ${veces} veces en la frase "${frase}"`)
}

// 10. Dividir oración en palabras
function ejercicio_10() {
    const frase = "Me gusta aprender programacion"
    const segmentos = frase.split(" ")

    for (let i = 0; i < segmentos.length; i++) {
        console.log(`${segmentos[i]}`)
    }
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
    palabra = ["radar", "oso", "casa"]
    for (let p of palabra) {
        let palabras_invertida = "";

        for (let i = p.length - 1; i >= 0; i--) {
            palabras_invertida += p[i]
        }

        if (p === palabras_invertida) {
            console.log(`La palabra "${p}" es palindroma`)
        } else {
            console.log(`Tu palabra ${p} no es palindroma`)
        }
    }
}


// Mayor numero de Caracteres
function ejercicio_18() {        //0                                     //1
    const palabra = [["Me gusta el futbol", "Prefiero el baloncesto"], ["Hola", "Adios"]]
    //0                     //1                 //0      //1
    for (const [a, b] of palabra) {

        if (a.length > b.length) {
            console.log(`"${a}" tiene mas caracteres ( ${a.length}) que "${b}" (${b.length})`)
        } else if (a.length < b.length) {
            console.log(`La palabra ${b} tiene mas caracteres  ${b.length} que ${a} ${a.length}`)
        } else {
            console.log(`Ambos tienen los mismos caracteres`)
        }


    }
}

//========================================================================
// -------- BLOQUE 3 --------
//========================================================================

// 1.

//========================================================================
// -------- BLOQUE 4 --------
//========================================================================

// 1. 