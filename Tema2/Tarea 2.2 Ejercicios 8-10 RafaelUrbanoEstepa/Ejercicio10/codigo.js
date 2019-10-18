{if(palindromador())	{ // lo metemos dentro del bloque {} para evitar la globalización de variables
	console.log("Esto es un palíndromo");
}else{
	console.log("Esto no es un palíndromo")
};

let palindromador=function() { // usamos la declaración para evitar la globalidad
  let cadena = prompt("Escriba una cadena de caracteres").toLowerCase();
  cadena=cadena.replace(/ /g, "");
  for (let i=0;i<cadena.length;i++){
		if(cadena[i]!=cadena[cadena.length-i-1]){ //vamos comparando los carácteres del principio con sus homólogos del final, si co coinciden será false, el for se detendrá, y la cadena no será un palídromo 
			return false;
		};
	};
	return true;
};
};