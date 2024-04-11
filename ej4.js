function calificacion()
{
    var parcial1 = parseFloat(document.getElementById("parcial1").value);  
    var parcial2 = parseFloat(document.getElementById("parcial2").value);
    var parcial3 = parseFloat(document.getElementById("parcial3").value);
    var ex = parseFloat(document.getElementById("ex").value);
    var pr = parseFloat(document.getElementById("pr").value);
    var sp=parcial1 + parcial2 + parcial3 
    var tp=(sp*55) / 30
    var te=(ex*30)/10
    var tpr = (pr*15)/10
    var final = tpr + te + tp

    document.getElementById("sp").innerHTML = "el valor de tus 3 parciales es: " + tp;
    document.getElementById("ex").innerHTML = "el valor de tu examen es: " + te;
    document.getElementById("pr").innerHTML = "el valor de tu proyecto es: " + tpr;
    document.getElementById("final").innerHTML = "tu calificacion final es: " + final;
}