let time = document.getElementById("time");
let start  = document.getElementById("start");
let seconds = 1;
let timer;
time.textContent = 0;


start.addEventListener('click', () =>{
    
    timer = setInterval(myTimer,1000);
})

function myTimer(){
    time.textContent = seconds;
    seconds++;

}

function reset(){
    seconds = 0;
    time.textContent = 0;
}





