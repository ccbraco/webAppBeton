// on déclare les variables pour se localiser dans le DOM
let $flux=  document.getElementById("flux");
let $btnPlayer= document.getElementById("play");
let $btnStop=document.getElementById("stop");

function PlayRadio() {
    $flux.play();
} ;
function StopRadio(){
    $flux.stop();
}

$btnPlayer.addEventListener('onclick', PlayRadio());
$btnStop.addEventListener('onclick', stopRadio());



