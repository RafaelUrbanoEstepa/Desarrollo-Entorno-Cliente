var valores = [true, 5, false, "hola", "adios", 2];
const Texto1 = valores[3];
const Texto2 = valores[4];
const Boolean1 = valores[0];
const Boolean2 = valores[2];
const Numero1 = valores[1];
const Numero2 = valores[5];

if(Texto1 > Texto2){
    alert("Hola es mayor que adios");
}else{
    alert("Adios es mayor que hola");
};


const Booleanoverdadero = Boolean1|| Boolean2;
const Booleanofalso = Boolean1 && Boolean2;

alert("Al usar la operacion or, el resultado es: "+ Booleanoverdadero);

alert("Al usar la operacion and, el resultado es: "+ Booleanofalso);


const Suma = Numero1 + Numero2;
const Resta = Numero1 - Numero2;;
const Multiplicacion = Numero1 * Numero2;
const Division = Numero1 / Numero2;
const Modulo = Numero1 % Numero2;

alert("La suma de los dos números es "+Suma);
alert("La resta de los dos números es "+Resta);
alert("La multiplicacion de los dos números es "+Multiplicacion);
alert("La division de los dos números es "+Division);
alert("El modulo de los dos números es "+Modulo);

