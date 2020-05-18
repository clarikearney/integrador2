
// js que me tira el detalle de las peliculas con toda la info

window.addEventListener("load", function() {
  
    var imgPath = "https://image.tmdb.org/t/p/original"
    var idDePelicula = new URLSearchParams(window.location.search).get("idDePelicula")
  
   // INICIO BLOQUE 1 - Leer el array de storage
  
     // Paso 1 - Leo de localStorage
     // Web Storage: Almacenar información en el navegador del usuario (almacena en el cliente)
     // Hay dos métodos, localStorage o sessionStorage
     // localStorage guarda info sin tiempo de expiración y almacena strings
     // sessionStorage guarda información mientras se mantenga abierto el navegador
  
           // local storage es una caja, adentro guardo valores para que los pueda identificar
           // métodos de localStorage
           // getItem(): obtiene valores del objeto localStorage que tienen que tener un nombre o key asociada ("nombre",nombre)
  
           // la función que aparece abajo de todo dice que cada vez que el
           // usuario se loguea, tiene que borrarse el botón y agregar el nombre, eso implica que cuando se recarga la página se borra la información cargada por el usuario(cuando pasas de la home a la página de favoritos, por ejemplo, se borra la información del login). Por esta razón lo primero que tiene que aparecer en login.js es if (localStorage.getItem("nombre") != null) para que cada vez que no haya nada escrito en los campos del formulario, tienen que llenarse los mismos con la información almacenada en localStorage (ejecutarse la función)
  
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
     // CIERRA BLOQUE 1
  // procedo a hacer el fetch, los then y los catch de detallepeli
  
  
      fetch("https://api.themoviedb.org/3/movie/" + idDePelicula + "?api_key=95b9e84c8317f917cebb3f232298f131&language=en-US")
    
      .then(function(respuesta) {
          return respuesta.json()
        })
  
        // .then() recibe un callback, el cual hará lo que le pidamos con la respuesta obtenida, que está en formato JSON
  
        .then(function(informacion) {
          console.log(informacion);
  
        // var pelicula contiene toda la información
         var pelicula = informacion
  
            var id = pelicula.id
            var title = pelicula.title
            var imagenpeli = pelicula.poster_path
            var arrayDeGeneros = pelicula.genres
            var sinopsis = pelicula.overview
            var lenguajepeli = pelicula.original_language
            var fechaEstreno = pelicula.release_date
  
         var li = ''
         // += agrega un valor a la variable
          li += '<li>'
          li += '<h2>' + title + '</h2>'
          li += '<img src=' + imgPath + imagenpeli + '>'
          li += '<h4>' + sinopsis + '</h4>'
          li += '<h4>' + "Fecha de estreno: " + fechaEstreno + '</h4>'
          li += '<h4>' + "Lenguaje: " + lenguajepeli + '</h4>'
          li += '<h3>'
          // como los generos estan en un array
          // ¿Cómo obtengo la cantidad de elementos de un array? .length
          // Si  queremos obtener toodas la informacion de lo que el usuario seleccione (ya sea una palabra en el buscador, un género, la información del detalle de una película, las películas de mayor puntaje, etc.) tenemos que hacer .length
          for (var i=0; i < arrayDeGeneros.length; i++){
                li += '<a href="generos?id=' + arrayDeGeneros[i].id + '">'
                li += arrayDeGeneros[i].name
              
                if (i < arrayDeGeneros) {
                  li += ' - '
                }
                li += '</a>'
          }
          li += '</h3>'
          li += '</li>'
  
          // (HTML) Hay una ul vacía (clase: detalle-peli) que es a donde se agregaran las li al enviar el formulario
  
          var ul = document.querySelector(".detalle-peli")
          ul.innerHTML += li
  
  
  
   //INICIO BLOQUE 2 - si la peli ya era favorita que aparezca pintada la estrella
   // indexOf retorna el primer índice en el que se puede encontrar un elemento dado en el array, o retorna -1 si el elemento no está presente
 
        if (favoritas.indexOf(idDePelicula) >= 0 ) {
          document.querySelector(".estrellita").style.backgroundColor = "gold"
        }
         // FIN BLOQUE 2
  
         // INICIO BLOQUE 3 - que pasa al clikear la estrella
         // Dentro de un span hay un botón (clase:estrellita)
         // Hay que capturar el botón para que al hacer click (.onclick) se ejecute la función
  
         document.querySelector(".estrellita").onclick = function () {
           // Bloque 3 A - Modifico el array
  
           if (favoritas.indexOf(idDePelicula) >= 0 ) {
             // ¿Cómo puedo obtener la posición de un elemento en un array?
             // El método indexOf retorna el primer índice en el que se puede encontrar un elemento dado en el array, o retorna -1 si el elemento no esta presente
             // hacemos favoritas.indexOf para que si encuentra (es >= 0 o distinto de -1) ese elemnto en el array de las películas favoritas
  
            // la quito // cuando hago click en la estrella, que pase a blanco
  
            var pos = favoritas.indexOf(idDePelicula)
            favoritas.splice(pos,1)
            document.querySelector(".estrellita").style.backgroundColor = "white"
          } else { // caso contrario, que siga estando pintada
             favoritas.push(idDePelicula)
             // ¿Cómo agregar un elemento al final de un array?
             // El método push () añade uno o más elementos al final de un array y devuelve la nueva longitud del array
          document.querySelector(".estrellita").style.backgroundColor = "gold"
  
           }
           // FIN BLOQUE 3A
  
           // BLOQUE 3B
  // convierte un objeto o valor de JavaScript en una cadena de texto JSON (vuelve a empaquetar el json)
           var json = JSON.stringify(favoritas)
  // esta linea nos guarda la data en el almacenamiento local actual
  // local storage es una caja, adentro guardo valores para que los pueda identificar
  // métodos de localStorage
  // setItem(): almacena valores en el objeto localStorage que tienen que tener un nombre por eso es setItem ("nombre",nombre)
  // localStorage.setItem("userName", "Juana"); setea atributo userName
           localStorage.setItem("peliculasFavoritas", json)
  
           // FIN BLOQUE 3B
         }
      })
         // FIN BLOQUE 3
        .catch(function(error) {
          console.log("Error: " + error);
        })
  
  /// recomendadas
  
  // Recibe como primer parámetro la URL del endpoint al cual estamos haciendo el llamado
  
  fetch("https://api.themoviedb.org/3/movie/" + idDePelicula + "/recommendations?api_key=95b9e84c8317f917cebb3f232298f131&language=en-US&page=1")
  
    // .then() recibe un callback, el cual retornará la respuesta del llamado en formaro JSON
  
    .then(function(respuesta) {
      return respuesta.json()
    })
  
      // .then() recibe un callback, el cual hará lo que le pidamos con la respuesta obtenida, que está en formato JSON
  
    .then(function(informacion) {
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
  
        var ul = document.querySelector(".recomendaciones")
  
        // (HTML) Hay una ul vacía (clase: recomendaciones) que es a donde se agregaran las li al enviar el formulario
  
        ul.innerHTML += li
    }
  })
    // .catch() atrapará los errores, si los hubiere, e imprimirá en consola en tipo de error obtenido
    .catch(function(error) {
      console.log("Error: " + error);
    })
  })