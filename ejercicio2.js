/* Dada una lista de películas, cuenta cuántas son de antes del año 2000 y cuántas son posteriores, utilizando un bucle.

Imprime ambos conteos por consola. */

const movies = [
    { title: 'The Matrix', releaseYear: 1999 },
    { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
    { title: 'Inception', releaseYear: 2010 },
    { title: 'Jurassic Park', releaseYear: 1993 },
    { title: 'The Shawshank Redemption', releaseYear: 1994 },
    { title: 'Pulp Fiction', releaseYear: 1994 },
    { title: 'Avatar', releaseYear: 2009 },
    { title: 'The Dark Knight', releaseYear: 2008 },
    { title: 'Fight Club', releaseYear: 1999 },
    { title: 'Forrest Gump', releaseYear: 1994 }
  ];
  
  let counterBefore2000 = 0;
  let counterAfter2000 = 0;

  for (const movie of movies) {
    if(movie.releaseYear < 2000){
        counterBefore2000++
    } else {
        counterAfter2000++
    }
  }
  console.log(counterBefore2000);
  console.log(counterAfter2000);
  