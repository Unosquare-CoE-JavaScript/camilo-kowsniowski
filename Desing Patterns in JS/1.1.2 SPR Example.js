//  Ejemplo de SRP

//  En este ejemplo se realizara un programa que
//  contiene  el calculo de horas laboradas de un empleado

/*
 se necesita crear un programa que maneje las horas trabajadas
 por un empleado  y realice el calculo de su paga

 
 */

// definimos una funcion Empleado que contiene
// una estructura de datos  compartidos

function Empleado(name, pos, hours) {
  this.name = name;
  this.pos = pos;
  this.hours = hours;
}

// creamos una funcion aparte que obtenga el calculo de pago

function Calculadora(empleado) {
  this.empleado = empleado;
  this.calPaga = function () {
    // calculo del pago
  };
}

// creamos otra funcion la cual obtenga las horas realizadas por el empleado

function horasRepor(empleado) {
  this.empleado = empleado;
  this.Reporte = function () {
    // calculo de horas
  };
}

// por ultimo creamos una funcion que tenga como objetivo guardar los datos

function Servidor(empleado) {
  this.empleado = empleado;
  this.guardar = function () {
    // guardamos datos
  };
}

// de esta manera cada funcion es respondabe de una accion en particular
