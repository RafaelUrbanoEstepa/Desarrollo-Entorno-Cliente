const Numero = prompt("Escriba el número entero del que quiera calcular el factorial");
let contador = Numero -1;
let factorial = Numero;
if(Numero <= 0){ // comprobamos que se introduzca un valor válido
    alert("El numero introducido no es válido")
}else{
 for(Numero;  contador > 1; contador--){
factorial = factorial * contador; // multiplicamos el total de la multiplicación actual por el siguiente número en la lista
};
 alert(factorial); // mostramos el factorial
};




