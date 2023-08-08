"use strict";
let toDo = [];
let numeros = [];
function añadir(elemento) {
    let mensajeFinal = "";
    if (typeof elemento != "string") {
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
    return mensajeFinal;
}
function completar(numero) {
    let mensajeFinal = "";
    if (typeof numero != "number") {
        mensajeFinal = "Debe de ser un número";
    }
    else {
        let i = 0;
        let encontrado = false;
        while (i <= (numeros.length - 1) && encontrado == false) {
            if (numeros[i] == numero) {
                mensajeFinal = "La tarea nº" + numeros[i] + ": " + toDo[i] + "\n ha sido marcada como completada";
                toDo[i] = toDo[i] + ": COMPLETADA";
                encontrado = true;
            }
            i++;
        }
    }
    return mensajeFinal;
}
function eliminar(numero) {
    let mensajeFinal = "";
    if (typeof numero != "number") {
        mensajeFinal = "Debe de ser un número";
    }
    else {
        let i = 0;
        let encontrado = false;
        while (i <= (numeros.length - 1) && encontrado == false) {
            if (numeros[i] == numero) {
                mensajeFinal = "Se ha eliminado la tarea nº" + numeros[i] + ": " + toDo[i];
                toDo.splice(i, 1);
                encontrado = true;
            }
            i++;
        }
    }
    return mensajeFinal;
}
function mostrar() {
    return console.table(toDo);
}
module.exports = { añadir, completar, eliminar, mostrar, toDo, numeros };
