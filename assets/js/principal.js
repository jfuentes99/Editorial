//comprobacion
console.log('Empieza la ejecucion');

//Cabecera. Modo oscuro
document.addEventListener('DOMContentLoaded', function () {
    var modeSwitch = document.getElementById('dark');

    modeSwitch.addEventListener('click', function () {document.documentElement.classList.toggle('dark');
      modeSwitch.classList.toggle('active');
    })})


//bloques oposiciones aside , click a la estrella y desplazarlos a tus oposiciones
const baseDeDatos = [
  {
    id: 1,
    cabecera: "Aux Administrativo Servicio Madrileño de Salud",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Logotipo_del_SERMAS_%28RPS_10-03-2012%29.png",
    alt: "oposicion 1",
    body: " Convocada nueva convocatoria 2023 de la Junta de Andalucía con el total de 137 plazas. Más informacion",
    fecha: "25-11-2022",
  },
  {
    id: 1,
    cabecera: "Aux Administrativo Servicio Madrileño de Salud",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Logotipo_del_SERMAS_%28RPS_10-03-2012%29.png",
    alt: "oposicion 1",
    body: " Convocada nueva convocatoria 2023 de la Junta de Andalucía con el total de 137 plazas. Más informacion",
    fecha: "25-11-2022",
  },
  {
    id: 1,
    cabecera: "Aux Administrativo Servicio Madrileño de Salud",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Logotipo_del_SERMAS_%28RPS_10-03-2012%29.png",
    alt: "oposicion 1",
    body: " Convocada nueva convocatoria 2023 de la Junta de Andalucía con el total de 137 plazas. Más informacion",
    fecha: "25-11-2022",
  },
  {
    id: 1,
    cabecera: "Aux Administrativo Servicio Madrileño de Salud",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Logotipo_del_SERMAS_%28RPS_10-03-2012%29.png",
    alt: "oposicion 1",
    body: " Convocada nueva convocatoria 2023 de la Junta de Andalucía con el total de 137 plazas. Más informacion",
    fecha: "25-11-2022",

  }
];
function renderizarProductos() {
var bloque=document.getElementById('mensaje');
bloque.innerHTML="";
    baseDeDatos.forEach((info) => {

let contenedorOposiciones=document.createElement("div");
        contenedorOposiciones.classList.add("message-box");
        //imagen
let imagen= document.createElement("img");
        imagen.src=info.imagen;
        imagen.alt=info.imagen;
        contenedorOposiciones.appendChild(imagen);
      // Estructura
let cabecera = document.createElement("div");
      cabecera.classList.add("message-content");
      contenedorOposiciones.append(cabecera);
let subCabecera=document.createElement("div");
      subCabecera.classList.add("message-header");
      cabecera.append(subCabecera);
      // Cabecera
let texto = document.createElement("div");
      texto.classList.add("name");
      texto.textContent=info.cabecera;
      subCabecera.append(texto);
      // Estrella
let estrella = document.createElement("div");
      estrella.classList.add("valoracion");
      subCabecera.append(estrella);
let botonEstrella= document.createElement("button");
estrella.id=info.id;
      estrella.append(botonEstrella);
let centro=document.createElement("i");
centro.classList.add("fas","fa-star");
botonEstrella.append(centro);

//Texto principal
let texto2= document.createElement("p");
texto2.classList.add("message-line");
texto2.textContent=info.body;
    cabecera.append(texto2);
//Fecha
let fecha=document.createElement("p");
fecha.classList.add("message-line");
fecha.textContent=info.fecha;
cabecera.append(fecha);
bloque.append(contenedorOposiciones); //bloque principal creado al principio, mete a lo que está ya añadido
});
}
//boton para renderizar oposiciones (esta en la foto de mi perfil)
const buton=document.querySelector(".app-sidebar-link");
buton.addEventListener("click", ev =>{
console.log("aside hecho");
renderizarProductos();
});
// renderizarProductos(); //puesto por default
//fin seccion aside



//SECCION bloque principal
//fecha
const time=document.createElement('p');
time.classList.add("time");
const fecha=new Date();
time.innerHTML=fecha.toLocaleDateString();
document.querySelector(".projects-section-header").append(time);


//funcion para mandar la oposicion al bloque de proyectos principal
const bloquePrincipal=document.getElementById("principal");
// bloquePrincipal.innerHTML="*Todavia sin oposiciones";
function moverProductos() {
  bloquePrincipal.innerHTML="";
  baseDeDatos.forEach(elementos =>{

  //introducir bloques
let bloque= document.createElement("div");
bloque.classList.add("project-box-wrapper");
//contenedor se hace append al final
let contenedor=document.createElement("div");
contenedor.classList.add("project-box");
contenedor.style.backgroundColor="#fee4cb";
let contenedorB=document.createElement("div");
contenedorB.classList.add("project-box-header");
contenedor.appendChild(contenedorB);
//fecha
let time=document.createElement("span");
time.innerHTML=elementos.fecha;
contenedorB.appendChild(time);
//boton
let boton=document.createElement("div");
boton.classList.add("more-wrapper");
contenedorB.appendChild(boton);
// Estrella
let estrella = document.createElement("div");
      estrella.classList.add("valoracion");
      contenedorB.append(estrella);
let botonEstrella= document.createElement("button");
      estrella.append(botonEstrella);
let centro=document.createElement("i");
    centro.classList.add("fas","fa-star");
    botonEstrella.append(centro);
//divs texto
let contenedorC=document.createElement("div");
contenedorC.classList.add("project-box-content-header");
contenedor.appendChild(contenedorC);
let texto1=document.createElement("p");
let texto2=document.createElement("p");
texto1.classList.add("box-content-header");
texto1.innerText=elementos.cabecera;
texto2.classList.add("box-content-subheader");
texto2.innerText=elementos.alt;
contenedorC.appendChild(texto1,texto2);

let contenedorD=document.createElement("div");
contenedorD.classList.add("box-progress-wrapper");
contenedor.appendChild(contenedorD);
let contenedorProgreso= document.createElement("p");
contenedorProgreso.classList.add("box-progress-header");
contenedorProgreso.innerText="Progreso";
contenedorD.appendChild(contenedorProgreso);
//barra
let barra=document.createElement("div");
barra.classList.add("box-progress-bar");
contenedorD.appendChild(barra);
let colorBarra= document.createElement("span");
colorBarra.classList.add("box-progress");
colorBarra.style.backgroundColor="#ff942e";
colorBarra.style.width="60%"; //aqui habria que ajustarla con el tiempo restante
barra.appendChild(colorBarra);
//porcentaje
let porcentaje= document.createElement("p");
porcentaje.classList.add("box-progress-percentage");
porcentaje.innerText="60%";
contenedorD.appendChild(porcentaje);
//participantes
let participantes= document.createElement("div");
participantes.classList.add("project-box-footer");
contenedor.appendChild(participantes);
let participantes2= document.createElement("div");
participantes2.classList.add("participants");
participantes.appendChild(participantes2);
let imagen1= document.createElement("img");
let imagen2= document.createElement("img");
let extra= document.createElement("button");
extra.textContent="+";
imagen1.src=elementos.imagen;
imagen2.src=elementos.imagen;
participantes2.append(imagen1,imagen2,extra);
//dias restantes
let dias= document.createElement("div");
dias.classList.add("days-left");
dias.style.backgroundColor="#ff942e";
dias.innerHTML=elementos.fecha;
participantes.appendChild(dias);

//final
bloque.appendChild(contenedor);
bloquePrincipal.appendChild(bloque);
})};

//delegacion de eventos
var estrellas=document.querySelector(".messages");
estrellas.addEventListener("click",function(ev){
  if(ev.target.nodeName.toLowerCase()=="i"){//si es la i dentro del boton Estrella, que haga esto
    //deberemos cambiar el numero por el id que coja de la estrella, nose aun como, de momento renderiza todos
    moverProductos();
    console.log("desplazamiento al bloque principal hecho");
  }});

    //Bloque mis oposiciones, boton Vistas en GRID O EN CAJAS
    var listView = document.querySelector('.list-view');
    var gridView = document.querySelector('.grid-view');
    var projectsList = document.querySelector('.project-boxes');

    listView.addEventListener('click', function () {
      gridView.classList.remove('active');
      listView.classList.add('active');
      projectsList.classList.remove('jsGridView');
      projectsList.classList.add('jsListView');
    });

    gridView.addEventListener('click', function () {
      gridView.classList.add('active');
      listView.classList.remove('active');
      projectsList.classList.remove('jsListView');
      projectsList.classList.add('jsGridView');
    });
    //Fin seccion Boton Vistas grid o cajas

    const sumatorio=document.getElementsByClassName("project-box-wrapper");
    document.querySelector(".status-number").innerHTML=parseInt(sumatorio.length);

//     //Seccion buscador
//     const buscadorWrap=document.querySelector(".search-wrapper");
//     const resultados=document.querySelector(".tablaResultados");
//     const cuerpoResultados = resultados.querySelector("tbody");
//     // resultados.innerHTML="";
//     buscadorWrap.addEventListener("keyup", function(ev){
//       console.log(ev.key);
// // if(ev.target.nodeName.toLowerCase()=="input"){
// baseDeDatos.forEach(elementos=>{
// let fila=cuerpoResultados.insertRow();
// let celda=fila.insertCell();
// celda.textContent=elementos.cabecera;
// let celda2=fila.insertCell();
// celda2.innerHTML="<button id='boton'>ADD</button>";


