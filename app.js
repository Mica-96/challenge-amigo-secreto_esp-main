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


// Función para mostrar la lista de amigos
function mostrarLista() {
  // 1. Obtener el elemento de la lista
  let lista = document.getElementById("listaAmigos");

  // 2. Limpiar la lista existente
  lista.innerHTML = "";

  // 3. Iterar sobre el arreglo amigos y agregar elementos <li>
  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}


// Función para sortear un amigo secreto
function sortearAmigo() {
  // 1. Validar que haya amigos en el array
  if (amigos.length === 0) {
    alert("Agrega al menos un nombre antes de sortear.");
    return;
  }

  // 2. Generar un índice aleatorio
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // 3. Obtener el nombre sorteado
  let amigoSorteado = amigos[indiceAleatorio];

  // 4. Mostrar el resultado
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}