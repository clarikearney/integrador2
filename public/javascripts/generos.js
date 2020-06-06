

window.addEventListener("load", function() {
  
    var imgPath = "https://image.tmdb.org/t/p/original"
    var idGenero = new URLSearchParams(location.search).get("id")
  
      fetch("https://api.themoviedb.org/3/discover/movie?api_key=95b9e84c8317f917cebb3f232298f131&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" + idGenero) //
  
        .then(function(respuesta) {
          return respuesta.json()
            })
  
        // .then() recibe un callback, el cual hará lo que le pidamos con la respuesta obtenida, que está en formato JSON
  
        .then(function(informacion) {
          console.log(informacion.results);
  
          // var arrayDePeliculas almacena TODA la información obtenida
          var arrayDePeliculas = informacion.results
          console.log(arrayDePeliculas);
  
          for (var i = 0; i < 100; i++) {
  
            var id = arrayDePeliculas[i].id
            var title = arrayDePeliculas[i].title // adaptar los puntos a las caract. de la API
            var imagenpeli= arrayDePeliculas[i].poster_path // adaptar los ptos a las caract. de la API
            var li = ''
  
            // += agrega un valor a la variable
  
            li += '<li>'
            li += '<a href="detalle?idDePelicula=' + id +'"'
            li += '<h2>' + title + '</h2>'
            li += '<img src=' + imgPath + imagenpeli + '>'
            li += '</a>'
            li += '</li>'
           
            var ul = document.querySelector(".pelis-genero")
            ul.innerHTML += li
  
          }
        })
  
        // .catch() atrapará los errores, si los hubiere, e imprimirá en consola en tipo de error obtenido
        .catch(function(error) {
          console.log("Error: " + error);
        })
  
  })
  