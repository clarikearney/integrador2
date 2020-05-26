

window.addEventListener("load", function() {
  
  var imgPath = "https://image.tmdb.org/t/p/original"
  var queryString = new URLSearchParams(window.location.search)
  var buscador = queryString.get("query")
  
  
      fetch("https://api.themoviedb.org/3/search/movie?api_key=95b9e84c8317f917cebb3f232298f131&language=en-US&query=" + buscador + "&page=1&include_adult=false")
  
      // Fetch esta basado en promesas, devuelve la promesa de suministrar la información solicitada en algún momento
      // Recibe como primer parámetro la URL del endpoint al cual estamos haciendo el llamado
  
        .then(function(respuesta) {
          return respuesta.json()
        })
        .then(function(informacion) {
          console.log(informacion.results);
        // .then() recibe un callback, el cual hará lo que le pidamos con la respuesta obtenida, que está en formato JSON
          var arrayDePeliculas = informacion.results
          console.log(arrayDePeliculas);
  
          for (var i = 0; i < 10; i++) {
  
            var id = arrayDePeliculas[i].id
            var title = arrayDePeliculas[i].title
            var imagenpelicula = arrayDePeliculas[i].poster_path
            var generopelicula = arrayDePeliculas[i].genre_ids
            var lenguajepelicula = arrayDePeliculas[i].original_language
            var imagenpelicula = arrayDePeliculas[i].poster_path
            var li = ''
  
            li += '<li>'
            li += '<a href="detalle?idDePelicula=' + id +'"'
            li += '<h2>' + title + '</h2>'
            li += '<img src='+ imgPath + imagenpelicula+ '>'
            li += '</a>'
            li += '</li>'

           var ul = document.querySelector(".detalle")
           ul.innerHTML += li
          }
        })
        .catch(function(error) {
          console.log("Error: " + error);
          // .catch() atrapará los errores, si los hubiere, e imprimirá en consola en tipo de error obtenido
        })
  
        // En buscador.html el buscador esta en el header, es un form (clase: form_envio) con method=get y action=buscador.html
        // Dentro del formulario hay un hipervínculo (ícono lupa) con clase link_envio
        // Hay que capturar la lupa (clase: link_envio) y hacer que al hacer click (.onclick) se envíe el formulario
  
  
        var link_envio = document.querySelector(".link_envio")
        link_envio.onclick = function () {
  
  
          var formulario = document.querySelector(".form_envio")
          formulario.submit();
        }
  })
  