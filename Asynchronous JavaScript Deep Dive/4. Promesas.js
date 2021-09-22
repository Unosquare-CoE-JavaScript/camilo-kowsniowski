/* PROMESAS

fuente: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
Una Promesa es un objeto que representa la eventual finalización o 
falla de una operación asincrónica. Dado que la mayoría de las personas 
son consumidores de promesas ya creadas, esta guía explicará el consumo 
de promesas devueltas antes de explicar cómo crearlas.

Esencialmente, una promesa es un objeto devuelto al que adjuntas 
devoluciones de llamada, en lugar de pasar devoluciones de llamada a una función.

Imagine una función, createAudioFileAsync (), que genera 
de forma asincrónica un archivo de sonido dado un registro de 
configuración y dos funciones de devolución de llamada, 
una llamada si el archivo de audio se crea correctamente 
y la otra llamada si ocurre un error.

*/

// ejemplo
function successCallback(result) {
  console.log("Audio file ready at URL: " + result);
}

function failureCallback(error) {
  console.error("Error generating audio file: " + error);
}

createAudioFileAsync(audioSettings, successCallback, failureCallback);
