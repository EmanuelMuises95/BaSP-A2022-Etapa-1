console.log('--EXCERCISE 3: ARRAYS');

console.log('-Excercise 3.a:');
/**
 * a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", 
 *    "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
 * */
var countries = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(countries[4],countries[10]);

console.log('-\nExcercise 3.b:');
/** b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort). */
console.log(countries.sort());

console.log('-\nExcercise 3.c:');
/** c. Agregar un elemento al principio y al final del array (utilizar unshift y push).*/
console.log('element unshift("2022", "BaSP22"): ' + countries.unshift('2022', 'BaSP22'));
console.log('element push("2023, BaSP23"): ' + countries.push('2023', 'BaSP23'));
console.log(countries);

console.log('-\nExcercise 3.d:');
/** d. Quitar un elemento del principio y del final del array (utilizar shift y pop). */
console.log(countries.shift());
console.log(countries.pop());
console.log(countries);

console.log('-\nExcercise 3.e:');
/** e. Invertir el orden del array (utilizar reverse).*/
console.log(countries.reverse());

console.log('-\nExcercise 3.f:');
/** f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar 
join). */
console.log(countries.join('-'));
console.log(countries);

console.log('-\nExcercise 3.g:');
/** g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/

var countries = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var countriesTwo = countries.slice(4,11);

console.log(countriesTwo);
