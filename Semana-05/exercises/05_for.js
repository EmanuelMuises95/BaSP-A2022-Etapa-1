console.log('--EXCERCISE 5: FOR');

console.log('-Excercise 5.a:');
/**
 * a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar 
 *    una alerta utilizando cada una de las palabras. */

var array = ['car','motorcycle','trunk','van', 'bicycle'];

for (var i = 0; i < array.length; i++) {
    alert (array[i]);
};

console.log('\n-Excercise 5.b:');
/** b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra 
 *    modificada. */

var array = ['car','motorcycle','trunk','van', 'bicycle'];

for (var i = 0; i < array.length; i++) {
    alert (array[i].toUpperCase().substring(0,1) + array[i].toLowerCase().substring(1,array[i].length));
};

console.log('\n-Excercise 5.c:');
/** c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un 
 *    bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la 
 *    cadena completa. */

var array = ['car','motorcycle','trunk','van', 'bicycle'];
var sentence = '';

for ( var i = 0 ; i < array.length ; i++) {
    sentence += (array[i]).split(',') + ' ';
};

alert(sentence);

console.log('\n-Excercise 5.d:');
/** d. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es 
 *    decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 
 *    hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).
 */

var arrayTenPositions = [];

for ( i = 0 ; i < 10 ; i++) {
    arrayTenPositions[i] = i; 
};

console.log(arrayTenPositions);