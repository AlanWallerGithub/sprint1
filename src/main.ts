let toDo: string[] = [];
let numeros: number[] = [];
let completados: number[] = [];

function añadir(elemento: string){

    let mensajeFinal = "";

    if (!isNaN(Number(elemento))){
        mensajeFinal = "Debe de ser un string";
    }else{
        if (numeros.length === 0){
            toDo.push(elemento);
            numeros.push(0);
            mensajeFinal = "Se ha añadido la tarea nº 0: "+elemento;
            
        }else{
            toDo.push(elemento);
            numeros.push(numeros.length);
            mensajeFinal = "Se ha añadido la tarea nº "+(numeros.length -1 )+": "+elemento;
            
        }
        
    }

    return mensajeFinal;
    
}

function completar(numero: number){
    let mensajeFinal = "";
    if (isNaN(Number(numero))){
        mensajeFinal = "Debe de ser un número";
    }else{
        
        if (toDo.length == 0 || numeros.length == 0){
            return "¡No existe una ToDo list! No puede marcarse un elemento como completado";
        }


        let i: number = 0;
   let encontrado: boolean = false;
   while (i<=(numeros.length -1) && encontrado == false){
    if (numeros[i] == numero && (completados.includes(numero) == false)){


        
        mensajeFinal = "La tarea nº"+numeros[i]+": "+toDo[i]+"\n ha sido marcada como completada";
        toDo[i] = toDo[i] + ": COMPLETADA";
        completados.push(i);
        encontrado = true;
        
    }else if (numeros[i] == numero && (completados.includes(numero) == true)){
        mensajeFinal = "Esa tarea ya ha sido marcada como completada!";
    }else{
        mensajeFinal = "¡Esa tarea no existe!";
    }
    i++;
   }

    }

    return mensajeFinal;

   

}

function eliminar(numero: number){
    let mensajeFinal = "";
    if (isNaN(Number(numero))){
        mensajeFinal = "Debe de ser un número";
    }else{

        if (toDo.length == 0 || numeros.length == 0){
            return "¡No puede eliminarse nada! No existe una ToDo list";
        }

    let i: number = 0;
    let encontrado: boolean = false;
    while (i<=(numeros.length -1) && encontrado == false){
     if (numeros[i] == numero && toDo[i] != undefined){
         mensajeFinal = "Se ha eliminado la tarea nº"+numeros[i]+": "+toDo[i];
         toDo.splice(i,1);
    
        numeros.length = 0;

        for (let i=0;i<toDo.length;i++){
            numeros.push(i);
        }

        if (completados.includes(i)){
            let indiceCompletado = completados.indexOf(i);
            completados.splice(indiceCompletado,1);
        }
        



         encontrado = true;
     }else{
        mensajeFinal = "¡Esa tarea no existe!";
    }
     i++;
    }
    }

    return mensajeFinal;
 
 }

 function mostrar(){

    if (toDo.length == 0 || numeros.length == 0){
        return "¡No existe una ToDo list!";
    }

    return toDo;
 }

module.exports = {añadir, completar, eliminar, mostrar, toDo, numeros, completados};



