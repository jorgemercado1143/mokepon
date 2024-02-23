const sectionSelecionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar =document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById("seleccionar-mascota")
const botonReiniciarJuego =document.getElementById("boton-reiniciar")

const sectionSelecionarMascota = document.getElementById("sectionSelecionar-mascota")
const spanMascotaJugador = document.getElementById("mascota-jugador")
const botonSeleccionarMascotaJugador= document.getElementById("seleccionar-mascota")

const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

const spanVidasJugador =document.getElementById("vidas-jugador")
const spanVidasEnemigo =document.getElementById("vidas-enemigo")   



const sectionMensaje = document.getElementById("resultado")
const ataqueDelJugador = document.getElementById("ataque-del-jugador")
const ataqueDelEnemigo = document.getElementById("ataque-del-enemigo")
const contenedorTarjetas =document.getElementById("contenedorTarjetas")
const contenedorAtaques =document.getElementById("contenedorAtaques")

let mokepones=[]
let ataqueJugador=[]
let ataqueEnemigo=[]
let opcionDeMokepones
let inputhipodoge
let inputcapipepo
let inputsarigueya
let mascotaJugador
let ataquesMokepon
let ataquesMoqueponEnemigo
let botonAgua 
let botonFuego
let botonTierra
let botones=[]
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador=0
let victoriasEnemigo=0
let vidasEnemigo = 3
let vidasjugador = 3

class Mokepon{
    constructor(nombre, foto, vida){
        this.nombre=nombre
        this.foto=foto
        this.vida=vida
        this.ataques=[]
    }
}

let hipodoge = new Mokepon("Hipodoge", './imagenes/mokepons_mokepon_hipodoge_attack.png', 5)
let capipepo = new Mokepon("Capipepo", './imagenes/mokepons_mokepon_capipepo_attack.png', 5)
let sarigueya = new Mokepon("Sarigueya", './imagenes/mokepon_ratigueya.png', 5)

hipodoge.ataques.push(
    {nombre: "💧", id: "boton-agua"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🌱", id: "boton-tierra"},
)
capipepo.ataques.push(
    {nombre: "🌱", id: "boton-tierra"},
    {nombre: "🌱", id: "boton-tierra"},
    {nombre: "🌱", id: "boton-tierra"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🔥", id: "boton-fuego"},
)
sarigueya.ataques.push(
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🌱", id: "boton-tierra"},
)

mokepones.push(hipodoge,capipepo,sarigueya)

function iniciarJuego(){

    sectionSelecionarAtaque.style.display="none"

    mokepones.forEach((mokepon) => {
        opcionDeMokepones=`
        <input type="radio" name="mascota" id=${mokepon.nombre}>
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>`
        contenedorTarjetas.innerHTML += opcionDeMokepones

        inputhipodoge = document.getElementById("Hipodoge")
        inputcapipepo = document.getElementById("Capipepo")
        inputsarigueya = document.getElementById("Sarigueya")
    })

    sectionReiniciar.style.display="none"
    
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    botonReiniciarJuego.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador(){
    
    sectionSelecionarMascota.style.display="none"
    sectionSelecionarAtaque.style.display="flex"
   
    if(inputhipodoge.checked){
        spanMascotaJugador.innerHTML=inputhipodoge.id
        mascotaJugador=inputhipodoge.id
    }
    else if(inputcapipepo.checked){
        spanMascotaJugador.innerHTML= inputcapipepo.id
        mascotaJugador=inputcapipepo.id
    }
    else if(inputsarigueya.checked){
        spanMascotaJugador.innerHTML= inputsarigueya.id
        mascotaJugador=inputsarigueya.id
    }else{
        alert("Debes seleccionar una mascota")
        sectionSelecionarAtaque.style.display="none"
        sectionSelecionarMascota.style.display="flex"
    }
    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
    
}
function extraerAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre){
            ataques= mokepones[i].ataques
        }       
    }
    mostrarAtaques(ataques)
}
function mostrarAtaques(ataques){
    ataques.forEach((ataque) => {
        ataquesMokepon =`
        <button id=${ataque.id} class="boton-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })
    botonFuego = document.getElementById("boton-fuego")
    botonAgua = document.getElementById("boton-agua")
    botonTierra = document.getElementById("boton-tierra")
    botones = document.querySelectorAll(".BAtaque")

   /*  botonFuego.addEventListener("click", ataqueFuego)
    botonAgua.addEventListener("click", ataqueAgua)
    botonTierra.addEventListener("click", ataqueTierra) */
}

function secuenciaAtaque(){
    botones.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            if (e.target.textContent ==="🔥") {
                ataqueJugador.push("FUEGO")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
                boton.disabled = true
            }else if (e.target.textContent==="💧") {
                ataqueJugador.push("AGUA")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
                boton.disabled = true
            }else{
                ataqueJugador.push("TIERRA")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
                boton.disabled = true
            }
            ataqueAleatorioEnemigo()
        })
    })
}
function seleccionarMascotaEnemigo(){
    
    let mascotaAleatoria = aleatorio(0, mokepones.length -1)
    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    ataquesMoqueponEnemigo = mokepones[mascotaAleatoria].ataques
    secuenciaAtaque()
}
/* function ataqueFuego(){
    ataqueJugador= "Fuego"
    //alert(ataqueJugador)
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador= "Agua"
    //alert(ataqueJugador)
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador="Tierra"
    //alert(ataqueJugador)
    ataqueAleatorioEnemigo()
}  */

    /* if(ataqueAleatorio==1){
        spanMascotaEnemigo.innerHTML="Hipodoge"
    }else if(ataqueAleatorio==2){
        spanMascotaEnemigo.innerHTML="Capipepo"
    }else{
        spanMascotaEnemigo.innerHTML="Sarigueya"
    } */

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio=aleatorio(0, ataqueAleatorioEnemigo.length -1)

    if(ataqueAleatorio==0 || ataqueAleatorio==1){
        ataqueEnemigo.push("FUEGO") 
    }else if(ataqueAleatorio==3 || ataqueAleatorio==4){
        ataqueEnemigo.push("AGUA")
    }else{
        ataqueEnemigo.push("TIERRA")
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea(){
    if(ataqueJugador.length===5){
        combate()
    }
}
function indexAmbosOponente(jugador, enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate(){
    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index]===ataqueEnemigo[index]){
            indexAmbosOponente(index,index)
            crearMensaje("EMPATE")
        }else if(ataqueJugador[index]==="FUEGO" && ataqueEnemigo[index]==="TIERRA"){
            indexAmbosOponente(index,index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML=victoriasJugador
        }else if(ataqueJugador[index]==="AGUA"&& ataqueEnemigo[index]==="FUEGO"){
            indexAmbosOponente(index,index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML=victoriasJugador
        }else if(ataqueJugador[index]==="TIERRA" && ataqueEnemigo[index]==="AGUA"){
            indexAmbosOponente(index,index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML=victoriasJugador
        }else{
            indexAmbosOponente(index,index)
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
    }
    revisarVidas()
}

function revisarVidas(){
    if(victoriasJugador===victoriasEnemigo){
        crearMensajeFinal("Esto fue un empate")
    }else if(victoriasJugador > victoriasEnemigo){
        crearMensajeFinal("FELICITACIONES, ERES EL GANADOR")
    }else{
        crearMensajeFinal("LO SIENTO, PERDISTE")
    }
}

function crearMensaje(resultado){

    let nuevoAtaqueDelJugador =document.createElement("p")
    let nuevoAtaqueDelEnemigo =document.createElement("p")

    sectionMensaje.innerHTML=resultado
    nuevoAtaqueDelJugador.innerHTML=indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML=indexAtaqueEnemigo

    // let parrafo =document.createElement("p")
    // parrafo.innerHTML= "Tu mascota atacó con " + ataqueJugador + ", la mascota del enemigo ataco con "+  ataqueEnemigo + " - " + resultado
    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal){
    sectionReiniciar.style.display="block"

    //let parrafo =document.createElement("p")
    sectionMensaje.innerHTML= resultadoFinal
    //sectionMensaje.appendChild(parrafo)
    
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max-min+1)+min)
}
window.addEventListener("load" , iniciarJuego)