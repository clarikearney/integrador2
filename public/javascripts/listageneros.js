window.onload = function() {

    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=95b9e84c8317f917cebb3f232298f131&language=en-US")
  
    // .then() recibe un callback, el cual retornará la respuesta del llamado en formaro JSON
    // return CORTA la ejecución y RETORNA (valores de retorno: valores devueltos por la función cuando se completa)
    // Generalmente, se usa un valor de retorno donde la función es un paso intermedio en un cálculo de algún tipo. Quieres llegar a un resultado final, que involucra algunos valores. Esos valores deben ser calculados por una función, que luego devuelve los resultados para que puedan usarse en la siguiente etapa del cálculo.
  
      .then(function(respuesta) {
        return respuesta.json()
      })
    
          .then(function(informacion) {
            console.log(informacion);
  
            // var generos almacena TODA la información de los géneros
            var generos = informacion.genres
  
            // ¿Cómo obtengo la cantidad de elementos de un array? .length
          for (var i = 0; i < generos.length; i++) {
      
            // Para obtener la información que me interese obtener busco en el objeto genero las propiedades que me interesan (nombre y id del género)
  
            var id = generos[i].id // adaptar los puntos a las caract. de la API
            var title = generos[i].name // adaptar los puntos a las caract. de la API
  
            document.querySelector("#desplegable").innerHTML += '<p> <a class="dropdown-menu" href=/movies/generos?id=' + id + '>' + title + '</a></p>'
  
          }
  
        })
        // .catch() atrapará los errores, si los hubiere, e imprimirá en consola en tipo de error obtenido
        .catch(function(error) {
          console.log("Error: " + error);
        })
  
  }