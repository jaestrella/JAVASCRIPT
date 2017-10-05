/*for (var i=0; i<process.argv.length; i++){
  console.log('Argumento ' + i + ": "+process.argv[i]);
}*/


if (process.argv.length < 3){
  process.exit(1);
}

console.log('cadena leida: '+process.argv[2]);
const cadena=process.argv[2];

function procesarCadena(valorCadena){
  var _cadena=valorCadena;
  //todo lo que se define aqui es privado
  return{
    longitudCadena: function(){return _cadena.length;},
    cadenaEsNumero: function(){return !isNaN(_cadena);},
    cadenaMayuscula: function(){return _cadena.toUpperCase();},
    cadenaReves: function(){return _cadena.split('').reverse().join('');},
    esPalindromo: function(){return _cadena===this.cadenaReves();}
  };
}

const cadena1=procesarCadena(cadena);

console.log('longitud de la cadena: '+cadena+' es: '+
	    cadena1.longitudCadena());

console.log('la cadena ' + cadena+' ¿es un numero? '+
            cadena1.cadenaEsNumero());

console.log('la cadena ' +cadena+' en mayuscula ' +
            cadena1.cadenaMayuscula());

console.log('la cadena ' +cadena+' al reves ' +
            cadena1.cadenaReves());

console.log('la cadena ' +cadena+ ' ¿es palindromo? '+
            cadena1.esPalindromo());


