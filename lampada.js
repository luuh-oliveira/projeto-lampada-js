"use strict"
const lampada = document.getElementById("lampada")
let idLigar
let idDesligar

function botoesLigaDesliga(ligarStatus, desligarStatus, piscarStatus) {
    const ligar = document.getElementById("ligar")
    const desligar = document.getElementById("desligar")
    const piscar = document.getElementById("piscar")


    ligar.disabled = ligarStatus
    desligar.disabled = desligarStatus
    piscar.disabled = piscarStatus
}

function lampadaQuebrada() {
    return lampada.src.includes("quebrada")
}

function ligarLampada() {    

    if (!lampadaQuebrada()) {
        lampada.src = "img/ligada.jpg"
        botoesLigaDesliga(true, false)
    }

}

function desligarLampada() {  

    if (!lampadaQuebrada()) {
        lampada.src = "img/desligada.jpg"
        botoesLigaDesliga(false, true)
    }

}

function quebrarLampada() {

    lampada.src = "img/quebrada.jpg"
    botoesLigaDesliga(true, true, true)

}

function pararPiscar(){
    clearInterval(idLigar)
    clearInterval(idDesligar)
}

function piscar(){
    const botaoPiscar = document.getElementById("piscar")
    if (botaoPiscar.textContent == "Piscar"){
    idLigar = setInterval(ligarLampada, 500)
    idDesligar = setInterval(desligarLampada, 1000)
    botaoPiscar.textContent = "Parar"
    }else{
        pararPiscar()
        botaoPiscar.textContent = "Piscar"
    }
}

document.getElementById("ligar").addEventListener("click", ligarLampada)

document.getElementById("desligar").addEventListener("click", desligarLampada)

document.getElementById("lampada").addEventListener("dblclick", quebrarLampada)

document.getElementById("lampada").addEventListener("mouseover", ligarLampada)

document.getElementById("lampada").addEventListener("mouseleave", desligarLampada)

document.getElementById("piscar").addEventListener("click", piscar)