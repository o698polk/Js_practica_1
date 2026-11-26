
// Función para obtener los números ingresados
function obtenerNumeros() {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);

    if (isNaN(numero1) || isNaN(numero2)) {
        document.getElementById("resultado").textContent =
            "Por favor, ingresa los dos números.";
        return null;
    }

    return { numero1, numero2 };
}

// Función para sumar
function sumar() {
    let datos = obtenerNumeros();

    if (datos === null) return;

    let resultado = datos.numero1 + datos.numero2;

    document.getElementById("resultado").textContent = resultado;
}

// Función para multiplicar
function multiplicar() {
    let datos = obtenerNumeros();

    if (datos === null) return;

    let resultado = datos.numero1 * datos.numero2;

    document.getElementById("resultado").textContent = resultado;
}