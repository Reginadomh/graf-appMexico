const verdeSlider = document.getElementById("verde");
const rojoSlider = document.getElementById("rojo");

const verdeHex = document.getElementById("verdeHex");
const rojoHex = document.getElementById("rojoHex");

const franjaVerde = document.getElementById("franjaVerde");
const franjaRoja = document.getElementById("franjaRoja");

function rgbToHex(r, g, b) {
  return (
    "#" +
    [r, g, b].map(x => x.toString(16).padStart(2,"0")).join("").toUpperCase()
  );
}

function actualizarColores() {
  const verde = parseInt(verdeSlider.value);
  const colorVerde = rgbToHex(0, verde, 0);
  franjaVerde.style.background = colorVerde;
  verdeHex.textContent = colorVerde;

  const rojo = parseInt(rojoSlider.value);
  const colorRojo = rgbToHex(rojo, 0, 0);
  franjaRoja.style.background = colorRojo;
  rojoHex.textContent = colorRojo;
}

verdeSlider.addEventListener("input", actualizarColores);
rojoSlider.addEventListener("input", actualizarColores);

actualizarColores();
