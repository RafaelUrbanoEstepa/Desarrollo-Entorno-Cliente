function anade() {

    let recuento =  document.getElementsByTagName("li") ;

    let total = recuento.length -4;

    let nodo = document.createElement("li");

    let lista = document.getElementById("lista");

    let textolista = document.createTextNode("Este es el elemento "+ total +" que se ha añadido");
    nodo.appendChild(textolista);
  
    
    lista.appendChild(nodo);
  }