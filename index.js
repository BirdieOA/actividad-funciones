let contador = 1;

document.querySelector(".boton1").addEventListener("click", empezar);

function empezar() {
  document.querySelector(
    ".caja"
  ).innerHTML = `<button class="boton2">Incrementar</button> <button class="boton3">Reiniciar</button> <div class="contador"></div>`;
  actualizar();
  document.querySelector(".boton2").addEventListener("click", incrementar);
  document.querySelector(".boton3").addEventListener("click", reiniciar);
}

function incrementar() {
  contador++;
  actualizar();
}

function reiniciar() {
  contador = 1;
  actualizar();
}

function actualizar() {
  document.querySelector(".contador").innerHTML = contador;
}
