const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonFuego =document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const botonReiniciar = document.getElementById("boton-reiniciar")
const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
const inputHipodoge = document.getElementById('Hipodoge')
const inputCapipepo = document.getElementById('Capipepo')
const inputRatigueya = document.getElementById('Ratigueya')
const spanMascotaJugador = document.getElementById('mascota-jugador')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')
const  spanVidasJugador =document.getElementById("vidas-jugador")
const spanVidasEnemigo =document.getElementById("vidas-enemigo")
const sectionMensajes = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")
const contenedorTarjetas = document.getElementById("contenedorTarjetas")

let mokepones =[]
let ataqueJugador 
let ataqueEnemigo
let opcionDeMokepones
let VidasJugador = 3
let vidasEnemigo = 3

class Mokepon{
    constructor(nombre, foto , vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let Hipodoge = new Mokepon("Hipodoge" , "./imagenes/hipodoge-76597a8f-782f-4beb-b9ab-53191d217f12.png" , 5)
let Capipepo = new Mokepon("Capipepo" , "./imagenes/capipepo-26b57f58-e390-416a-b126-0bcf8c8ef477.png" , 5)
let Ratigueya = new Mokepon("Ratigueya" , "./imagenes/pydos-6e458237-73df-40fb-be7c-2d4b477be360.png" , 5)

Hipodoge.ataques.push(
    {nombre:"💧" , id:"boton-agua"},
    {nombre:"💧" , id:"boton-agua"},
    {nombre:"💧" , id:"boton-agua"},
    {nombre:"🔥" , id:"boton-fuego"},
    {nombre:"🌳" , id:"boton-tierra"},
)


Capipepo.ataques.push(
    {nombre:"🌳" , id:"boton-tierra"},
    {nombre:"🌳" , id:"boton-tierra"},
    {nombre:"🌳" , id:"boton-tierra"},
    {nombre:"💧" , id:"boton-agua"},
    {nombre:"🔥" , id:"boton-fuego"},
   
)

Ratigueya.ataques.push(
    {nombre:"🔥" , id:"boton-fuego"},
    {nombre:"🔥" , id:"boton-fuego"},
    {nombre:"🔥" , id:"boton-fuego"},
    {nombre:"💧" , id:"boton-agua"},
    {nombre:"🌳" , id:"boton-tierra"},
)

mokepones.push(Hipodoge, Capipepo,Ratigueya)




function iniciarJuego(){
    
    sectionSeleccionarAtaque.style.display = 'none'
    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" id=${mokepon.nombre} name="mascota" />
                <label class="tarjeta-de-mokepon" for=${mokepon.nombre} >
                    <p>${mokepon.nombre}</p>
                    <img src=${mokepon.foto} alt=${mokepon.nombre} >
                    </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones
    })

    
    sectionReiniciar.style.display = 'none'
    botonMascotaJugador.addEventListener('click' , seleccionarMascotaJugador)
    botonFuego.addEventListener('click' , ataqueFuego)
    botonAgua.addEventListener('click' , ataqueAgua)
    botonTierra.addEventListener('click' , AtaqueTierra)
    botonReiniciar.addEventListener("click" , reiniciarJuego)
}


function seleccionarMascotaJugador() {
    
    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'

    

    if (inputHipodoge.checked){
    spanMascotaJugador.innerHTML = "Hipodoge"
    } else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = "Capipepo"

    } else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = "Ratigueya"
    } else {
        alert("Selecciona una mascota ")
    }

    seleccionarMascotaEnemigo()}


 function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(1,3)
    
    if (mascotaAleatoria == 1){
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    } else if(mascotaAleatoria == 2){
        spanMascotaEnemigo.innerHTML = "Capipepo"
    }else {
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    }
 }

 function ataqueFuego(){
    ataqueJugador = "Fuego"
    ataqueAleatorioEnemigo()
 }
 function ataqueAgua(){
    ataqueJugador = "Agua"
    ataqueAleatorioEnemigo()
 }
 function AtaqueTierra(){
    ataqueJugador = "Tierra"
    ataqueAleatorioEnemigo()
 }

 function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1){
        ataqueEnemigo = "Fuego"
    } else if (ataqueAleatorio == 2){
        ataqueEnemigo = " Agua"
    } else {
        ataqueEnemigo = "Tierra"
    }

    combate()
 }

 function combate (){

    

    if (ataqueEnemigo == ataqueJugador ){
        crearMensaje("Empate")
    
    } else if (ataqueJugador == "Fuego" && ataqueEnemigo == "Agua"){
        crearMensaje("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador == "Agua" && ataqueEnemigo == "Fuego"){
        crearMensaje("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador == "Tierra" && ataqueEnemigo == "Agua"){
        crearMensaje("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }
    else {
        crearMensaje("Perdiste")
        VidasJugador--
        spanVidasJugador.innerHTML = VidasJugador
    }
    revisarVidas()

 }

 function revisarVidas(){
    if (vidasEnemigo == 0){
        crearMensajefinal("FELICITACIONES GANASTE 🎉🙌🥳")
    } else if (VidasJugador == 0){
        crearMensajefinal("LO SIENTO PERDISTE 😭💔🙁")
    }
 }

 function crearMensaje(resultado) {
    
    
    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
 }

 function crearMensajefinal(resultadoFinal) {
    
    
    sectionMensajes.innerHTML = resultadoFinal
   

    
    botonFuego.disabled = true
    
    botonAgua.disabled = true
    
    botonTierra.disabled = true
    
    sectionReiniciar.style.display = 'block'

 }
      
 function reiniciarJuego(){
    location.reload()
 }

function aleatorio(min, max){
    return Math.floor(Math.random()* (max - min+ 1)+ min)
}



window.addEventListener('load' , iniciarJuego)

