console.log('--EXCERCISE 1: VARIABLES AND OPERATORS');

console.log('-Excercise 1.a:');
// a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en 
//     una 3er variable.
var numberA = 5;
var numberB = 3;
var numberC = numberA + numberB;
console.log('The sum of the number A: ', numberA, ' and the sum of the number B: ', numberB, ' is number C = ', numberC);

console.log('-\nExcercise 1.b:');
// b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
var stringA = 'motor';
var stringB = 'cycle';
var stringC = stringA + stringB;
console.log('stringA is: ', stringA, ' and stringB is: ', stringB);
console.log('New concatenedted string is : ' + stringC);

console.log('-\nExcercise 1.c:');
// c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el 
//    resultado de la suma en una 3er variable (utilizar length).
var stringA = 'astro';
var stringB = 'nauth';
var stringC = stringA.length + stringB.length;
console.log('First word: ' + stringA + ' Second word: ' + stringB + ' Count (".lenght"): ' + stringC);