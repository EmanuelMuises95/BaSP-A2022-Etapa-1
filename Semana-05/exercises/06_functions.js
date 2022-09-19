console.log('--EXCERCISE 6: FUNCTIONS');

/**
 * a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el 
 *    resultado en una variable, mostrando el valor de dicha variable en la consola del navegador. 
 */ 
console.log('-Excercise 6.a:');

function sum(numberA, numberB) {
    return numberA + numberB;
};
var resulset = sum(5, 7);
console.log(resulset);

console.log('\n-Excercise 6.b:');
/** b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número; 
 *    de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN 
 *    como resultado.
 */ 
function sum(numberA, numberB) {
    if (typeof numberA !== 'number') {
        alert('Number A is not a number' + numberA);
        return NaN;
    } else if (typeof numberB !== 'number') {
        alert('Someone is not a number' + numberB);
        return NaN;
    } else {
        return numberA + numberB;
    }
};
console.log(sum(10, 12));

console.log('\n-Excercise 6.c:');
/** c. Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero si es un 
 *    número entero.
 */ 
function validateInt(numberX) {
    return Number.isInteger(numberX);
};

console.log('\n-Excercise 6.d:');
/** d. A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que valide que los 
 *    números sean enteros. En caso que haya decimales mostrar un alerta con el error y retornar el número convertido a 
 *    entero (redondeado).
 */ 
function sum(numberA, numberB) {
    if (typeof numberA !== 'number') {
        alert('Number A is not a number' + numberA);
        return NaN;
    } else if (typeof numberB !== 'number') {
        alert('Someone is not a number' + numberB);
        return NaN;
    } else if (!validateInt(numberA)){
        alert('Someone is not a Integer' + numberA);
        numberA = Math.round(numberA);
        return numberA;
    } else if(!validateInt(numberB)) {
        alert('Someone is not a Integer' + numberB);
        numberB = Math.round(numberB);
        return numberB;
    } else {
        return numberA + numberB;
    };
};
console.log(sum(10, 12));

console.log('\n-Excercise 6.e:');

/** e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando 
 *    que todo siga funcionando igual.
 */

function validateIntNumbers(numberX) {
    if (typeof numberX !== 'number') {
        alert('Number A is not a number: ' + numberX);
        return NaN;
    } else if (!validateInt(numberX)) {
        alert('Someone is not a Integer: ' + numberX);
        return Math.round(numberX);
    } 
    return numberX;
};

function sumExE(numberA, numberB) {
    numberA = validateIntNumbers(numberA);
    numberB = validateIntNumbers(numberB);
    return numberA + numberB;
};

console.log(sumExE(10.4, 12.5));