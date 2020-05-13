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

// ¿Qué son las funciones?
// Secuencia lógica de instrucciones que realizan acciones (bloque de código asignado para hacer una tarea)
// Para recibir las instrucciones pueden recibir cosas y retornar cosas
// 1º invoco a la función, luego () para que sea ejecutada

// un evento es algo que pasa en el navegador o q es ejecutado x usuario

// js que me tira el detalle de las peliculas con toda la info

window.addEventListener("load", function() {

    // una variable es como si fuera una caja que contiene lo que quisieramos
    // En la caja que utilicemos solo podemos guardar una sola cosa!!!!
    // los arrays pueden almacenar más de un valor al mismo tiempo y podemos acceder a ellos de manera independiente
    // Disponen de un índice (index) que permite especificar la posición de cada elemento que contienen
    // Permiten organizar series de datos que comparten el mismo nombre pero se diferencian por un índice
    // Como trabajamos con themoviedb (muuuuchos elementos) vamos a trabajar con arrays
  
    // HTTP (Hyper Text Transform Protocol)
    // es un protocolo para la transmisión de información (para que el dispositivo que hace el pedido de info y el dispositivo que recibe el pedido hablen el mismo idioma: solicito el sitio)
  
    //tenemos una ruta/hipervínculo (queryString), entonces podemos acceder a datos del pedido mediante window.location.search
    // Un objeto implementando URLSearchParams puede directamente ser usado en una for...of estructura
  
    // El método GET se utiliza para pedir información de un recurso específico
    // Pedidos pueden ser cacheados, aparecen en historial
    // El query string se incluye en la URL conteniendo los datos a enviar (El ? comienza los datos de configuración de la página)
    //Considerando que este es un buscador y me interesa que los datos de lo que el usuario buscó estén visibles en la URL se utiliza el método GET en vez del método POST
  
    // ¿Cómo envío datos por el Query String?
    // Podemos enviar datos en el queryString armando un hipervínculo
    // Los formularios configurados por GET envían sus datos en el queryString
    // Luego del ? aparece lo que el usuario buscó
  
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
  
     // CONDICIONALES: Generar condiciones para ejecutar código
     // if(condición lógica)
     // condición lógica: se debe probar (utilizando operadores de comparación retorna valor true o false)
     // if(true);else(false)
  
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
  
  // API: sistema para intercambiar información entre distintas aplicaciones (posiblemente en distintos servidores, en este caso entre The Movie DB y este proyecto, queremos consumir una API para obtener información de un sistema externo, obtener información actualizada sobre películas)
  
  // ¿Cómo consumir API?
  // Realizar un pedido a otra URL (accedemos a una URL que en vez de retornar HTML retorna información en formato de texto para ser procesada por otro sistema)
  // Retorna strings en formato JSON (formato de intercambio de datos)
  // ¿Cómo trabajar con JSON?
  // JSON.stringify(): pasar de objeto literal a JSON
  // JSON.parse (): tomar un string en formato JSON y transformar en objeto literal
  
  // AJAX (llamados asincrónicos: solicitud que sabemos cuando empieza pero no cuando termina)
  // Permite hacer peticiones a otras páginas web sin tener que salir del documento HTML actual
  
  // Permite aplicaciones web capaces de actualizarse continuamente sin tener que volver a cargar la página completa. Esto posibilita aplicaciones más rápidas, dinámicas y con mejor respuesta a las acciones del usuario.
  
  // Fetch esta basado en promesas, devuelve la promesa de suministrar la información solicitada en algún momento
  // Recibe como primer parámetro la URL del endpoint al cual estamos haciendo el llamado
  
      fetch("https://api.themoviedb.org/3/movie/" + idDePelicula + "?api_key=95b9e84c8317f917cebb3f232298f131&language=en-US")
  
      // .then() recibe un callback, el cual retornará la respuesta del llamado en formaro JSON
      // return CORTA la ejecución y RETORNA (valores de retorno: valores devueltos por la función cuando se completa)
      // Generalmente, se usa un valor de retorno donde la función es un paso intermedio en un cálculo de algún tipo. Quieres llegar a un resultado final, que involucra algunos valores. Esos valores deben ser calculados por una función, que luego devuelve los resultados para que puedan usarse en la siguiente etapa del cálculo.
  
      .then(function(respuesta) {
          return respuesta.json()
        })
  
        // .then() recibe un callback, el cual hará lo que le pidamos con la respuesta obtenida, que está en formato JSON
  
        .then(function(informacion) {
          console.log(informacion);
  
  // var pelicula contiene toda la información
         var pelicula = informacion
  
         // OBJETOS LITERALES: representación en código de un elemento de la VIDA REAL
         // ¿Cómo accedemos al valor de dicha propiedad? objeto.prop
  
         // var student = { (student es un objeto)
         //   name: "Juana", (name es una propiedad del objeto student y Juana es el valor de dicha propiedad)
         // }
         // ¿Cómo accedemos al nombre del estudiante?
         // console.log(student.name);
  
             // var pelicula es un objeto  (un OBJETO en javascript es un bloque de código que tiene propiedades. Las prop tienen un valor determinado)
  
         // Para obtener la información que me interese obtener busco en el objeto pelicula las propiedades que me interesan (el nombre de cada propiedad es distinto para cada api)
  
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
                li += '<a href="generos.html?id=' + arrayDeGeneros[i].id + '">'
                li += arrayDeGeneros[i].name
                // CONDICIONALES: Generar condiciones para ejecutar código
                // if(condición lógica)
                // condición lógica: se debe probar (utilizando operadores de comparación retorna valor true o false)
                // if(true);else(false)
                if (i < arrayDeGeneros) {
                  li += ' - '
                }
                li += '</a>'
          }
          li += '</h3>'
          li += '</li>'
  
          // El objeto document representa el html que será cargado en el navegador
          // ¿Cómo CAPTURAMOS los elementos existentes en el HTML? document.querySelector("lo que queremos capturar");
          // ¿Cuál es el objetivo de capturar algún elemento de HTML? Modificar algo
          // innerText: agregar cadenas de texto como contenido de una etiqueta HTML
          // innerHTML: reemplazar el contenido de una etiqueta HTML
  
          // (HTML) Hay una ul vacía (clase: detalle-peli) que es a donde se agregaran las li al enviar el formulario
  
          var ul = document.querySelector(".detalle-peli")
          ul.innerHTML += li
  
  
  
   //INICIO BLOQUE 2 - si la peli ya era favorita que aparezca pintada la estrella
   // indexOf retorna el primer índice en el que se puede encontrar un elemento dado en el array, o retorna -1 si el elemento no está presente
  
   // CONDICIONALES: Generar condiciones para ejecutar código
   // if(condición lógica)
   // condición lógica: se debe probar (utilizando operadores de comparación retorna valor true o false)
   // if(true);else(false)
  
        if (favoritas.indexOf(idDePelicula) >= 0 ) {
          document.querySelector(".estrellita").style.backgroundColor = "gold"
        }
         // FIN BLOQUE 2
  
         // INICIO BLOQUE 3 - que pasa al clikear la estrella
         // Dentro de un span hay un botón (clase:estrellita)
         // Hay que capturar el botón para que al hacer click (.onclick) se ejecute la función
  
         document.querySelector(".estrellita").onclick = function () {
           // Bloque 3 A - Modifico el array
  
           // CONDICIONALES: Generar condiciones para ejecutar código
           // if(condición lógica que se debe probar)
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
  
  // Fetch esta basado en promesas, devuelve la promesa de suministrar la información solicitada en algún momento
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
  
      // El for nos permite crear ciclos, donde un bloque de código se repite una y otra vez (recorrer el array)
  
      // ¿Cómo obtengo la cantidad de elementos de un array? .length
      // Si hubieramos querido obtener toodas las películas de lo que el usuario seleccione (ya sea una palabra en el buscador, un género, las películas de mayor puntaje, etc.) tendríamos que haber hecho array.length pero como quisimos que el servidor nos de los datos de 10 películas hicimos (var i = 0; i < 10; i++)
  
      for (var i = 0; i < 10; i++) {
        // OBJETOS LITERALES: representación en código de un elemento de la VIDA REAL
        // ¿Cómo accedemos al valor de dicha propiedad? objeto.prop
  
        // var arrayDePeliculas es un objeto  (un OBJETO en javascript es un bloque de código que tiene propiedades. Las prop tienen un valor determinado)
  
        var id = arrayDePeliculas[i].id
        var title = arrayDePeliculas[i].title
        var imagenpelicula = arrayDePeliculas[i].poster_path
        var li = ''
  
        // += agrega un valor a la variable
  
        li += '<li>'
        li += '<a href="detallepeli.html?idDePelicula=' + id +'"'
        li += '<h2>' + title + '</h2>'
        li += '<img src='+ imgPath + imagenpelicula+ '>'
        li += '</a>'
        li += '</li>'
  
        // El objeto document representa el html que será cargado en el navegador
        // ¿Cómo CAPTURAMOS los elementos existentes en el HTML? document.querySelector("lo que queremos capturar");
        // ¿Cuál es el objetivo de capturar algún elemento de HTML? Modificar algo
        // innerText: agregar cadenas de texto como contenido de una etiqueta HTML
        // innerHTML: reemplazar el contenido de una etiqueta HTML
  
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