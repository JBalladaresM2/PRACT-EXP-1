//========================================================================
// -------- BLOQUE 1 --------
//========================================================================

// 1. Contar caracteres de una palabra 
function contarcaracteres(palabra) { //aqui empieza la funcion (PROCESO)
    console.log(`La palabra : ${palabra} , tiene ${palabra.length} caracteres`) // (SALIDA)muestra el resultado final
}
function ejercicio_1() { //entrada
    palabra = prompt('Ingrese una palabra')//se pide la palabra al usuario
    contarcaracteres(palabra) //aqui se llama a la funcion que realizara el ejercicio con su parametro
}

// 2. Contar apariciones de una letra específica
function contarApariciones(frase, caracter) { //PROCESO
    let c = 0 //inicia un contador
    for (i = 0; i < frase.length; i++) { //ciclo que recorrera la palabra
        if (frase[i] == caracter) { //cuenta cuantas veces se repite el caracter
            c++
        }
    }   //SALIDA
    console.log(`la letra ${caracter} en la frase ${frase} se repite ${c} veces`) //muestra el resulado pedido
}
function ejercicio_2() { //Entrada
    frase = prompt("Ingrese la frase") //se pide la frase al usuario
    caracter = prompt("Ingrese el caracter que desea ver que se repite") //se pide el caracter 
    contarApariciones(frase, caracter) //llamamos a la funcion con los dos parametros
}

// 3. Invertir un texto
function invertir(texto) { //PROCESO
    let texto_invertido = "" //variable que tendra el texto invertido
    for (let i = texto.length - 1; i >= 0; i--) { //ciclo que recorrera la palabra
        texto_invertido += texto[i] //Aqui se genera el texto
    }
    console.log(`${texto_invertido}`) //SALIDA (Muestra el texto invertido)
}
function ejercicio_3() { //ENTRADA
    texto = prompt("Ingrese el texto") //se pide el texto a invertir
    invertir(texto) //Llamamos a la funcion con el parametro

}

// 4. Comparar longitudes de cadenas
// Entrada: dos cadenas de texto (ej: "Garcia", "Perez")
// Proceso: se comparan las longitudes de ambas cadenas
// Salida: se muestra en consola cuál cadena tiene más letras
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
// Entrada: un nombre completo en una cadena (ej: "Ana Maria Torres")
// Proceso: se separa el nombre en partes y se toman las primeras letras
// Salida: se muestran en consola las iniciales del nombre (ej: "A.M.T.")
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
// Entrada: una palabra (ej: "Ingenieria"), una letra a buscar (ej: "e"), y el reemplazo (ej: "3")
// Proceso: recorrer la palabra, reemplazando cada coincidencia de la letra indicada
// Salida: se muestra en consola la palabra con los reemplazos (ej: "Ing3ni3ria")
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
function ejercicio_11() { //ENTRADA
    debugger 
    palabras = [] //se genera el arreglo
    n = parseInt(prompt("Ingrese la cantidad de palabras")) //se pregunta por la cantidad de palabras
    for (j = 0; j < n; j++) { //ciclo para preguntar las palabras
        palabra = prompt(`Ingrese la palabra ${n + 1} :`) //se pregunta por la palabra
        palabras.push(palabra) //entra la palaba por el arreglo
    }
    for (i = 0; i < palabras.length; i++) { //ciclo que hare el proceso
        contarcaracteres(palabras[i]) //Funcion del ejercicio uno pero ahora funciona con el arreglo 
    }
}

// 2. Contar apariciones de una letra en varias frases
function ejercicio_12() {
    debugger
    serieFrases = [] //aca se genera un arreglo con las frases
    n = parseInt(prompt("Ingrese la cantidad de frases")) //se pregunta por las frases
    for (j = 0; j < n; j++) { //ciclo
        frases = prompt(`Ingrese la Frase ${j + 1} :`)//se pregunta por cada frase
        serieFrases.push(frases) //entra la frase en el arreglo
    }
    caracter = prompt("Ingrese el caracter") //se pregunta por el caracter 
    for (m = 0; m < serieFrases.length; m++) { //ciclo
        contarApariciones(serieFrases[m], caracter) // funcion del ejercicio 2
    }
}


// 3. Invertir varios textos
function ejercicio_13() { //ENTRADA
    textos = [] // arreglo con los textos
    n = prompt("Ingrese la cantidad de textos a invertir") //se pregunta por la cantidad de texto
    for (c = 0; c < n; c++) { //ciclo que preguntara la palabras
        palabra = prompt(`Ingrese la palabra ${c + 1} :`) //se inserta la palabra por el usuario
        textos.push(palabra) //la palabra entra en el arreglo
    }
    for (j = 0; j < textos.length; j++) { //ciclo que hare que funcione el ejercicio
        invertir(textos[j]) //funcion del ejercicio 3 
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
function CalcularPromedio(suma, cantidad) { //PROCESO
    promedio = suma / cantidad //se calcula el promedio
    console.log(`PROMEDIO FINAL : ${promedio}`) //SALIDA : se muestra el promedio
}

function ejercicio_21() { //ENTRADA
    const cantidad = 5 // Variable con la cantidad a dividir
    suma = 0
    for (i = 0; i < cantidad; i++) { //arreglo para preguntar por cada numero
        num = parseInt(prompt(`Ingrese el numero # ${i + 1} : `)) //se inserta el numero
        suma += num //se suma los numeros
    }
    CalcularPromedio(suma, cantidad) //se llama a la funcion con los arreglos
}

// 18. Contar cuántos de 5 números son impares.
function Impares(numero) { //PROCESO
    if (numero % 2 != 0) { //se calcula si el numero es impar
        return true       //retorna la respuesta
    }
}

function ejercicio_22() { //ENTRADA
    let numero, cantidad_impares = 0 //se asigna las variables
    const cantidad = 5 // variable con la cantidad

    for (let i = 0; i < cantidad; i++) { //ciclo que preguntara por cada numero
        numero = parseInt(prompt("Ingresa un numero:")) || 0 //se pregunta por el numero
        if (Impares(numero) === true) { //llamamos la funcion y se compara si el resultado es correcto
            cantidad_impares++ //contador de impares
        }
    }
//SALIDA
    console.log(`Cantidad de impares: ${cantidad_impares}`) //se muestra la cantidad de impares
}

// 19. Leer 5 edades y contar cuántos son mayores de edad.
function MayorDeEdad(edad) {
    if (edad >= 18) {
        return true
    }
}

function ejercicio_23() {
    let edad, cantidad_edades = 0 //variable de edad y cantidad de mayores de edad
    const cantidad = 5 //variable para solo preguntar 5 edades

    for (let i = 0; i < cantidad; i++) { //ciclo que pregunta por las edad
        edad = parseInt(prompt("Ingresa una edad:")) || 0 //se inserta la edad //PROCESO
        if (MayorDeEdad(edad) === true) { //se llama a la funciono y compara si el resultado es correcto
            cantidad_edades++ //contador de edades mayores
        }
    }
//SALIDA
    console.log(`Mayores de edad: ${cantidad_edades}`) //muestra las edades
}

// 20. Buscar un valor en 4 números
// Entrada: un valor a buscar y 4 números ingresados por el usuario
// Proceso: comparar cada número con el valor buscado
// Salida: mensaje en consola si se encontró el valor
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


// 21. Concatenar 3 palabras
// Entrada: 3 palabras ingresadas por el usuario
// Proceso: unir las palabras en una sola cadena separadas por espacio
// Salida: mostrar en consola las palabras concatenadas
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


// 22. Calcular el cubo de 3 números
// Entrada: 3 números ingresados por el usuario
// Proceso: elevar cada número al cubo (numero ** 3)
// Salida: mostrar en consola el resultado del cubo de cada número
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
function multiplicar(n, num) {      // este codigo vamos a reciclar asi que lo estruturamos asi
    for (let i = 1; i <= num; i++) {
        console.log(` ${n}*${i} =${i * n}  `)  //abrimos un for para recorres la i y el numero que nos da el usuario
    }
}
function ejercicio_27() {
    n = parseInt(prompt("Ingrese un numero para q aparesca la tabla"))  //pedimos los datos al usuario
    num = parseInt(prompt("ingrese el limite de su tabla "))        // y el limite de la tabla
    multiplicar(n, num)
}

// 24. Calcular factorial 
function CalcularFactorial(num) {
    let r = 1                                           //ponemos el r=1 poque siempre empieza con 1 porque 0 es igual a nada
    for (let i = 2; i <= num; i++) {
        r *= i;                                 //a r le multimplicamos la i que esta recorriendo el ciclo
    }
    console.log(`Tu numero ${num}! =${r}`)      //te imprime el codigo
}

function ejercicio_28() {
    let num = parseInt(prompt("Ingrese el numero que quiere comprobar"))        //enviamos los datos a la funcion 
    CalcularFactorial(num)
}

// 25. leer si son pares
function leerPares(cantidad) {          // abrimos un let para guardar el arreglo
    let arreglo = []                    //abrimos el for para que no sea mayor a cantidad 
    for (let i = 0; i < cantidad; i++) {
        const num = parseInt(prompt(`Ingresa el numero ${i + 1} de ${cantidad}:`));
        arreglo.push(num)           //abrimos un prompt para pedir numeros y que envia al arreglo
    }

    for (let i = 0; i < arreglo.length; i++) { //abrimos otro for para recorrer el arreglo
        if (arreglo[i] % 2 === 0) {     //abrimos una condicional para si el arreglo es igual a 2 es par y que muestre
            console.log(`Par: ${arreglo[i]} y su posicion ${i}`)
        }
    }
}

function ejercicio_29() {
    leerPares(4)    //ponemos la cantidad y enviamos los datos
}

// 26. Sumar dos grupos
function Sumar(A, B, C) {   //abrimos un for para recorrer
    
    for (let i = 0; i < A.length; i++) { //le ponemos a la A el length y le enviamos a C con un psush sumando en el proceso
        C.push(A[i] + B[i]);

    }
    console.log(C);
}

function ejercicio_30() {
    const A = [2, 4, 6];
    const B = [1, 3, 5];    //le ponemos los datos y enviamos
    const C = [];
    Sumar(A, B, C);
}

//========================================================================
// -------- BLOQUE 4 --------
//========================================================================

// 17. Promedio de un arreglo
function ejercicio_31() { //ENTRADA
    let numero, numeros = [], suma = 0 // se asignan las variables

    while (true) {
        numero = parseInt(prompt("Ingresa un numero:")) || 0 //s pregunta por el numero
        if (numero === 0) {
            break
        }
        numeros.push(numero) //se ingresa el numero en el arreglo
    }

    const cantidad = numeros.length 

    for (let i = 0; i < cantidad; i++) { //ciclo que sumara los numeros de cada arreglo
        suma += numeros[i]
    }

    CalcularPromedio(suma, cantidad) //funcion con el proceso del ejercicio 21
}

// 18. Contar impares en un arreglo
function ejercicio_32() { //ENTRADA
    let numero, numeros = [], cantidad_impares = 0 //se asignan valores

    while (true) {
        numero = parseInt(prompt("Ingresa un numero:")) || 0 //se ingresa un numero
        if (numero === 0) { 
            break
        }
        numeros.push(numero) //entra el numero en el arreglo
    }

    for (let i = 0; i < numeros.length; i++) { //funcion que preguntara por cada numero
        if (Impares(numeros[i]) === true) { //funcion con el proceso (se preguntara si el resultado es correcto)
            cantidad_impares++ //contador de impares
        }
    }

    console.log(`Cantidad de impares: ${cantidad_impares}`) //Muestra los impares
}

// 19. Mayores de edad en un arreglo
function ejercicio_33() { //entrada
    let edad, edades = [], cantidad_edades = 0 //se asignan las variables

    while (true) {
        edad = parseInt(prompt("Ingresa una edad:")) || 0 //se pregunta por la edad
        if (edad === 0) {
            break
        }
        edades.push(edad) //la edad entra en el arreglo
    }

    for (let i = 0; i < edades.length; i++) { //ciclo que recorrera por cada edad
        if (MayorDeEdad(edades[i]) === true) { //verifica si es mayor de edad con la funcion del ejercicio 23
            cantidad_edades++ //contador de mayor de edad
        }
    }

    console.log(`Mayores de edad: ${cantidad_edades}`) //muestra el resultado 
}

// Funcion para crear arreglos numericos o de texto
function CrearArreglo(tipo) {
    let arreglo = [], valor
    while (true) {
        if (tipo === "numerico") {
            valor = parseInt(prompt("Ingresa un numero:") || 0)
        } else if (tipo === "texto") {
            valor = prompt("Ingresa una palabra:") || ""
        }
        if (valor === "" || valor === 0) {
            break
        }
        arreglo.push(valor)
    }
    return arreglo
}

// 20. Buscar valor en un arreglo
// Entrada: un valor a buscar y una lista de números ingresados por el usuario (finaliza con 0)
// Proceso: almacenar los números en un arreglo, recorrerlo y comparar cada elemento con el valor buscado
// Salida: mensaje en consola si se encontró el valor
function ejercicio_34() {
    const valor = parseInt(prompt("Ingresa el valor a buscar"))
    const numeros = CrearArreglo("numerico")

    for (let i = 0; i < numeros.length; i++) {
        BuscarValor(numeros[i], valor)
    }
}

// 21. Concatenar palabras de un arreglo
// Entrada: palabras ingresadas por el usuario (finaliza con cadena vacía)
// Proceso: almacenar las palabras en un arreglo, luego unirlas en una sola cadena separadas por espacio
// Salida: mostrar en consola las palabras concatenadas
function ejercicio_35() {
    let concatenado = ""
    const palabras = CrearArreglo("texto")

    for (let i = 0; i < palabras.length; i++) {
        concatenado = ConcatenarPalabras(palabras[i], concatenado)
    }

    console.log(`Palabras concatenadas: "${concatenado}"`)
}


// 22. Cubo de elementos en arreglo
// Entrada: números ingresados por el usuario (finaliza con 0)
// Proceso: almacenar los números en un arreglo y calcular el cubo de cada elemento
// Salida: mostrar en consola el cubo de cada número
function ejercicio_36() {
    const numeros = CrearArreglo("numerico")
    for (let i = 0; i < numeros.length; i++) {
        CalcularCubo(numeros[i])
    }
}

// 23. Tabla de multiplicar de elementos
function ejercicio_37() {           //le ponemos un for porque solo quiero que reciba dos numeros 
    let numeros = [];
    for (let i = 0; i < 2; i++) {
        let n = prompt(`Ingrese un numero ${i + 1}`) // esos dos numeros los mandamos con push
        numeros.push(n);
    }
    const limite = parseInt(prompt("Ingrese el limite"), 10)    //le pedimos el limite de la tabla
    for (let i = 0; i < numeros.length; i++) {
        multiplicar(numeros[i], limite) // recorremos el codigo con un nuevo for y mandamos los datos a la funcion n°27
    }
}


// 24. Factorial de elementos en arreglo
function ejercicio_38() {
    let numeros = [];               //abrimos otro let para el arreglo
    for (let i = 0; i < 2; i++) {
        let n = prompt(`Ingrese un numero ${i + 1}`)  //le ponemos un for xq solo quiero que sean dos numeros que calcule
        numeros.push(n);
    }
    for (let i = 0; i < numeros.length; i++) { //recorremos el arreglo y mandamos los datos a la funcion N° 28 que ya tiene el procedimiento
        CalcularFactorial(numeros[i]);
    }
}

// 25. Copiar pares a otro arreglo
function ejercicio_39() {                       //similar al anterior abrimos un let para guardar el areglo
    let pares = [];
    let cantidad = parseInt(prompt("Ingrese la cantidad que va a ingresar"))    //pedimos al usuario un limite de numeros 
    for (let i = 0; i < cantidad; i++) {
        let n = parseInt(prompt(`Ingrese un numero ${i + 1}`)) //creamos un for para respetar ese limite 
        if (n % 2 === 0) {                                      //abrimos una condicional que si n es igual a 0 lo pone en el push 
            pares.push(n);                                   // sino lo ignora 
        }
    }
    console.log(`Numeros encontrados pares ${pares}`) // le ponemos una condicoanl que si pares es mayor a 0 meta los datos a la funcion n°29
    if (pares > 0) {
        leerPares(pares.length)
    }
}

// 26. Suma de dos arreglos
function ejercicio_40() {
    const A = [];
    const B = [];               //creamos 3 const 2 para guaradr nuestros arreglos y el otro para el resultado
    let C = [];

    let total = parseInt(prompt("Cuantos numeros va ingresar"))  //ponemos el limite de numeros quq queramos

    for (let i = 0; i < total; i++) {
        let num1 = parseInt(prompt(`Ingrese un numero ${i + 1}para el primer arreglo`)) //abrimos un for por cada arreglo para el A y para el B
        A.push(num1);
    }
    for (let i = 0; i < total; i++) {
        let num2 = parseInt(prompt(`Ingrese un numero ${i + 1} para el segundo arreglo `)) //E s lo mismo solo cambia el A por el B
        B.push(num2);
    }

    Sumar(A, B, C)  //mandamos los datos a la funcion N°30 1ue ya tiene el proceso
}