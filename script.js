const horas = document.querySelector(".horas");
const minutos = document.querySelector(".minutos");
const segundos = document.querySelector(".segundos");
let hora=0, minuto=0, segundo=0;
function init(){
    if(segundos== 60){
        minutos= minutos++;
        segundos = 0
    }
    if(minutos==60){
        horas= horas++;
        minutos =0
    }
    
}