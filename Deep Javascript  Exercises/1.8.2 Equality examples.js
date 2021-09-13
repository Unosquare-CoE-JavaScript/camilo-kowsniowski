// haciendo la comparacion de un dato primitivo y un array

var contadorTaller1 = 42;
var contadorTaller2 = [43];

//  que sucede internamente

// if (contadorTaller1 == contadorTaller2){
// if (42 == "42"){
// if (42 === 42) {

if (true) {
  // es verdadero pero pasa por in proceso de cambio de tipo de dato
}

// Estas copmparaciones no son recomendables

// corner cases Boleans

var taller = []; // -> 0

// internamente el algorintmo realiza lo siguiente

// caso 1:
// if (taller){
// if (Boolean(taller)){
if (true) {
  // si!
}

// caso 2:
// if (taller == true){
// if ("" == true){
// if (0 === 1){
if (taller == true) {
  //tampoco funciona con triple igual
  // no son iguales
}

// caso 3:
// if (taller == false){
// if("" == false){
// if(0 === 0){
if (taller == false) {
  // si! son iguales
}

// Evita usar == en los siguientes casos

/*

-> == con 0  , "" ,  " "
-> == con datos no primitivos
-> == true o con == falso

es mejor usar boleanos o === en estos casos
*/
