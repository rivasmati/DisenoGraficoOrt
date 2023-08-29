//Ejercicio 2

var lado
var perimetro

lado = prompt("Escribi un lado del cuadrado")

if(lado < 0){
    console.log("Es menor a 0");
    lado = prompt("Escribi un lado mayor a 0")
}else{
    perimetro = lado * 4
    console.log(perimetro)
}
