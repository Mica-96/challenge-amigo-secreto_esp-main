// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres
let amigos = [];


// Función para agregar un amigo
function agregarAmigo() {
  // 1. Capturar el valor del campo de entrada
  let input = document.getElementById("amigo");
  let nombre = input.value.trim();
 

  // 2. Validar la entrada
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

    // 3. Actualizar el array de amigos
  amigos.push(nombre);

  // 4. Limpiar el campo de entrada
  input.value = "";

  // Mostrar la lista actualizada
  mostrarLista();
}