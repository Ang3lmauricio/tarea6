
function abrirRegalo(event) {
    const imagen = event.currentTarget;
    imagen.removeEventListener("click", abrirRegalo);

    const regaloCerrado = document.querySelector("#regalo-cerrado");
    const regaloAbierto = document.querySelector("#regalo-abierto");

    regaloCerrado.classList.add("oculto");
    regaloAbierto.classList.remove("oculto");
}

const imagen = document.querySelector("#regalo-cerrado img");
imagen.addEventListener("click", abrirRegalo);
