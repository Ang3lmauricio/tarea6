document.querySelector('img').addEventListener('click', abrirRegalo);

function abrirRegalo(event) {
    const image = event.currentTarget;
    image.src = "../iconos/giphy.gif";
    
    const mensaje = document.querySelector("h1");
    mensaje.textContent = "Felicidades";
    image.removeEventListener("click", abrirRegalo);
}
