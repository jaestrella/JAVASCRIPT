var incrementar=(function(){
var contador=0;
return function(){return contador++};
})();
console.log(incrementar());

