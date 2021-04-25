class Persona{
    constructor(nombre,apellido,edad){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
    }
    getNombre(){
    return `Nombre ${this.nombre}`
    }

    setNombre(nombre){
     this.nombre=nombre;
    }

    getApellido(){
    return `Apellido ${this.apellido}`;
    }

    setApellido(apellido){
        this.apellido=apellido;
    }
    getEdad(){
    return `Edad ${this.edad}`;
    }

    setEdad(edad){
    this.edad=edad;    
    }
    enviarDigito(digito){
    return digito;
    }
    estadoEncendido(e){
    return e;

    }
    toString(){
    return `${this.getNombre()} ${this.getApellido()} ${this.getEdad()}`    
    }

}

class ControlRemoto{
  constructor(digito,accion){
   this.digito=digito;
   this.acccion=accion   
  }
  getdigito(){
  return `Digito ${this.digito}`;
  }
  setDigito(digito){
  this.digito=digito;
  }

  getAccion(){
   return `Accion ${this.acccion}`;
}
  setAccion(accion){
   this.acccion=accion;
  }
  gestionarDigitos(d1,d2){
   return d1+""+d2;
  }

  toString(){
   return `Digito ${this.digito} Accion ${this.acccion}`   
  }
}


class Televisor{
    constructor(marca,estado){
    this.marca=marca;
    this.estadoEncedido=estado;

    } 
    getMarca(){
    return `Marca ${this.marca}`
    }
    setMarca(marca){
    this.marca=marca;
    }

    getEstado(){
    return this.estadoEncedido;
    }
    setEstado(estado){
        this.estadoEncedido=estado;   
    }
    encenderTelevisor(e){
     if(e!=""){
       this.setEstado(true);
     }
    }

    toString(){
    return `Marca ${this.marca} Estado ${this.estado}`    
    }
    
    
     

}

//Creacion de la persona 
p=new Persona("Maria","Noel",35);
c=new ControlRemoto();
t=new Televisor();
console.log(p.toString())
console.log("Encender el televisor.....");
var encender=confirm("Desea encender el televisor.");
var digi1=0;
var digi2=0;
if(encender){
 digi1=parseInt(prompt("Ingresar un digito"));
 digi2=parseInt(prompt("Ingresar otro digito"));
 p.enviarDigito(digi1)
 p.enviarDigito(digi2)  
 var digitos=c.gestionarDigitos(p.enviarDigito(digi1),p.enviarDigito(digi2));
 t.encenderTelevisor(digitos);
 console.log("El televisor se esta preparando.......");
 var en=p.estadoEncendido(t.getEstado())
 console.log("El televisor esta encendido "+en);
}else{

 console.log("Gracias por utilizar el sistemas...");   
}
