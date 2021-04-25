console.log("Hola javascript externo");
var titulo=["Nombre","Apellido","Edad","Profesion","Estado civil"];
var sizeArray=titulo.length;
function cargarItems(item){
    titulo.push(item);  
}
var item;
var respuesta;
var matriz=[];
do{
respuesta=confirm("Desea cargar un nuevo item");
if(respuesta){
    item=prompt("Ingrese un item ");
    cargarItems(item);
    alert("Item registrado");
}
}while(respuesta);
datos=[];
var carga=false;
var cont=0;
var carga=confirm("Desea carga los datos");
while(carga){
for(var i=0;i<titulo.length;i++){
    datos.push(prompt("Ingrese "+titulo[i]));  
  
  }
  matriz[cont]=datos;
  carga=confirm("Desea carga los datos");
}

for(var i=0;i<matriz.length;i++){  //Recorrido de las filas
  for(var j=0;j<matriz[i].length;j++){ //Recorrido de las columnas 
    document.write("</br> "+matriz[i][j]+" </br>");  //matriz[filas][columnas]
  }
}