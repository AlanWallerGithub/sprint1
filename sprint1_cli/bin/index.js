#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

const {añadir, completar, eliminar, mostrar} = require('./mainParaCLI');

if (argv.iniciar){
    console.log("Hola, esta es tu ToDo list. ¿Qué quieres hacer?\nIntroduce uno de los cuatro números siguientes.\n1 = Añadir un elemento\n2 = Marcar un elemento como COMPLETADO\n3 = Eliminar un elemento\n4 = Mostrar la ToDo entera\n(Debes escribir 'node index.js --numero', el signo '=' sin espacios, y luego tu número deseado.)");
    
}else if (argv.numero == 1){
    console.log("¿Qué elemento quieres añadir?\n(Debes escribir 'node index.js --añadir', el signo '=' sin espacios, y luego el texto que quieras añadir, entre comillas (p.e., 'hacer la colada', 'comprar')");
    
}else if (argv.añadir){
    añadir(argv.añadir);
    console.log("Escribe 'node index.js --iniciar' para ir al menú");

} else if (argv.numero == 2){
    mostrar()
    console.log("¿Qué elemento quieres marcar como COMPLETADO?\nEsta tabla contiene los elementos disponibles:\n(Debes escribir 'node index.js --completar', el signo '=' sin espacios, y luego el número de la tarea");

} else if(argv.completar || argv.completar == 0){
    completar(argv.completar);
    console.log("Escribe 'node index.js --iniciar' para ir al menú");


} else if (argv.numero == 3){
    mostrar()
    console.log("¿Qué elemento quieres eliminar de la lista?\nEsta tabla contiene los elementos disponibles:\n(Debes escribir 'node index.js --eliminar', el signo '=' sin espacios, y luego el número de la tarea");
} else if (argv.eliminar){
    eliminar(argv.eliminar);
    console.log("Escribe 'node index.js --iniciar' para ir al menú");

} else if(argv.eliminar == 0){
    eliminar(argv.eliminar);
    console.log("Escribe 'node index.js --iniciar' para ir al menú");
} else if (argv.numero == 4){

    console.log("Esta es la lista completa de tareas en tu ToDo");
    mostrar();
    console.log("Escribe 'node index.js --iniciar' para ir al menú");

    
}else{
    console.log("¡Este comando no existe! Escribe 'node index.js --iniciar' para ir al menú");
}




