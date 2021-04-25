function tomarDatos() {
 
    var n1=parseInt(document.getElementById('n1').value);
    var n2=parseInt(document.getElementById('n2').value)
    console.log(n1)
    console.log(n2)
    var suma=0
    if(isNaN(n1) || isNaN(n2)){
        alert("Ingrese ambos datos")
    }else{
       suma= sumar(n1,n2)
    }

    console.log(suma)
 return suma;




}





function sumar(n1,n2){
    return n1+n2;
}



