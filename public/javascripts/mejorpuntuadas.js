window.addEventListener("load", function() {

  var imgPath = "https://image.tmdb.org/t/p/original"

    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=95b9e84c8317f917cebb3f232298f131&language=en-US&page=1")

    .then(function(respuesta) {
      return respuesta.json()
    })

        // .then() recibe un callback, el cual hará lo que le pidamos con la respuesta obtenida, que está en formato JSON
    .then(function(informacion) {
        console.log("puntaje");
        console.log(informacion.results);

        // var arrayDePeliculas almacena TODA la información obtenida
        var arrayDePeliculas = informacion.results
        console.log(arrayDePeliculas);

        for (var i = 0; i < 10; i++) {

          var id = arrayDePeliculas[i].id
          var title = arrayDePeliculas[i].title
          var imagenpelicula = arrayDePeliculas[i].poster_path
          var li = ''

            // += agrega un valor a la variable

          li += '<li>'
          li += '<a href="detalle?idDePelicula=' + id +'"'
          li += '<h2>' + title + '</h2>'
          li += '<img src='+ imgPath + imagenpelicula+ '>'
          li += '</a>'
          li += '</li>'


          // En home.html en el main hay una 3 secciones (puntaje, populares, proximamente). Ahora nos concentramos en la sección de id puntaje
          // Las clases de dicha sección corresponden a el slideshow obtenido de uikit
          // (HTML) Hay una ul vacía (clase: ul-puntaje) que es a donde se agregaran las li al ejecutarse la función

          var ul = document.querySelector(".ul-puntaje")
          ul.innerHTML += li

        }
      })
      // .catch() atrapará los errores, si los hubiere, e imprimirá en consola en tipo de error obtenido
      .catch(function(error) {
        console.log("Error: " + error);
      })

})