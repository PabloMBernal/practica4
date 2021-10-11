/*
Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
*/

var lowToUp = 'ricardofort';
console.log(lowToUp.toUpperCase());

/*
Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los 
primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
*/

var newStr = lowToUp , subStr;
console.log(subStr = newStr.substring(0, 5));

/*
Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los 
últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
*/

var newStr2 = lowToUp , subStr2, len;
len = lowToUp.length;
console.log(subStr2 = newStr2.substring(len-3 ,));

/*
Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la 
primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva 
variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
*/

var newStr3 = lowToUp , capLetter;
console.log(capLetter = newStr3.substring(0,1).toUpperCase() + newStr3.substring(1,).toLowerCase());

/*
Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
 Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
*/

var newStr4 = 'ricardo fort' , blkspc;
console.log(blkspc = newStr4.indexOf(' '));

/*
Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de 
ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, 
toLowerCase y el operador +).
*/

var doubleWord = 'estetoscopio rinoceronte', blkspc , capsWord;
blkspc = doubleWord.indexOf(' ');
console.log(capsWord = doubleWord.substring(0,1).toUpperCase() + doubleWord.substring(1,blkspc).toLowerCase() + ' ' + 
doubleWord.substring(blkspc+1,blkspc+2).toUpperCase() + doubleWord.substring(blkspc+2,).toLowerCase());