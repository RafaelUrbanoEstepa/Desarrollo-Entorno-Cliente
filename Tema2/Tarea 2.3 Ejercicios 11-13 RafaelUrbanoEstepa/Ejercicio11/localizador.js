
let nenlaces = document.createElement("li");
let direccion = document.createElement("li");
let nenlacesprueba = document.createElement("li");
let nenlaces3p = document.createElement("li");
let lista = document.createElement("ul");

let mostrador = document.getElementById("mostrador");


// ------------------- Usamos .lenght para conocer la cantidad de enlaces de la página ------------------------

let recuento =  document.getElementsByTagName("a");

let textnenlaces = document.createTextNode("Se han contado "+ recuento.length +" enlaces en total.");

nenlaces.appendChild(textnenlaces);

// ------------------- Recogemos el enlace del penultimo, pero debemos restar otro 1 más ya que el primer indice del array es 0 ------------------------

let textdireccion = document.createTextNode("La dirección del penúltimo enlace es:"+ recuento[((recuento.length-1)-1)]);

direccion.appendChild(textdireccion);


// ------------------- Haremos un bucle for para ir contando la cantidad de enlaces hacia prueba------------------------

let contador = 0;

for (let i = 0; i < recuento.length; i++) {
    console.log(recuento[i].href);
    if (recuento[i].href == "http://prueba/") {    
     contador++
    }
    
}

let textnenlacesprueba = document.createTextNode("Se han contado "+ contador +" enlaces apuntando a http://prueba en total.");

nenlacesprueba.appendChild(textnenlacesprueba);

//---------------------------------------- Igual que el primero, solo que especificando la búsqueda en el tercer párrafo-----------------------

let recuentop =  document.getElementsByTagName("p");

let parrafo3 = recuentop[2];
let recuentoa3 = parrafo3.getElementsByTagName("a").length

let textnenlaces3p = document.createTextNode("Se han contado "+ recuentoa3 +" enlaces en el tercer párrafo.");
nenlaces3p.appendChild(textnenlaces3p);
//---------------------------------------- Colocamos todos los elementos en el arbol DOM ----------------------------------------

lista.appendChild(nenlaces);
lista.appendChild(direccion);
lista.appendChild(nenlacesprueba);
lista.appendChild(nenlaces3p);

mostrador.appendChild(lista);
