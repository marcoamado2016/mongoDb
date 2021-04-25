function logueo(){ //La funcion  esta compuesta de la firma o cabecera, en la que contiene la palabra reservada function y nombre de la funcion
                  //La funcion puede recibir parametros, que van colocados 
  var usuario=prompt('Ingrese el  usuario: ');
  var contrasenia=prompt('Ingrese el  contraseña: ');
  return validacion(usuario,contrasenia);
}
function suma(a,b){
  return a+b;


}
function resta(a,b){
  return a-b;

}
function cargaDatos(){
	 var resultado=0;
	  if (logueo()) {//si logue es verdadero es por que ingreso la contraseña y el usuario correcto
      
      var n=parseInt(prompt('Ingrese el  valor de a: '));
      var m=parseInt(prompt('Ingrese el  valor de b: '));
      
      resultado=operacion(n,m);

	  }
	  else
	 {

	 	alert('No se puede hacer el calculo por que no esta logueado');
	 }
	 if (resultado==0) {
      var resultado="Sin valor";
	 }
 return resultado;
}
function operacion(a,b){
   var op=0;
   var calculo="";
	
		   op=parseInt(prompt('Ingrese una operacion 1-Sumar 2-multiplicacion 3-divide 4-resta'));
		  
		  switch(op)
		  {
			case 1:
		      calculo="SUMA: "+suma(a,b);
			break;
		    case 2:
		      calculo="MULTIPLICACION: "+multiplicacion(a,b);
			break;
			case 3:
		       calculo="DIVISION: "+division(a,b);
			break;

		    case 4:
		       calculo="RESTA: "+resta(a,b);
			break;

			default: calculo='Opcion  incorrecta';
		 
		  }

	 


   return calculo;
}

function validacion(u,c){
	ban=false;
  if (u=="marco" && c=="123") {
    alert(u+' bienvenido al sistema de calculos');
    ban=true;
  }
  else{
         
          if (u!="marco" && c!="123") {
    		alert('Usuario y contraseña incorrecta');
	  }else{

	        if (u!="marco") {
	         alert('Usuario incorrecto');

		   }else{
	         alert('contraseña incorrecta ');

		   }

	  }

	  

      }
   
 
return ban;
}
////La funciones se pueden programar en cualquier orden.Pero si hay que considerar el orden de las llamadas
function multiplicacion(a,b){
  return a*b;

}
function division(a,b){
 return a/b;
}
