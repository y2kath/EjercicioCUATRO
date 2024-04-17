function calcularCalificacionFinal() {
    var parcial1 = parseFloat(document.getElementById("parcial1").value);
    var parcial2 = parseFloat(document.getElementById("parcial2").value);
    var parcial3 = parseFloat(document.getElementById("parcial3").value);
    var examen = parseFloat(document.getElementById("examen").value);
    var trabajo = parseFloat(document.getElementById("trabajo").value);
  
    if (isNaN(parcial1) || isNaN(parcial2) || isNaN(parcial3) || isNaN(examen) || isNaN(trabajo)) {
      document.getElementById("resultado").innerHTML = "Por favor ingresa todas las calificaciones.";
      return;
    }
  
    var promedioParciales = (parcial1 + parcial2 + parcial3) / 3;
    var calificacionFinal = (promedioParciales * 0.55) + (examen * 0.30) + (trabajo * 0.15);
  
    document.getElementById("resultado").innerHTML = "Tu calificación final es: " + calificacionFinal.toFixed(2);
  }
  