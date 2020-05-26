

window.addEventListener("load",function() {

    var imgPath = "https://image.tmdb.org/t/p/original"
  
    // creo una variable (jsonFavoritas) que almacene las películas favoritas. Para eso busco las películas que el usuario seleccionó como favoritas.
  
    var jsonFavoritas = localStorage.getItem("peliculasFavoritas")
  
    // si json me dice que no tiene favoritas (== indica igualdad)
    if (jsonFavoritas == null) {
      // creo un array de favoritas
      var favoritas = []
    } else {
      // Paso 2 - Desempaqueto el json
      // Método parse toma un string en formato JSON y lo transforma en un objeto literal
      var favoritas = JSON.parse(jsonFavoritas)
  
    }
      // ¿Cómo obtengo la cantidad de elementos de un array? .length
  for (var i = 0; i < favoritas.length; i++) {
  
    fetch("https://api.themoviedb.org/3/movie/" + favoritas[i] + "?api_key=95b9e84c8317f917cebb3f232298f131&language=en-US&query&page=1&include_adult=false")
  
      .then(function(information) {
        return information.json()
      })
  
        // .then() recibe un callback, el cual hará lo que le pidamos con la respuesta obtenida, que está en formato JSON
  
      .then(function(pelicula) {
     
        console.log(pelicula.title, pelicula.id, pelicula.poster_path);
        var li= ''
  
        // += agrega un valor a la variable
  
        li += '<li>'
        li += "<a href='favoritas?idDePelicula=" + pelicula.id + "'>"
        li += '<p>' + pelicula.title + '</p>'
        li += '<img src=' + imgPath + pelicula.poster_path + '>'
        li += '</a>'
        li += '</li>'
  
        // (HTML) Hay una ul vacía (clase: fav) que es a donde se agregaran las li al ejecutarse la función
        var ul = document.querySelector("ul.fav")
        // aca estamos capturando la ul con clase fav de favoritas.html, y es a donde se va a insertar la info nueva
        console.log(ul);
        ul.innerHTML += li
      })
  
      // .catch() atrapará los errores, si los hubiere, e imprimirá en consola en tipo de error obtenido
      .catch(function(error) {
       console.log("Error: " + error);
     })
   }
  })


  