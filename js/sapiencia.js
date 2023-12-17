let slideIndex = 1; //variable que mantendrá el seguimiento de la imagen que se está mostrando

const TIMEOUT_MS = 3000;
let temporizador = setTimeout(() => {pasarSlide(1)}, TIMEOUT_MS);

mostrarSlide(slideIndex); //nos aseguramos que cuando cargue la página, se muestra la primera imagen

//esta función, al llamarla, estableceremos la nueva imagen que se mostrará
function pasarSlide(n){
    mostrarSlide(slideIndex += n);
}

//esta función hace lo mismo que la anterior, pero controla los puntos

function slideActual(n){
    mostrarSlide(slideIndex = n);
}

function mostrarSlide(n){

    clearTimeout(temporizador);

    let i;

    let slides = document.getElementsByClassName("slide");
    let punto = document.getElementsByClassName("punto");

    //establecemos que si el número pasado como argumento es mayor que la longitud de slides (que será la cantidad de imágenes que tengan la clase slide), muestre la imagen n1

    if(n > slides.length){
        slideIndex = 1;
    }

    //establecemos otra condición, que si es menor que uno, que se muestre la última imagen

    if(n<1){
        slideIndex = slides.length;
    }

    //recorremos los slides para ponerles display: none y ocultar las imágenes

    for(i=0;i<slides.length;i++){
        slides[i].style.display = "none";
    }

    //cambiamos según la imagen activa, el boton que estará activo

    for(i=0;i<punto.length;i++){
        punto[i].className = punto[i].className.replace(" activo", "");
    }

    //la imagen que esté activa se establece como block, así como el punto
    slides[slideIndex-1].style.display = "block";
    punto[slideIndex-1].className += " activo";


    temporizador = setTimeout(() => {pasarSlide(1)}, TIMEOUT_MS);
}