// Esta es la base de datos de nuestros usuarios
const baseDeDatos = {
  usuarios: [
    {
      id: 1,
      name: "Steve Jobs",
      email: "steve@jobs.com",
      password: "Steve123",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "shanna@melissa.tv",
      password: "Ervin345",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "nathan@yesenia.net",
      password: "Floppy39876",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "julianne.oconner@kory.org",
      password: "MysuperPassword345",
    },
  ],
};

// ACTIVIDAD

// Paso a paso:

// 1) Escuchar el evento necesario para reaccionar cuando la persona
// haga click en el botón iniciar sesión.
const loginBtn = document.querySelector('.login-btn');

loginBtn.addEventListener('click', function () {
  iniciarSesion();
});

// 2) El proceso de inicio de sesión deberá tener una demora de 3 segundos.
// Deberás agregar la función correspondiente para simular dicha demora.
function iniciarSesion() {
  const loader = document.getElementById('loader');
  const errorContainer = document.getElementById('error-container');

  loader.classList.remove('hidden');
  errorContainer.classList.add('hidden');

  function validarFormatoEmail(email) {
    // Expresión regular para validar el formato del correo electrónico
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
  }

  //Simular los 3 segundos
  setTimeout(function () {
    let campoEmail = document.getElementById('email-input');
    let campoPassword = document.getElementById('password-input');
    let form = document.querySelector('form');
    let title = document.querySelector('h1');

    let email = campoEmail.value.trim();
    let password = campoPassword.value.trim();

    let emailValido = validarFormatoEmail(email);
    let passwordValida = password.length >= 5;
    let usuarioExistente = false;

    baseDeDatos.usuarios.forEach(usuario => {
      if (usuario.email === email && usuario.password === password) {
        usuarioExistente = true;
      }
    })

    if (emailValido && passwordValida && usuarioExistente) {
      loader.classList.add('hidden');
      form.classList.add('hidden');
      title.innerText = 'Bienvenido al sitio 😀';
    } else {
      loader.classList.add('hidden');
      errorContainer.classList.remove('hidden');
      errorContainer.textContent = "Alguno de los datos ingresados son incorrectos.";
      campoEmail.value = '';
      campoPassword.value = '';
    }


    
  }, 3000)
}

// 3) Durante el tiempo indicado anteriormente, se deberá mostrar el mensaje "Iniciando sesión..."

// 4) A partir de los inputs ingresados en el formulario, se deberan realizar las siguientes validaciones:
// 1) Que el primer input sea un email válido.
// 2) Que la contraseña tenga al menos 5 caracteres.
// 3) Que los datos ingresados corresponden a una
// persona que se encuentre registrada en la base de datos.
// En caso de que alguna de las validaciones no sea exitosa,
// se deberá mostrar un mensaje de error que diga "Alguno de los datos ingresados son incorrectos"

// 5) En caso de que los datos ingresados sean correctos, se deberá ocultar el formulario y mostrar
// un mensaje de bienvenida al sitio.

/* 
TIPS:
  - Puedes averiguar acerca de la manera de validar el formato de un email utilizando Javascript, buscando
    en internet frases como "Validar email con Javascript o similar".

  - Recuerda que puedes seleccionar y manipular los elementos del archivo index.html, usando los
    recursos que Javascript te ofrece para ello. Además, en el archivo styles.css tiene algunas clases y 
    estilos predefinidos para ayudarte a completar la actividad.

  - También te dejamos algunos mensajes que te pueden ser de utilidad:
  
   Mensaje de error => <small>Alguno de los datos ingresados son incorrectos</small>

   Mensaje de bienvenida => "<h1> Bienvenido al sitio 😀 </h1>";

   ¡Manos a la obra!
 */
