
window.addEventListener("load", function() {

    var imgPath = "https://image.tmdb.org/t/p/original"
  
      fetch("https://api.themoviedb.org/3/movie/popular?api_key=95b9e84c8317f917cebb3f232298f131&language=en-US&page=1")
  

        .then(function(respuesta) {
          return respuesta.json()
        })
      // .then() recibe un callback, el cual hará lo que le pidamos con la respuesta obtenida, que está en formato JSON
        .then(function(informacion) {
          console.log("populares");
          console.log(informacion.results);
  
          // var arrayDePeliculas almacena TODA la información obtenida
          var arrayDePeliculas = informacion.results
  
  
  
          for (var i = 0; i < 100; i++) {
  
            // Para obtener la información que me interese obtener busco en el objeto arrayDePeliculas las propiedades que me interesan (el nombre de cada propiedad es distinto para cada api)
  
            var id = arrayDePeliculas[i].id
            var title = arrayDePeliculas[i].title
            var imagenpelicula = arrayDePeliculas[i].poster_path
            var li = ''
  
            // += agrega un valor a la variable
  
            li += '<li>'
            li += '<a href="/movies/detalle?idDePelicula=' + id +'"'
            li += '<h2>' + title + '</h2>'
            li += '<img src='+ imgPath + imagenpelicula+ '>'
            li += '</a>'
            li += '</li>'
  
            // El objeto document representa el html que será cargado en el navegador
            // ¿Cómo CAPTURAMOS los elementos existentes en el HTML? document.querySelector("lo que queremos capturar");
            // ¿Cuál es el objetivo de capturar algún elemento de HTML? Modificar algo
            // innerText: agregar cadenas de texto como contenido de una etiqueta HTML
            // innerHTML: reemplazar el contenido de una etiqueta HTML
  
            // En home.html en el main hay una 3 secciones (puntaje, populares, proximamente). Ahora nos concentramos en la sección de id populares
            // Las clases de dicha sección corresponden a el slideshow obtenido de uikit
            // (HTML) Hay una ul vacía (clase: ul-popular) que es a donde se agregaran las li al ejecutarse la función
  
            var ul = document.querySelector(".ul-popular")
            ul.innerHTML += li
          }
  
         })
        // .catch() atrapará los errores, si los hubiere, e imprimirá en consola en tipo de error obtenido
         .catch(function(error) {
           console.log("Error: " + error);
         })
  
   })
  