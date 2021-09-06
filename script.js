//Arreglo que tendrá las palabras del juego

var listado_palabras = ["CAR","HELLO","DURING","MEMORY","BYE","NAME",
    "ADDRESS","PICTURE","BUS","RESTAURANT","HOUSE","CITY","TRAVEL","TRIP",
    "VACATIONS","BOOK","STUDY","SOMETIMES","OFTEN","ALWAYS","ENVIRONMENT",
    "RESPONSABILITY","NECESARY","DISCOVER","WINDOWS","COFFEE","TEA","BREAD","TABLE",
    "DIFFICULT","AMAZING","GREAT","SHOULDER","REMAIN","FOUR","FURTHER","BEST","REALLY",
    "CONGRATULATIONS","BEAUTIFUL"];

var acertados = 0;
var timer, indice;
var tiempo = 60;

function comenzarJuego(){
    //dejo visible la pantalla del juego y oculto el resto
    document.getElementById("inicio").style.display="none"
    document.getElementById("juego").style.display="block"
    document.getElementById("final").style.display="none"

    //Posiciones en el curso en el input
    document.getElementById("palabra_ingresada").focus();

    //Cargamos la Palabra
    cargarPalabra();

    //Tiempo cada 1 segundo llamamos la funcion restar tiempo
    timer = setInterval('restarTiempo()', 1000);
}

//Funcion que carga la siguiente palabra del arreglo de forma

function cargarPalabra(){
    //genero la posición de forma aleatoria
    indice = Math.round(Math.random()==(listado_palabras.length-1));
    document.getElementById("palabra").innerHTML=listado_palabras[indice];


    //Elimino la posición ya mostrada
    listado_palabras.splice(indice,1);
}

//funcion que compara la palabra ingresada con la mostrada
function comparar(){
    var palabra_mostrada = document.getElementById("palabra").innerHTML;

    var palabra_digitada = document.getElementById("palabra_ingresada").value;

    //convierto toda la palabra tecleada a mayúscula
    palabra_digitada = palabra_digitada.toUpperCase();

    if(palabra_mostrada==palabra_digitada){
        acertados++;
        document.getElementById("palabra_ingresada").value="";
        agregarNodo(palabra_digitada);
        cargarPalabra();//cargo otra palabra
    }
}

function agregarNodo(palabra){
    var span = document.createElement('span');
    span.innerHTML = palabra;
    document.getElementById("registro").appendChild(span);
}

//funcion que muestra el tiempo

function restarTiempo(){
    tiempo--;
    document.getElementById("tiempo").innerHTML = tiempo;
    if(tiempo==0){
        //Detengo el tiempo
        clearInterval(timer);
        document.getElementById("juego").style.display = "none";
        document.getElementById("final").style.display = "block";
        document.getElementById("cantidad_final").innerHTML = acertados;

    }
}