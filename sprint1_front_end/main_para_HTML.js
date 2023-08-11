"use strict";
let toDo = [];
let numeros = [];
let completados = [];
function añadir() {

    let elemento = prompt("Escribe la tarea a añadir");



    let mensajeFinal = "";
    if (!isNaN(Number(elemento))) {
        mensajeFinal = "Debe de ser un string";
    }
    else {
        if (numeros.length === 0) {
            toDo.push(elemento);
            numeros.push(0);
            mensajeFinal = "Se ha añadido la tarea nº 0: " + elemento;
        }
        else {
            toDo.push(elemento);
            numeros.push(numeros.length);
            mensajeFinal = "Se ha añadido la tarea nº " + (numeros.length - 1) + ": " + elemento;
        }
    }
    document.getElementById("resultado").innerHTML = mensajeFinal;
}
function completar() {

    let toDoVisualizado = "";

    for (let i=0;i<toDo.length;i++){
        toDoVisualizado += "Tarea nº "+numeros[i]+": "+toDo[i]+"\n";
    }

    let numero = parseInt(prompt("¿Qué tarea quieres marcar como completada? Escribe el número correspondiente. Las tareas disponibles son:\n"+toDoVisualizado));

    let mensajeFinal = "";
    let mensajeError = "";
    if (isNaN(Number(numero))) {
        mensajeFinal = "Debe de ser un número";
    }
    else {
        if (toDo.length == 0 || numeros.length == 0) {
            mensajeError = "¡No existe una ToDo list! No puede marcarse un elemento como completado";
        }
        let i = 0;
        let encontrado = false;
        while (i <= (numeros.length - 1) && encontrado == false) {
            if (numeros[i] == numero && (completados.includes(numero) == false)) {
                mensajeFinal = "La tarea nº" + numeros[i] + ": " + toDo[i] + "\n ha sido marcada como completada";
                toDo[i] = toDo[i] + ": COMPLETADA";
                completados.push(i);
                encontrado = true;
            }
            else if (numeros[i] == numero && (completados.includes(numero) == true)) {
                mensajeFinal = "Esa tarea ya ha sido marcada como completada!";
            }else{
                mensajeFinal = "¡Esa tarea no existe!";
            }
            i++;
        }
    }
    if (mensajeError == ""){
        document.getElementById("resultado").innerHTML = mensajeFinal;
    } else{
        document.getElementById("resultado").innerHTML = mensajeError;
    }
    
}
function eliminar() {

    let toDoVisualizado = "";

    for (let i=0;i<toDo.length;i++){
        toDoVisualizado += "Tarea nº "+numeros[i]+": "+toDo[i]+"\n";
    }

    let numero = parseInt(prompt("¿Qué tarea quieres eliminar? Escribe el número correspondiente. Las tareas disponibles son:\n"+toDoVisualizado));

    let mensajeFinal = "";
    let mensajeError = "";
    if (isNaN(Number(numero))) {
        mensajeFinal = "Debe de ser un número";
    }
    else {
        if (toDo.length == 0 || numeros.length == 0) {
            mensajeError = "¡No puede eliminarse nada! No existe una ToDo list";
        }
        let i = 0;
        let encontrado = false;
        while (i <= (numeros.length - 1) && encontrado == false) {
            if (numeros[i] == numero && toDo[i] != undefined) {
                mensajeFinal = "Se ha eliminado la tarea nº" + numeros[i] + ": " + toDo[i];
                toDo.splice(i, 1);
                numeros.length = 0;
                for (let i = 0; i < toDo.length; i++) {
                    numeros.push(i);
                }
                if (completados.includes(i)) {
                    let indiceCompletado = completados.indexOf(i);
                    completados.splice(indiceCompletado, 1);
                }
                encontrado = true;
            }
            else {
                mensajeFinal = "¡Esa tarea no existe!";
            }
            i++;
        }
    }

    if (mensajeError == ""){
        document.getElementById("resultado").innerHTML = mensajeFinal;
    } else{
        document.getElementById("resultado").innerHTML = mensajeError;
    }
}
function mostrar() {

    let toDoVisualizadoEnWeb = "";

    for (let i=0;i<toDo.length;i++){
        toDoVisualizadoEnWeb += "Tarea nº "+numeros[i]+": "+toDo[i]+"<br>";
    }

    let mensajeError = "";

    if (toDo.length == 0 || numeros.length == 0) {
        mensajeError = "¡No existe una ToDo list!";
    }
    if (mensajeError == ""){
        document.getElementById("resultado").innerHTML = toDoVisualizadoEnWeb;
    } else{
        document.getElementById("resultado").innerHTML = mensajeError;
    }
}
