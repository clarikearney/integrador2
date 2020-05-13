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
window.addEventListener("load", function() {

    // un evento es algo que pasa en el navegador o q es ejecutado x usuario
    // Event Listeners
    // Syntax: element.addEventListener(event,function)
    // cuando suceda el evento (load) se va a ejecutar la función
    // addEventListener permite que se ejecute más de un evento a la vez (window.onload sólo permite que se ejecute un evento al cargar la página)
  
    // ¿Qué son las funciones?
    // Secuencia lógica de instrucciones que realizan acciones (bloque de código asignado para hacer una tarea)
    // Para recibir las instrucciones pueden recibir cosas y retornar cosas
    // 1º invoco a la función, luego () para que sea ejecutada
  
    // una variable es como si fuera una caja que contiene lo que quisieramos
    // En la caja que utilicemos solo podemos guardar una sola cosa!!!!
    // los arrays pueden almacenar más de un valor al mismo tiempo y podemos acceder a ellos de manera independiente
    // Disponen de un índice (index) que permite especificar la posición de cada elemento que contienen
    // Permiten organizar series de datos que comparten el mismo nombre pero se diferencian por un índice
    // Como trabajamos con themoviedb (muuuuchos elementos) vamos a trabajar con arrays
  
  // CONDICIONALES: Generar condiciones para ejecutar código
  // if(condición lógica)
  // condición lógica: se debe probar (utilizando operadores de comparación retorna valor true o false)
  // if(true);else(false)
  
  // Ese if preguntaria si hay alguien logueado
  // Si ya hay alguien logueado se ejecuta la función
  
  // Web Storage: Almacenar información en el navegador del usuario (almacena en el cliente)
  // Hay dos métodos, localStorage o sessionStorage
  // localStorage guarda info sin tiempo de expiración y almacena strings
  // sessionStorage guarda información mientras se mantenga abierto el navegador
  
        // local storage es una caja, adentro guardo valores para que los pueda identificar
        // métodos de localStorage
        // getItem(): obtiene valores del objeto localStorage que tienen que tener un nombre o key asociada ("nombre",nombre)
  
        // la función que aparece abajo de todo dice que cada vez que el
        // usuario se loguea, tiene que borrarse el botón y agregar el nombre, eso implica que cuando se recarga la página se borra la información cargada por el usuario(cuando pasas de la home a la página de favoritos, por ejemplo, se borra la información del login). Por esta razón lo primero que tiene que aparecer en login.js es if (localStorage.getItem("nombre") != null) para que cada vez que no haya nada escrito en los campos del formulario, tienen que llenarse los mismos con la información almacenada en localStorage (ejecutarse la función)
        if (localStorage.getItem("nombre") != null) {
  
      // El objeto document representa el html que será cargado en el navegador
      // ¿Cómo CAPTURAMOS los elementos existentes en el HTML? document.querySelector("lo que queremos capturar");
      // ¿Cuál es el objetivo de capturar algún elemento de HTML? Modificar algo
      // innerText: agregar cadenas de texto como contenido de una etiqueta HTML
      // innerHTML: reemplazar el contenido de una etiqueta HTML
  
  
      // agarrar el boton de login y ocultarlo
      var login = document.querySelector(".li-login")
      login.style.display = "none";
      // agarrar el nombre que cargaron y reemplazarlo por el boton de login
      var nombre = localStorage.getItem("nombre");
         // agregarlo sobre un span vacio en el html, hacer un innerText porque un string es un texto
         var span = document.querySelector("#nombre-de-usuario")
         span.innerText = localStorage.getItem("nombre");
    }
  
    // primero hicimos un formulario en html que aparece en forma de cartel cuando el usuario clickea el botón login
    // Necesitamos capturar el form (id: myForm)
    // Este formulario contiene 4 divs para resolver que el usuario ingrese su nombre, email, género y contraseña
    // Cada div tiene un input (salvo el div de géneros que tiene un select) para resolver sus respectivas funciones o type (text, text, password)
  
    var theForm = document.querySelector ("#myForm");
    // .onsubmit es un evento que se dispara exclusivamente sobre el <form> y cuando se ha presionado un botón submit
    // cuando se envia el formulario (theForm.onsubmit):
    // si los campos estan vacios, prevengo el envio del formulario (event.preventDefault)
    theForm.onsubmit = function (event) {
  
      // hacer var de nombre, email, contra, genero para q usuario complete para capturar los  input
  
      var boton = document.querySelector("#nombre")
      var boton2 = document.querySelector("#contraseña")
      var boton3 = document.querySelector("#mail");
      var boton4 = document.querySelector("#gender");
  
      // CONDICIONALES: Generar condiciones para ejecutar código
      // if(condición lógica)
      // condición lógica: se debe probar que el usuario completó el form
  
      if(boton.value == "" || boton2.value == "" || boton3.value == ""){
  
        // el usuario escribe String, si no cargaste nada en nombre, email y contraseña (==""), preventDefault
        // debo detener la ejecución del código hasta que el usuario complete un campo
        // ¿Cómo saber si un campo esta vacío? .value nos retorna el valor actual de un campo de un formulario
          // Alert hará aparecer en el navegador un cartel de alerta con el mensaje enviado
        // si un input esta vacio, if (input esta vacio) hace prevent default una vez que haga submit, antes del if
  
        event.preventDefault();
        alert("complete your info!");
        // Además queremos validar el valor del campo del email, verificar su formato de dato (e-email): regex (regular expression boundary)
        // si al usar el método test que recibe como parámetro el valor que queremos evaluar, y el valor suministrado no cumple con el patrón , hay que hacer prevent default y debe aparecer un cartel alertando el error
      }else if ((!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(boton3.value)))){
        event.preventDefault();
        alert("You have entered an invalid email adress!")
      }else {
        // si hay datos y en el formato correcto, else
        // hacer variables con lo que llena el usuario en el form
        //  .value nos retorna el valor actual de un campo de un formulario
        var name = boton.value;
        var pass = boton2.value;
        var mail = boton3.value;
  
  // Web Storage: Almacenar información en el navegador del usuario (almacena en el cliente)
  // Hay dos métodos, localStorage o sessionStorage
  // localStorage guarda info sin tiempo de expiración y almacena strings
  // sessionStorage guarda información mientras se mantenga abierto el navegador
  
        // local storage es una caja, adentro guardo valores para que los pueda identificar
        // métodos de localStorage
        // setItem(): almacena valores en el objeto localStorage que tienen que tener un nombre por eso es setItem ("nombre",nombre)
        // localStorage.setItem("userName", "Juana"); setea atributo userName
  
        // Setear atributo "nombre"
        localStorage.setItem("nombre",name);
        // Setear atributo "pass"
        localStorage.setItem("pass",pass);
        // Setear atributo "mail"
        localStorage.setItem("mail",mail);
        console.log(name);
        console.log(localStorage);
  
        // Una vez que funciona el login
        // 1capturar el modal para ocultarlo
        var modal = document.querySelector("#modal-overflow")
        modal.style.display = "none";
        // 2 agarrar el boton de login y ocultarlo
        var login = document.querySelector(".li-login")
        login.style.display = "none";
        // 3 agarrar el nombre que cargaron y reemplazarlo por el boton de login
         var nombre = localStorage.getItem("nombre");
           // agregarlo sobre un span vacio en el html, hacer un innerText porque un string es un texto
         var span = document.querySelector("#nombre-de-usuario")
         span.innerText = name;
      }
      }
  
  
  
  
    // si no hay datos, preventDefault    if (boton.value == ""|| boton2.value == ""){
    // si hay datos, else (ya me cargaron datos)
    // 1 agarrar el modal y ocultarlo
    // var modal = document.querySelector(#modal)
    // modal.style.display = "none";
    // 2 agarrar el boton de login y ocultarlo
    // var login = document.querySelector(#modal)
    // login.style.display = "none";
    // 3 agarrar el nombre que cargaron y reemplazarlo boton de login
    // getItem.nombre = localStorage.getItem("nombre");
    // agregarlo sobre un span vacio en el html, hacer un innerText porque un string es un texto
    // var span = document.querySelector(#span)
    // span.innerText = nombre;
  } )