
// El objeto window es lo primero que se carga en el navegador
window.addEventListener("load", function() {

    //tenemos una ruta/hipervínculo (queryString), entonces podemos acceder a datos del pedido mediante window.location.search
    // Un objeto implementando URLSearchParams puede directamente ser usado en una for...of estructura
  
    // El método GET se utiliza para pedir información de un recurso específico
    // Pedidos pueden ser cacheados, aparecen en historial
    // El query string se incluye en la URL conteniendo los datos a enviar (El ? comienza los datos de configuración de la página)
    //Considerando que queremos obtener un trailer y me interesa que los datos de lo que el usuario buscó estén visibles en la URL se utiliza el método GET en vez del método POST
  
  var idDePelicula = new URLSearchParams(window.location.search).get("idDePelicula")
  
  fetch("https://api.themoviedb.org/3/movie/" + idDePelicula +  "/videos?api_key=95b9e84c8317f917cebb3f232298f131&language=en-US")
  
  // .then() recibe un callback, el cual retornará la respuesta del llamado en formaro JSON
  
  .then(function(respuesta) {
     return respuesta.json()
   })
  
  
   .then(function(informacion) {
     console.log(informacion.results);
  
     // var arrayDePeliculas almacena TODA la información obtenida
  
     var arrayDePeliculas = informacion.results
     var key = informacion.results[0].key
  
     document.querySelector(".trailer-peli").src += key
  
   })
  
   // .catch() atrapará los errores, si los hubiere, e imprimirá en consola en tipo de error obtenido
  
   .catch(function(error) {
     console.log("Error: " + error);
   })
  })