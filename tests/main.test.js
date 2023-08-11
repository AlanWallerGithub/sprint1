const {añadir, completar, eliminar, mostrar, toDo, numeros, completados} = require('../dist/main');

// **********
// TESTS PARA "AÑADIR":
// **********

test("Debería avisarte si no se pasa un string como argumento",() =>{
    expect(añadir(3)).toBe("Debe de ser un string");
})

test("Si el ToDo está vacío, nuestro elemento debería ser el número 0", ()=>{

    // El usuario introduce la tarea nº 0, "Comprar comida", como un argumento
    let elemento = "Comprar comida";
    
    expect(añadir(elemento)).toEqual("Se ha añadido la tarea nº 0: "+elemento);
})

test("Si el ToDo está lleno hasta la posición 0, nuestro elemento debería ser el número siguiente, el 1", ()=>{
    

    // El usuario introduce la tarea nº 1, "Limpiar la casa", como un argumento
    let elemento = "Limpiar la casa";
    // Al llamar "añadir" con nuestro string, el array "números" se actualiza hasta 1 (ahora su "length" es 2)
    
    expect(añadir(elemento)).toEqual("Se ha añadido la tarea nº "+(numeros.length -1)+": "+elemento);
})

// **********
// TESTS PARA "COMPLETAR":
// **********

test("Debería avisarte si no se pasa un número como argumento",() =>{
    expect(completar("texto")).toBe("Debe de ser un número");
})

test("Si esa tarea existe, debería avisarte de que se ha completado",()=>{
    let toDoSinMensajeFinal = toDo[1];
    expect(completar(1)).toEqual("La tarea nº"+numeros[1]+": "+toDoSinMensajeFinal+"\n ha sido marcada como completada");
})

test("Debería avisarte si esa tarea ya ha sido completada antes",()=>{
    expect(completar(1)).toEqual("Esa tarea ya ha sido marcada como completada!");
})

test("Si se intenta completar algo sin que exista la ToDo, devuelve un mensaje",()=>{
    toDo.length = 0;
    numeros.length = 0;
    expect(completar(1)).toEqual("¡No existe una ToDo list! No puede marcarse un elemento como completado");

    // para que funcionen los siguientes tests, volvemos a meter los dos elementos anteriores a la lista

    añadir("Comprar comida");
    añadir("Limpiar la casa");
})

test("Si esa tarea no existe, debería avisarte",()=>{
    expect(completar(9)).toEqual("¡Esa tarea no existe!");
})



// **********
// TESTS PARA "ELIMINAR":
// **********

test("Debería avisarte si no se pasa un número como argumento",() =>{
    expect(eliminar("texto")).toBe("Debe de ser un número");
})

test("Si esa tarea existe, debería avisarte de que se ha eliminado",()=>{
    let tareaSinEliminar = toDo[1];
    let numeroSinEliminar = numeros[1];
    expect(eliminar(1)).toEqual("Se ha eliminado la tarea nº"+numeroSinEliminar+": "+tareaSinEliminar);
})

test("El array de 'numero' debería borrar ese número, también",()=>{

    expect(numeros.length).toEqual(toDo.length);
})

test("El array de 'completados' debería borrar ese valor, también, en caso de que exista",()=>{

    expect(completados.includes(1)).toEqual(false);
})


test("Si esa tarea no existe, debería avisarte",()=>{
    expect(eliminar(1)).toEqual("¡Esa tarea no existe!");
})

test("Si se intenta eliminar algo sin que exista la ToDo, devuelve un mensaje",()=>{
    toDo.length = 0;
    numeros.length = 0;
    expect(eliminar(1)).toEqual("¡No puede eliminarse nada! No existe una ToDo list");

    // para que funcionen los siguientes tests, volvemos a meter los dos elementos anteriores a la lista

    añadir("Comprar comida");
    añadir("Limpiar la casa");
})


// **********
// TESTS PARA "MOSTRAR":
// **********

test("Al llamarse, debería mostrar todo el toDo en console.table", ()=>{

    expect(mostrar()).toEqual(toDo);
})

test("Debería dar un error si no existe un ToDo list",()=>{
    toDo.length = 0;
    numeros.length = 0;
    expect(mostrar()).toEqual("¡No existe una ToDo list!");
})
