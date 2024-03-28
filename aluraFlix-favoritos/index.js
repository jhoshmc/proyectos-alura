// Crear un botón para eliminar una película en la pantalla;
// Además de agregar la imagen de la película, también añadir el nombre a través de otro input;
// Guardar todas las películas añadidas en una lista/array y recorrer esa lista cada vez que quieras imprimir o eliminar la película.
// const arrayPeliculas = [];
const listaNombres = [];
const listaTrailers = [];
function agregarPelicula() {
  let name = document.getElementById("namePelicula").value;
  let pelicula = document.getElementById("pelicula").value;
  let trailer = document.getElementById("trailer").value;
  if (pelicula.endsWith("jpg") || pelicula.endsWith("jpeg")) {
    // document.getElementById("mendajeDeError").innerHTML = "";
    // listaNombres.push(name);
    arrayPeliculas.push(pelicula);
    listaTrailers.push(trailer);

    limpiarCampos();
    console.log(arrayPeliculas);
    mostarPelicula();
  } else {
    document.getElementById("mensajeDeError").innerHTML =
      "Dirección de imagen no válida, inténtalo de nuevo";
    limpiarCampos();
  }
}
function mostarPelicula() {
  let listaPeliculas = document.getElementById("listaPeliculas");
  listaPeliculas.innerHTML = "";
  for (let i = 0; i < arrayPeliculas.length; i++) {
    listaPeliculas.innerHTML += `<a href="${listaTrailers[i]}" target="_blank"><img src="${arrayPeliculas[i]}"></a>`;
  }
}
function limpiarCampos() {
  document.getElementById("pelicula").value = "";
  // document.getElementById("namePelicula").value = "";
  document.getElementById("trailer").value = "";
}
