# sprint1
Primer sprint del IT Academy con Node.js

INSTRUCCIONES:

- Nivel 1:
Los documentos para el nivel 1 se encuentran en las carpetas 'src' (el typescript) y 'dist' (el JS) de la carpeta principal, 'sprint1'.

Los tests están en la carpeta 'tests'. Requieren Jest para ejecutar.

El programa consiste de 4 funciones, 'añadir(elemento)', 'completar(numero)', 'eliminar(numero)' y 'mostrar()'. El argumento 'elemento' es un string de texto para la ToDo, por ejemplo 'hacer la colada'. Los argumentos 'numero' se refieren al índice que ocupa un elemento de la lista. Por ejemplo, una lista así:

0: 'hacer la colada'

1: 'comprar'

2: 'limpiar la cocina'


En este caso, 'completar(1)' marcaría como completada la tarea de índice 1:


0: 'hacer la colada'
1: 'comprar: COMPLETADA'
2: 'limpiar la cocina'

Así, del mismo modo 'eliminar(2)' eliminaría la tarea 'limpiar la cocina':

0: 'hacer la colada'

1: 'comprar: COMPLETADA'


El programa actualiza tres arrays, 'toDo', 'numeros' y 'completados', cada vez que se realiza un cambio, para que se coordinen los unos con los otros. Si una tarea ya está completada, se añade su índice a 'completados' y eso no permite volverla a completar. Se usan procedimientos similares con 'numeros' y 'toDo'.


¡Espero que eso sea todo!


- Nivel 2:
  

Para ejecutar el CLI, debes acceder a la carpeta ‘sprint1/sprint1_cli/bin’ por la terminar, entonces escribir ‘node index.js --iniciar'. A partir de ahí, se abrirá este menú:


“Hola, esta es tu ToDo list. ¿Qué quieres hacer?
Introduce uno de los cuatro números siguientes.
1 = Añadir un elemento
2 = Marcar un elemento como COMPLETADO
3 = Eliminar un elemento
4 = Mostrar la ToDo entera
(Debes escribir 'node index.js --numero', el signo '=' sin espacios, y luego tu número deseado.)”


Como se describe arriba, podrías escribir en la terminal, por ejemplo, 'node index.js --numero=1' y eso te llevaría a una nueva instrucción sobre cómo añadir tareas al ToDo.

Estos son ejemplos de cómo usar los comandos.

AÑADIR UNA TAREA: ‘node index.js --añadir=”comer”’ (la tarea debe estar entre comillas, para ser un string, en caso de contener espacios en blanco)

COMPLETAR: ‘node index.js --completar=1’ (por ejemplo 1, un número)

ELIMINAR: ‘node index.js --eliminar=1’ (por ejemplo 1, un número)

MOSTRAR: ‘node index.js --numero=4’ (en este caso, se accede directamente con un solo paso, accediendo al número 4 de la lista de acciones de antes)


¡Espero que eso sea todo!

-	Nivel 3:
  
Para ejecutar el HTML, abre el archivo ‘sprint1_main.html’ de la carpeta ‘sprint1/sprint1_front_end’. Ábrelo en cualquier navegador. Verás unos botones para relizar las acciones de AÑADIR, COMPLETAR, ELIMINAR y MOSTRAR elementos de la lista. Al realizar estas acciones, se te pedirán los argumentos de las funciones a través de un prompt.

¡Espero que eso sea todo!
