 document.body.style.backgroundColor = "#f00";


 /*EJEMPLO 1*/

 document.getElementById("b1").onclick = mostrar;
  

function mostrar() {
  alert("al hacer click al boton muestra un alert con este mensaje, uno cn el nodevalue del parrafo y luego cambia ese valor por adios");
  var x = document.getElementsByTagName("p")[0].firstChild.nodeValue;
  alert(x);

  document.getElementsByTagName("p")[0].firstChild.nodeValue= "adios";
}

/*EJEMPLO 2*/




document.getElementsByTagName("button")[1].onclick= suma;
document.getElementsByTagName("button")[2].onclick = resta;
document.getElementsByTagName("button")[3].onclick = multi;
document.getElementsByTagName("button")[4].onclick = div;

function suma(){	
val1= parseInt(document.getElementById("val1").value);
val2=parseInt(document.getElementById("val2").value);
var res= val1+val2;
alert("el resultado es " + res);
}

function resta(){
val1= parseInt(document.getElementById("val1").value);
val2=parseInt(document.getElementById("val2").value);
var res= val1-val2;
alert("el resultado es " + res);
}

function multi(){
val1= parseInt(document.getElementById("val1").value);
val2=parseInt(document.getElementById("val2").value);
var res= val1*val2;
alert("el resultado es " + res);
}

function div(){
val1= parseInt(document.getElementById("val1").value);
val2=parseInt(document.getElementById("val2").value);
var res= val1/val2;
alert("el resultado es " + res);
}







