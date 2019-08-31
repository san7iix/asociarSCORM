$(document).ready(function() {

  var imagenes = $("img")
  var frases = $(".frase")

  asociarEventos()

  function asociarEventos() {
    for (var i = 0; i < frases.length; i++) {
      frases[i].addEventListener("click", function(e) {
        var seleccionado = $(".seleccionado")
        if(e.target.classList[1]!='correcto'){
          if (seleccionado.length == 0) {
            e.target.classList.add("seleccionado")
          }
          else if ((seleccionado.length == 1) && (seleccionado[0].id == e.target.id)) {
            seleccionado[0].classList.remove("seleccionado")
          }
        }
      })
    }
    for (var i = 0; i < imagenes.length; i++) {
      imagenes[i].addEventListener("click", function(e) {
        verificar(e.target)
      })
    }
  }

  function verificar(target) {
    var seleccionado = $(".seleccionado")
    if(seleccionado.length>0){
      if (target.id === seleccionado[0].id) {
        target.classList.add("correcto")
        seleccionado[0].classList.add("correcto")
        seleccionado[0].classList.remove("seleccionado")
      }
      terminar()
    }
  }

  function terminar() {
    var correctas = $(".correcto")
    if (frases.length == correctas.length / 2) alert("Completado");
  }

});
