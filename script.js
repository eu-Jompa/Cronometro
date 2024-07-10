const playBtn = document.querySelector('#play');
const reset = document.querySelector('#reset');;
const pauseBtn = document.querySelector('#pause');

const windowsHora = document.querySelector(".horas");
const windowsMinuto = document.querySelector(".minutos");
const windowsSegundo = document.querySelector(".segundos");
const windowsMiliSegundo = document.querySelector(".milisegundos");

let horas = 0;
let minutos = 0;
let segundos = 0;
let milisegundos = 0;
let interval = 0;
var pause = false;
// funcões

playBtn.addEventListener('click', initTimer);
pauseBtn.addEventListener('click', pauseTimer);
reset.addEventListener('click', resetTimer);

function initTimer(){
    pause= false
    if(pause == false){
        interval = setInterval(()=>{
        milisegundos += 10;
            if(milisegundos === 1000){
                segundos++;
                milisegundos=0;
            }
            if(segundos===60){
                minutos++;
                segundos= 0;
            }
            if(minutos===60){
                horas++;
                minutos =0;
            }
            windowsHora.textContent= formatTime(horas);
            windowsMinuto.textContent= formatTime(minutos);
            windowsSegundo.textContent= formatTime(segundos);
            windowsMiliSegundo.textContent = formatmilisegundos(milisegundos);
            
        },10)
        pauseBtn.style.display= 'inline';
        playBtn.style.display= 'none';   
    }
    
}
function formatTime(time){
    return time <10 ? `0${time}`: time;
}
function formatmilisegundos(time){
    return time <100 ? time.padStart(3,"0") : time;
}
    function pauseTimer(){
        pause = true;
        clearInterval(interval)
        
        pauseBtn.style.display= 'none';
        playBtn.style.display= 'inline';
    }
    function resetTimer(){
        pauseTimer();
        horas= 0;
        minutos= 0;
        segundos= 0;
        milisegundos= 0;
        windowsHora.textContent= formatTime(horas);
            windowsMinuto.textContent= formatTime(minutos);
            windowsSegundo.textContent= formatTime(segundos);
            windowsMiliSegundo.textContent = formatmilisegundos(milisegundos);
        
    }



