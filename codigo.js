//Funcion para limpiar la pantalla

function limpiar() {
    document.getElementById('display').value = ''; 
}

//Funcion para agregar caracteres a la pantalla

function addPantalla(value) {
    document.getElementById('display').value += value;
}

// Función para calcular el resultado
function resultado() {
    const valorPantalla = document.getElementById('display').value;
    let total;
    try {
        total =eval(valorPantalla);
    } catch (error) {
        total = 'Error';
    }

    document.getElementById('display').value = total;
}