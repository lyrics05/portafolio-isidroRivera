(()=>{var e,t,n=document.querySelector("#name"),o=document.querySelector("#email"),a=document.querySelector("#message"),r=(document.querySelector("#status-message"),document.querySelector("#contact-form"),document.querySelector(".contact__container")),i=document.querySelector("#enviar-formulario"),s={name:"",email:"",message:""};function l(e){return""==e.target.value.trim()?(m("todos los campos son obligatorios",e.target.parentElement),s[e.target.name]="",void g()):"email"!=e.target.id||function(e){return/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(e)}(e.target.value)?(v(e.target.parentElement),s[e.target.name]=e.target.value,void g()):(m("el email no es valido",e.target.parentElement),s[e.target.name]="",void g())}function c(){document.getElementById("nav-menu").classList.remove("show")}n.addEventListener("input",l),o.addEventListener("input",l),a.addEventListener("input",l),document.addEventListener("DOMContentLoaded",(function(){emailjs.init("bBGhfBvDXufkgjeVw"),document.getElementById("contact-form").addEventListener("submit",(function(e){e.preventDefault();var t=document.createElement("p");r.appendChild(t),t.id="status-message",Object.assign(s,{name:"",email:"",message:""}),g(),emailjs.sendForm("service_4z46dyq","template_89ghb8p",this).then((function(){t.classList.add("success"),document.getElementById("status-message").innerText="Mensaje enviado con éxito!",setTimeout((function(){r.removeChild(t)}),2500)}),(function(e){t.classList.add("error"),document.getElementById("status-message").innerText="Error al enviar el mensaje.",console.error("Error:",e),setTimeout((function(){r.removeChild(t)}),2500)})),this.reset()}))})),e=document.getElementById("nav-toggle"),t=document.getElementById("nav-menu"),e&&t&&e.addEventListener("click",(function(){t.classList.toggle("show")})),document.querySelectorAll(".nav__link").forEach((function(e){return e.addEventListener("click",c)}));var d=document.querySelectorAll("section[id]");window.addEventListener("scroll",(function(){var e=window.scrollY;d.forEach((function(t){var n=t.offsetHeight,o=t.offsetTop-58,a=t.getAttribute("id"),r=document.querySelector(".nav__menu a[href*="+a+"]");e>o&&e<=o+n?r.classList.add("active-link"):r.classList.remove("active-link")}))}));var u=ScrollReveal({origin:"top",distance:"60px",duration:2e3,delay:200});function m(e,t){v(t);var n=document.createElement("div");n.classList.add("error"),n.textContent=e,t.appendChild(n)}function v(e){var t=e.querySelector(".error");t&&e.removeChild(t)}function g(){Object.values(s).some((function(e){return""===e.trim()}))?(i.style.backgroundColor="red",i.textContent="Esperando",i.disabled=!0,i.style.opacity="0.5"):(i.style.backgroundColor="green",i.textContent="Enviar",i.disabled=!1,i.style.opacity="1")}u.reveal(".home__data, .about__img, .skills__subtitle, .skills__text",{}),u.reveal(".home__img, .about__subtitle, .about__text, .skills__img",{delay:400}),u.reveal(".home__social-icon",{interval:200}),u.reveal(".skills__data, .work__img, .contact__input",{interval:200})})();