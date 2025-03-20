const film = {
    title: "Killing of Flower Moon",
    director: "Martin Scorsese",
    times: ["15:35"],
    certificate: "15",
    duration: 112,
  }; 
  //console.log(film.title, "<-------film.title ");
 

  const filmCard = document.createElement("section");
  const title = document.createElement("h1");
  const director =document.createElement("p");
  director.textContent=film.director;

  title.textContent = film.title;
  filmCard.appendChild(title);
  filmCard.appendChild(director);

  //filmCard.textContent = film.title;
  //console.log(document.body);
  document.body.appendChild(filmCard);
