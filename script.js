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
function ejercicio_4() {
    const cadena_1 = "Garcia"
    const cadena_2 = "Perez"

    if (cadena_1.length < cadena_2.length) {
        console.log(`"${cadena_1}" tiene mas letras`)
    } else {
        console.log(`"${cadena_2}" tiene mas letras`)
    }
}

// 5. Iniciales de un nombre completo
function ejercicio_5() {
    const nombre_completo = "Ana Maria Torres"
    const segmentos = nombre_completo.split(" ")
    let inciales = ""

    for (let i = 0; i < segmentos.length; i++) {
        inciales += `${segmentos[i][0]}.`
    }

    console.log(`${inciales}`)
}

// 6. Reemplazo de caracteres
function ejercicio_6() {
    let palabra = "Ingenieria"
    const letra = "e"
    const reemplazo = "3"
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
    let fruta = ""
    let frutas = []

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
    let frase = ""
    let frases = []
    let veces = 0

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
        console.log(`La letra "${letra}" se repite ${veces} veces en la frase #${i+1} "${frases[i]}".`)
        veces = 0
    }
}

// 3. Invertir varios textos
function ejercicio_13() {
    let texto = ""
    let textos = []
    let texto_invertido = ""

    while (true) {
        texto = prompt("Ingresa un texto:") // dejar vacio para dejar de agregar
        if (texto != "") {
            textos.push(texto)
        } else {
            break
        }
    }

    for (let i = 0; i < textos.length; i++) {
        for (let j = textos[i].length - 1; j >= 0; j--) {
            texto_invertido += textos[i][j]
        }

        console.log(`${textos[i]} -> ${texto_invertido}`)
        texto_invertido = ""
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