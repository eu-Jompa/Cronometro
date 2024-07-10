const playBtn = document.querySelector('#play');
const reset = document.getElementsByClassName('reset');


const windowsHora = document.querySelector(".horas");
const windowsMinuto = document.querySelector(".minutos");
const windowsSegundo = document.querySelector(".segundos");
const windowsMiliSegundo = document.querySelector(".milisegundos");

let horas = 0;
let minutos = 0;
let segundos = 0;
let milisegundos = 0;
let interval = 0;
let pause = true
// funcões

playBtn.addEventListener('click', initTimer);


function initTimer(){
    let togglePlayPause = playBtn.getAttribute('action')
    interval = setInterval(()=>{
        milisegundos += 10;

        if(togglePlayPause == "start"|| togglePlayPause == "continue"){
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
            windowsHora.textContent= horas;
            windowsMinuto.textContent= minutos;
            windowsSegundo.textContent= segundos;
            windowsMiliSegundo.textContent = milisegundos;
            
            playBtn.addEventListener('click', pausetimer);
            function pausetimer(){
                togglePlayPause = playBtn.setAttribute("action", "pause")
                
            }
            
        }
        },10)
    
}


