console.log("hola");

const listaPeliculas = [
  {
    name: "harry potter",
    link: "https://es.web.img2.acsta.net/pictures/14/04/30/11/55/592219.jpg",
  },
  {
    name: "barbie",
    link: "https://pics.filmaffinity.com/Barbie-295661697-mmed.jpg",
  },
  {
    name: "star wars",
    link: "https://hips.hearstapps.com/hmg-prod/images/la-amenaza-fantasma-1575448990.jpg",
  },
  {
    name: "El señor de los anillos",
    link: "https://pics.filmaffinity.com/El_seanor_de_los_anillos_La_comunidad_del_anillo-952398002-large.jpg",
  },
];
//* agregar pelicula con push
listaPeliculas.push({
  name: "la momia",
  link: "https://w7.pngwing.com/pngs/213/102/png-transparent-the-mummy-fan-art-alcoholic-drink-tv-the-mummy-film-mummy-alcohol.png",
});
const rejex = /.*.jpg$/;
// document.write(
//   "<div class=container-movies>" +
//     listaPeliculas.map(
//       (pelicula) =>
//         `<article><img src= ${pelicula.link}> <span>${pelicula.name}</span></article>`
//     ) +
//     "</div>"
// );

document.write('<div class= "container-movies">');
let i = 0;
while (i < listaPeliculas.length) {
  //* desafio 2 saber si los links termnian en .jpg
  if (rejex.test(listaPeliculas[i].link)) {
    document.write('<article class="movie">');
    document.write(`<img src='${listaPeliculas[i].link}'>`);
    document.write(`<p>${listaPeliculas[i].name}</p>`);
    document.write("</article>");
  } else {
    document.write(
      `<br><p>la pelicula ${listaPeliculas[i].name} no cargó su imagen porque no termina en .jpg</p>`
    );
  }

  //  document.write(
  //    `<article><img src=${listaPeliculas[i].link}><p>${listaPeliculas[i].name}</p></article>`
  //  );
  i++;
}
document.write("</div>");
