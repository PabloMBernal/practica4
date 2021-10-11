/*
Crear una función suma que reciba dos valores numéricos y retorne el resultado. 
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de 
dicha variable en la consola del navegador.
*/

function addition(val1 , val2){
    return val1 + val2;
}

var numb1 = 1,  numb2 = 7 , numb3;
console.log(numb3 = addition(numb1, numb2));

/*
A la función suma anterior, agregarle una validación para controlar si alguno de los 
parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros 
tiene error y retornar el valor NaN como resultado.
*/

function addition(val1 , val2){
    if (isNaN(val1) || isNaN(val2)){
        if(isNaN(val1)){
            console.log('the first element is not a number')
        }
        if(isNaN(val2)){
            console.log('the second element is not a number');
        }
        return NaN;
    }
    return val1 + val2;
}

var numb1 = 1,  numb2 = 'd' , numb3;
console.log(numb3 = addition(numb1, numb2));