const {añadir, completar, eliminar, mostrar, toDo, numeros} = require('../dist/main');

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

// **********
// TESTS PARA "ELIMINAR":
// **********

test("Debería avisarte si no se pasa un número como argumento",() =>{
    expect(eliminar("texto")).toBe("Debe de ser un número");
})

test("Si esa tarea existe, debería avisarte de que se ha eliminado",()=>{
    let tareaSinEliminar = toDo[1];
    expect(eliminar(1)).toEqual("Se ha eliminado la tarea nº"+numeros[1]+": "+tareaSinEliminar);
})

// **********
// TESTS PARA "MOSTRAR":
// **********

test("Al llamarse, debería mostrar todo el toDo en console.table", ()=>{

    expect(mostrar()).toEqual(console.table(toDo));
})
