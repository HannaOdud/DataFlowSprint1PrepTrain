//alert("alert!");
const film1 = {
    title: "Killing of Flower Moon",
    director: "Martin Scorsese",
    times: ["15:35"],
    certificate: "15",
    duration: 112,
  };
const film2 = {
  title: "Typist Artist Pirate King",
  directory: "Carol Morley",
  times: ["15:00", "20:00"],
  certificate: "12A",
  duration: 108,
} 


  //const filmCard = document.createElement("section");
 // const title = document.createElement("h1");
  //const director =document.createElement("p");
  //director.textContent=film.director;

  //title.textContent = film.title;
  //filmCard.appendChild(title);
 // filmCard.appendChild(director);

  //document.body.appendChild(filmCard);
  //console.log(film.title, "<----film title");

  
//How can we reuse functionality (we may creat function)
function createFilmCard(film) {
  const filmCard = document.getElementById('film-card-template')
  .content.cloneNode(true);

  filmCard.querySelector("h3").textContent = film.title;
  filmCard.querySelector('p').textContent = film.director;
  console.log(filmCard);
  return filmCard;

}
document.body.append(createFilmCard(film1),createFilmCard(film2) );