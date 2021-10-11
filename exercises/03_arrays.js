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