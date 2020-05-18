
// window.addEventListener("load", function() {

//         if (localStorage.getItem("nombre") != null) {
  
//       var login = document.querySelector(".li-login")
//       login.style.display = "none";
//       var nombre = localStorage.getItem("nombre");
//          var span = document.querySelector("#nombre-de-usuario")
//          span.innerText = localStorage.getItem("nombre");
//     }

//     var theForm = document.querySelector ("#myForm");
//     theForm.onsubmit = function (event) {
    
//       var boton = document.querySelector("#nombre")
//       var boton2 = document.querySelector("#contraseña")
//       var boton3 = document.querySelector("#mail");
//       var boton4 = document.querySelector("#gender");
  
//       if(boton.value == "" || boton2.value == "" || boton3.value == ""){
  
//         event.preventDefault();
//         alert("complete your info!");
//       }else if ((!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(boton3.value)))){
//         event.preventDefault();
//         alert("You have entered an invalid email adress!")
//       }else {
        
//         var name = boton.value;
//         var pass = boton2.value;
//         var mail = boton3.value;
  
//         localStorage.setItem("nombre",name);
//         localStorage.setItem("pass",pass);
//         localStorage.setItem("mail",mail);
//         console.log(name);
//         console.log(localStorage);
  
//         var modal = document.querySelector("#modal-overflow")
//         modal.style.display = "none";
//         var login = document.querySelector(".li-login")
//         login.style.display = "none";
//          var nombre = localStorage.getItem("nombre");
//          var span = document.querySelector("#nombre-de-usuario")
//          span.innerText = name;
//       }
//       }
//   } )