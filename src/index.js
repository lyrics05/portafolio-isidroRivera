const nombre = document.querySelector("#name")
const email = document.querySelector("#email")
const mensaje= document.querySelector("#message")
const sendMensaje = document.querySelector("#status-message")
const formulario = document.querySelector("#contact-form")
const contenedor = document.querySelector(".contact__container")
const botonEnviar = document.querySelector("#enviar-formulario")

const objetoMensaje ={
  name:"",
  email:"",
  message:""
}

nombre.addEventListener("input",validarInputs)
email.addEventListener("input",validarInputs)
mensaje.addEventListener("input",validarInputs)
//formulario.addEventListener("submit",validarSubmit)

const emailUser = process.env.EMAILJS_USER;
const serviceID = process.env.SERVICE_ID;
const templateID = process.env.TEMPLATE_ID;


function validarInputs(e){
  if(e.target.value.trim() == ""){
    mostrarAlerta("todos los campos son obligatorios",e.target.parentElement)
    objetoMensaje[e.target.name] = ""
    quitarEstilosAlbotonEnviar()
    return
  }

  if(e.target.id =="email" && !validarEmail(e.target.value)){
    mostrarAlerta("el email no es valido",e.target.parentElement)
    objetoMensaje[e.target.name] = ""
    quitarEstilosAlbotonEnviar()
    return
  }

  limpiarAlerta(e.target.parentElement)
  objetoMensaje[e.target.name] = e.target.value
   quitarEstilosAlbotonEnviar()
   
}



document.addEventListener("DOMContentLoaded", function () {
  emailjs.init(emailUser); // Reemplaza con tu User ID de EmailJS

  document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const p = document.createElement("p")
     contenedor.appendChild(p)
     p.id = "status-message"
    resetearObjeto()
    emailjs.sendForm(serviceID, templateID, this)
      .then(function () {
        p.classList.add("success")
        document.getElementById("status-message").innerText = "Mensaje enviado con éxito!";
        setTimeout(() => {
          contenedor.removeChild(p)
       },2500);
      }, function (error) {
        p.classList.add("error")
        document.getElementById("status-message").innerText = "Error al enviar el mensaje.";
        console.error("Error:", error);
        setTimeout(() => {
          contenedor.removeChild(p)
       },2500);
      });

    this.reset();
  /*   setTimeout(() => {
       contenedor.removeChild(sendMensaje)
    },2000); */
  });
});


/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

/*----------------------email js-----------------------------------------------*/

function mostrarAlerta(mensaje,referencia){
  limpiarAlerta(referencia)
  const div = document.createElement("div")
  div.classList.add("error")
  div.textContent = mensaje
  referencia.appendChild(div)
}

function limpiarAlerta(referencia){
   const existe = referencia.querySelector(".error")
   if(existe){
     referencia.removeChild(existe)
   }
}

function quitarEstilosAlbotonEnviar() {
  if (Object.values(objetoMensaje).some(valor => valor.trim() === "")) {
    botonEnviar.style.backgroundColor = "red";
    botonEnviar.textContent = "Esperando";
    botonEnviar.disabled = true;
    botonEnviar.style.opacity = "0.5"; 
  } else {
    botonEnviar.style.backgroundColor = "green"; 
    botonEnviar.textContent = "Enviar";
    botonEnviar.disabled = false;
    botonEnviar.style.opacity = "1"; 
  }
}

function resetearObjeto(){
   Object.assign(objetoMensaje,{
    name:"",
    email:"",
    message:""
   })
   quitarEstilosAlbotonEnviar()
}


  function validarEmail(email){
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let resultado = regex.test(email)

    return resultado
  }
  
