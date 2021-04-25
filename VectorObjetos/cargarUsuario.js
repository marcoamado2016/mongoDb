console.log("Hola javascript externo");
var titulo=["Nombre","Apellido","Edad","Profesion","Estado civil"];
var sizeArray=titulo.length;
function cargarItems(item){
    titulo.push(item);  
}
var item;
var respuesta
do{
respuesta=confirm("Desea cargar un nuevo item");
if(respuesta){
    item=prompt("Ingrese un item ");
    cargarItems(item);
    alert("Item registrado");
}
}while(respuesta);
datos=[];
for(var i=0;i<titulo.length;i++){
    datos.push(prompt("Ingrese "+titulo[i]));  
  
  }

for(var i=0;i<datos.length;i++){
  document.write("</br> "+titulo[i]+" "+datos[i]);

}