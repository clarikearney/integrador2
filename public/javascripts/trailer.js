// UX (User Experience)
// ¿Qué siente mientras interactúa?
// Es aquello que una persona percibe al interactuar con un producto o servicio. Logramos una buena UX al enfocarnos en diseñar productos útiles, usables y deseables, lo cual influye en que el usuario se sienta satisfecho, feliz y encantado. */
//
// Usabilidad o UI
// Con lo que interactúa
// La Usabilidad es un atributo de una buena experiencia de usuario y la UI o Interfaz del Usuario es con lo que se interactúa.
//
// Javascript aporta dinamismo a la UI para hacer más agradable la UX
// Permite validar datos y verificar los mismos antes de enviarlos al servidor


// Event Listeners
// Syntax: element.addEventListener(event,function)
// cuando suceda el evento (load) se va a ejecutar la función
// addEventListener permite que se ejecute más de un evento a la vez (window.onload sólo permite que se ejecute un evento al cargar la página)
// un evento es algo que pasa en el navegador o q es ejecutado x usuario

// El objeto window es lo primero que se carga en el navegador
window.addEventListener("load", function() {

    // ¿Qué son las funciones?
    // Secuencia lógica de instrucciones que realizan acciones (bloque de código asignado para hacer una tarea)
  
    // una variable es como si fuera una caja que contiene lo que quisieramos
    // los arrays pueden almacenar más de un valor al mismo tiempo y podemos acceder a ellos de manera independiente
    // Permiten organizar series de datos que comparten el mismo nombre pero se diferencian por un índice
    // Como trabajamos con themoviedb (muuuuchos elementos) vamos a trabajar con arrays
  
    //tenemos una ruta/hipervínculo (queryString), entonces podemos acceder a datos del pedido mediante window.location.search
    // Un objeto implementando URLSearchParams puede directamente ser usado en una for...of estructura
  
    // El método GET se utiliza para pedir información de un recurso específico
    // Pedidos pueden ser cacheados, aparecen en historial
    // El query string se incluye en la URL conteniendo los datos a enviar (El ? comienza los datos de configuración de la página)
    //Considerando que queremos obtener un trailer y me interesa que los datos de lo que el usuario buscó estén visibles en la URL se utiliza el método GET en vez del método POST
  
  var idDePelicula = new URLSearchParams(window.location.search).get("idDePelicula")
  
  // API: sistema para intercambiar información entre distintas aplicaciones (posiblemente en distintos servidores, en este caso entre The Movie DB y este proyecto, queremos consumir una API para obtener información de un sistema externo, obtener información actualizada sobre películas)
  
  // ¿Cómo consumir API?
  // Realizar un pedido a otra URL (accedemos a una URL que en vez de retornar HTML retorna información en formato de texto para ser procesada por otro sistema)
  // Retorna strings en formato JSON (formato de intercambio de datos)
  
  // AJAX (llamados asincrónicos: solicitud que sabemos cuando empieza pero no cuando termina)
  // Permite hacer peticiones a otras páginas web sin tener que salir del documento HTML actual
  
  // Permite aplicaciones web capaces de actualizarse continuamente sin tener que volver a cargar la página completa. Esto posibilita aplicaciones más rápidas, dinámicas y con mejor respuesta a las acciones del usuario.
  
  // Fetch esta basado en promesas, devuelve la promesa de suministrar la información solicitada en algún momento
  // Recibe como primer parámetro la URL del endpoint al cual estamos haciendo el llamado
  
  fetch("https://api.themoviedb.org/3/movie/" + idDePelicula +  "/videos?api_key=95b9e84c8317f917cebb3f232298f131&language=en-US")
  
  // .then() recibe un callback, el cual retornará la respuesta del llamado en formaro JSON
  // return CORTA la ejecución y RETORNA (valores de retorno: valores devueltos por la función cuando se completa)
  
  .then(function(respuesta) {
     return respuesta.json()
   })
  
   // .then() recibe un callback, el cual hará lo que le pidamos con la respuesta obtenida, que está en formato JSON
  
   .then(function(informacion) {
     console.log(informacion.results);
  
     // var arrayDePeliculas almacena TODA la información obtenida
  
     var arrayDePeliculas = informacion.results
     var key = informacion.results[0].key
  
     // El objeto document representa el html que será cargado en el navegador
     // ¿Cómo CAPTURAMOS los elementos existentes en el HTML? document.querySelector("lo que queremos capturar");
     // ¿Cuál es el objetivo de capturar algún elemento de HTML? Modificar algo
     // innerText: agregar cadenas de texto como contenido de una etiqueta HTML
     // innerHTML: reemplazar el contenido de una etiqueta HTML
  
     document.querySelector(".trailer-peli").src += key
  
   })
  
   // .catch() atrapará los errores, si los hubiere, e imprimirá en consola en tipo de error obtenido
  
   .catch(function(error) {
     console.log("Error: " + error);
   })
  })