//Cerrar tarjeta
function cerrarTarjeta(button) {
    var card = button.parentElement; // Obtén el elemento padre (la tarjeta)
    card.style.display = "none"; // Oculta la tarjeta al hacer clic en el botón de cerrar
  }
//Alerta
function Alerta() {
    var alerta = document.getElementById("AlertaC");
    alerta.style.display = "block";
}

function cerrarAlerta() {
    var alerta = document.getElementById("AlertaC");
    alerta.style.display = "none";
}

  