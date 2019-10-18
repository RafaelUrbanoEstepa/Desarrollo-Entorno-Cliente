let cadena = prompt("Escriba una cadena de caracteres");

mayusculador(cadena);

function mayusculador(cadena) {
  if (cadena == cadena.toLowerCase()) {
    console.log("La cadena está enteramente escrita en minúscula");
  }else if(cadena == cadena.toUpperCase()){
    console.log("La cadena está enteramente escrita en mayúscula");
  }else{
    console.log("La cadena está escrita tanto en minúscula como en mayúscula");
  }
};





