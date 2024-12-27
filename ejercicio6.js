/* Agrupa las películas de Star Wars por década de lanzamiento en un objeto donde las claves son las décadas y los valores son arrays de películas.

Utiliza bucles para lograrlo e imprime el objeto final por consola. */

const starWarsMovies = [
    { title: 'A New Hope', releaseYear: 1977 },
    { title: 'The Empire Strikes Back', releaseYear: 1980 },
    { title: 'Return of the Jedi', releaseYear: 1983 },
    { title: 'The Phantom Menace', releaseYear: 1999 },
    { title: 'Attack of the Clones', releaseYear: 2002 },
    { title: 'Revenge of the Sith', releaseYear: 2005 },
    { title: 'The Force Awakens', releaseYear: 2015 },
    { title: 'The Last Jedi', releaseYear: 2017 },
    { title: 'The Rise of Skywalker', releaseYear: 2019 },
    { title: 'Rogue One', releaseYear: 2016 },
    { title: 'Solo', releaseYear: 2018 }
  ];

  let sortedMovies = {};
  //creamos un array con las decadas para posteriormente añadirlas como claves del objeto.
  const decades = ["70s", "80s", "90s","2000s","2010s"]
  
  for (const decade of decades) {
    if(!sortedMovies[decade]){
      sortedMovies[decade] = [];
    }
  }
  for (const movie of starWarsMovies) {
    if(movie.releaseYear >= 1970 && movie.releaseYear < 1980){
      sortedMovies["70s"].push(movie);
    } else if (movie.releaseYear >= 1980 && movie.releaseYear < 1990){
      sortedMovies["80s"].push(movie);
    } else if (movie.releaseYear >= 1990 && movie.releaseYear < 2000){
      sortedMovies["90s"].push(movie);
    } else if (movie.releaseYear >= 2000 && movie.releaseYear < 2010){
      sortedMovies["2000s"].push(movie);
    } else {
      sortedMovies["2010s"].push(movie);
    }
    
  }

  console.log(sortedMovies);
  