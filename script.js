const botaoPlayPause = document.getElementById("play-pause")
const audioCapitulo = document.getElementById("audio-capitulo")
const numeroCapitulo = 10
let taTocando = 0

function tocarFaixa(){
    audioCapitulo.play()
}

function pausarFaixa(){
    audioCapitulo.pause()
}

function tocarOuPausar(){
    if(taTocando === 0){
        tocarFaixa()
        taTocando = 1
    }else{
        pausarFaixa()
        taTocando = 0
    }
}

botaoPlayPause.addEventListener('click', tocarOuPausar)
