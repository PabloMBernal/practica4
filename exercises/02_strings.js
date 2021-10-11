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