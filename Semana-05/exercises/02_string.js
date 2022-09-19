console.log('--EXCERCISE 2: STRINGS');

console.log('-Excercise 2.a:');

// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar 
//    toUpperCase).
var stringA = 'cellphone';
console.log('stringA: ', stringA.toUpperCase());

console.log('-\nExcercise 2.b:');
// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 
//    caracteres guardando el resultado en una nueva variable (utilizar substring).
var stringA = 'independence';
var stringB = stringA.substring(0,5);
console.log('stringA: ', stringA, ' with subString: ', stringB);

console.log('-\nExcercise 2.c:');
// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 
//    caracteres guardando el resultado en una nueva variable (utilizar substring).
var stringA = 'regardless';
var stringB = stringA.substring(7,10);
console.log('The last 3 letters of :' + stringA + ' is: ', stringB);

console.log('-\nExcercise 2.d:');
// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en 
//    mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, 
//    toLowerCase y el operador +).
var stringA = 'administration';
var stringB = stringA.substring(0,1).toUpperCase() + stringA.substring(1,14).toLowerCase();
console.log('Concatenation using toUpperCase and toLowerCase is: ' + stringB);

console.log('-\nExcercise 2.e:');
// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del 
//    primer espacio en blanco y guardarla en una variable (utilizar indexOf).
var stringA = 'shopping center';
var stringB = stringA.indexOf(' ');
console.log(stringA);
console.log('The space is in position: ' + stringB);

console.log('-\nExcercise 2.f:');
// f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
//    Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de 
//    ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, 
//    toLowerCase y el operador +).
var stringA = 'community management';
var positionIndexOf = stringA.indexOf(' ') + 1;
var stringB = stringA.toUpperCase().substring(0,1) + stringA.toLowerCase().substring(1,positionIndexOf) + stringA.toUpperCase().substring(10, 11) + stringA.toLowerCase().substring(11,20);
console.log(stringB);
