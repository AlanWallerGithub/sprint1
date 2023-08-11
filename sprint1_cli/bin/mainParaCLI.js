"use strict";

const fs = require("fs");

function añadir(elemento) {


    let mensajeFinal = "";
    if (!isNaN(Number(elemento))) {
        mensajeFinal = "Debe de ser un string";
    }
    else {

        let toDo = [];
        let numeros = [];

        try{ 
            toDo = Object.values(JSON.parse(fs.readFileSync("arrayToDo.json")));
            } catch { 
            // Si no existe el array, lo crearé más abajo
            }

        try{ 
            numeros = Object.values(JSON.parse(fs.readFileSync("arrayNumeros.json")));
            } catch { 
            // Si no existe el array, lo crearé más abajo
            }

        if (numeros.length === 0) {



            toDo.push(elemento);
            numeros.push(0);

            let toDoJSON = JSON.stringify(toDo);

            let numerosJSON = JSON.stringify(numeros);


            
            fs.writeFile('arrayToDo.json', toDoJSON, (err) => {
            if (err) throw err;
            });

            fs.writeFile('arrayNumeros.json', numerosJSON, (err) => {
                if (err) throw err;
                });

            mensajeFinal = "Se ha añadido la tarea nº 0: " + elemento;
        }
        else {

            toDo.push(elemento);
            numeros.push(numeros.length);

            let toDoJSON = JSON.stringify(toDo);

            let numerosJSON = JSON.stringify(numeros);

            fs.writeFile('arrayToDo.json', toDoJSON, (err) => {
                if (err) throw err;
                });
    
                fs.writeFile('arrayNumeros.json', numerosJSON, (err) => {
                    if (err) throw err;
                    });


            mensajeFinal = "Se ha añadido la tarea nº " + (numeros.length - 1) + ": " + elemento;
        }
    }
    return console.log(mensajeFinal);
}
function completar(numero) {
    let mensajeFinal = "";
    if (isNaN(Number(numero))) {
        mensajeFinal = "Debe de ser un número";
    }
    else {

        let toDo = [];
        let numeros = [];
        let completados = [];
        let error = false;

        try{ 
            toDo = Object.values(JSON.parse(fs.readFileSync("arrayToDo.json")));
            } catch { 
            error = true;
            }

        try{ 
            numeros = Object.values(JSON.parse(fs.readFileSync("arrayNumeros.json")));
            } catch { 
            error = true;
            } 
        try{ 
            completados = Object.values(JSON.parse(fs.readFileSync("arrayCompletados.json")));
            } catch { 
            // Si no hay nada completado, se completará más adelante, en caso de existir la ToDo.
            }

        
        if (error == true){
            return console.log("¡No existe una ToDo list! No puede marcarse un elemento como completado")
        }

        let i = 0;
        let encontrado = false;
        while (i <= (numeros.length - 1) && encontrado == false) {
            if (numeros[i] == numero && (completados.includes(numero) == false)) {

                

                mensajeFinal = "La tarea nº" + numeros[i] + ": " + toDo[i] + "\nha sido marcada como completada";
                toDo[i] = toDo[i] + ": COMPLETADA";

                completados.push(i);

                let toDoJSON = JSON.stringify(toDo);

            let numerosJSON = JSON.stringify(numeros);

            let completadosJSON = JSON.stringify(completados);



            fs.writeFile('arrayToDo.json', toDoJSON, (err) => {
                if (err) throw err;
                });
    
            fs.writeFile('arrayNumeros.json', numerosJSON, (err) => {
                if (err) throw err;
                });

            fs.writeFile('arrayCompletados.json', completadosJSON, (err) => {
                if (err) throw err;
                });


                encontrado = true;
            }else if (numeros[i] == numero && (completados.includes(numero) == true)){
                mensajeFinal = "Esa tarea ya ha sido marcada como completada!";
            }
            i++;
        }
    }
    return console.log(mensajeFinal);
}
function eliminar(numero) {
    let mensajeFinal = "";
    if (isNaN(Number(numero))) {
        mensajeFinal = "Debe de ser un número";
    }
    else {

        let toDo = [];
        let numeros = [];
        let completados = [];
        let error = false;

        try{ 
            toDo = Object.values(JSON.parse(fs.readFileSync("arrayToDo.json")));
            } catch { 
                error = true; 
            }

        try{ 
            numeros = Object.values(JSON.parse(fs.readFileSync("arrayNumeros.json")));
            } catch { 
                error = true;
            } 

        try{ 
            completados = Object.values(JSON.parse(fs.readFileSync("arrayCompletados.json")));
            } catch { 
                //Aunque no haya completados, podemos eliminar
            }


            if (error == true){
                return console.log("¡No puede eliminarse nada! No existe una ToDo list")
            }

        let i = 0;
        let encontrado = false;
        while (i <= (numeros.length - 1) && encontrado == false) {
            if (numeros[i] == numero && toDo[i] != undefined) {
                mensajeFinal = "Se ha eliminado la tarea nº" + numeros[i] + ": " + toDo[i];
                toDo.splice(i, 1);

                numeros.length = 0;

                for (let i=0;i<toDo.length;i++){
                    numeros.push(i);
                }


                if (completados.includes(i)){
                    let indiceCompletado = completados.indexOf(i);
                    completados.splice(indiceCompletado,1);
                }
                


                let toDoJSON = JSON.stringify(toDo);

            let numerosJSON = JSON.stringify(numeros);

            let completadosJSON = JSON.stringify(completados);

            fs.writeFile('arrayToDo.json', toDoJSON, (err) => {
                if (err) throw err;
                });
    
            fs.writeFile('arrayNumeros.json', numerosJSON, (err) => {
                if (err) throw err;
                });

            fs.writeFile('arrayCompletados.json', completadosJSON, (err) => {
                if (err) throw err;
                });



                encontrado = true;
            }else{
                mensajeFinal = "¡Esa tarea no existe!";
            }
            i++;
        }
    }
    return console.log(mensajeFinal);
}
function mostrar() {

    let toDo = [];

    try{ 
        toDo = Object.values(JSON.parse(fs.readFileSync("arrayToDo.json")));
        } catch { 
         return console.log("¡No existe una ToDo list!");
        }

    return console.table(toDo);
}
module.exports = { añadir, completar, eliminar, mostrar};
