if (process.argv.length < 3){
  console.log('Falta documento a analizar');
  process.exit(1);
}

console.log('cadena leida: '+process.argv[2]);
const cadena=process.argv[2];
//creamos clousure para objetos documento
var documento=function (nif_dni) {
  var _documento=nif_dni
  var calcularLetra=function(){
        const letra='ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'
        var numero=parseInt(_documento,10);
        return letra[numero];
  };
  return{
        comprobarFormato:function(){return/^[\d]{8}[a-zA-Z]?$/.test(_documento);},

        tipoDocumento:function(){if (this.comprobarFormato()){
                                   if(_documento.length===8){
				     return 'dni';
                                   }else{
                                      return 'nif';
				   }
                                 }else{
                                  return 'documento no valido';   
                                 };},
       letraDNI:function(){if (this.tipoDocumento()==='dni'{
                             return calcularLetra()
                           }else if(this.tipoDocumento()==='nif'){
                           }else{
                             return 'documento no valido'
                           };}, 
 
 }
}

//creamos objeto documento
var documento1=documento(cadena);
console.log(cadena+" ¿Formato correcto? "+documento1.comprobarFormato());
console.log(cadena+" Tipo documento "+documento1.tipoDocumento());
