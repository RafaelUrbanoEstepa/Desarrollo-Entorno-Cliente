const Letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

const Numero = prompt("Escriba el número de su DNI");

if(Numero < 0 || Numero > 99999999){
    alert("El número proporcionado no es válido.");
}else{
    const Letra = prompt("Escriba la letra de su DNI");
    let numeroLetra = Numero % 23;
    let letraCalculada = Letras[numeroLetra];
        if(letraCalculada == Letra){
            alert("Tanto el número: "+Numero+" como la letra: "+Letra+" son correctos.");
                }else{
                    alert("La letra introducida no es correcta.")
                };
};