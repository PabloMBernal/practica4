/*Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
 mostrar por consola los meses 5 y 11 (utilizar console.log).
*/

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(months[4]);
console.log(months[10]);

/*Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/

console.log(months.sort());

/*
Agregar un elemento al principio y al final del array (utilizar unshift y push).
*/

months.push('Omega');
months.unshift('Alpha');
console.log(months);

/*
Quitar un elemento del principio y del final del array (utilizar shift y pop).
*/

months.pop();
months.shift();
console.log(months);

/*
Invertir el orden del array (utilizar reverse).
*/

months.reverse();
console.log(months);

/*
Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
*/

var allTheMonths = months.join('-');
console.log(allTheMonths);