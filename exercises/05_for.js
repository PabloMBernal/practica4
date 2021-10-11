/*
Crear un array que contenga 5 palabras y recorrer dicho array utilizando 
un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
*/

var pentArray = ['gorra' , 'campera' , 'buzo' , 'pantalon' , 'medias'];

for(var i = 0; i < pentArray.length; i++){
    console.log(pentArray[i]);
}

/*
Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
*/

for(var i = 0; i < pentArray.length; i++){
    console.log(pentArray[i].substring(0,1).toUpperCase() + pentArray[i].substring(1,).toLowerCase());
}