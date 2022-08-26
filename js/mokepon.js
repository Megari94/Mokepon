function seleccionarMascotaJugador(){
    let inputHipodoge= document.getElementById("hipodoge")
    let inputCapipepo= document.getElementById("capipepo")
    let inputRatigueya= document.getElementById("ratigueya")
    
    if(inputHipodoge.checked){
        alert("Seleccionaste el bicho 1")
    }else if(inputCapipepo.checked){
        alert("Seleccionaste el bicho 2") 
    }else if(inputRatigueya.checked){
        alert("Seleccionaste el bicho 3")
    }else{
        alert("Selecciona una mascota")
    }
}

let botonMascotaJugador = document.getElementById("boton-mascota");
botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)