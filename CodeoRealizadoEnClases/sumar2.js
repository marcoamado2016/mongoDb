function sumar(a,b){

    return a+b;
    }
    
    function tomaDatos(){
        var  n1=parseInt(document.getElementById("t1").value)
    
        var  n2=parseInt(document.getElementById("t2").value)
        var result;
        if(isNaN(sumar(n1,n2))){
        result="Ingrese los numeros"
        }else{
            result=sumar(n1,n2);
        }
    
      return  result;
    }