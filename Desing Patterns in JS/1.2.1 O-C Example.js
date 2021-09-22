/*Hay dos atributos principales en el OCP, son.

1. -> Abierto para extensión: podemos extender lo que hace el módulo.
2. -> Cerrado por modificación: extender el comportamiento de un módulo no da como 
resultado cambios en el código fuente o binario del módulo. */

/*
Utilizando el ejemlpo de los empleados 
Supongamos que cada empleado tiene un rol y 
privilegios otorgados. Pero, ¿qué pasa si introducimos 
eva función en el sistema y no modificamos las cosas 
existentes? Por lo tanto, podemos hacer como el 
siguiente ejemplo para que pase el OCP.
*/

let Roles = ["ceo", "cto", "cfo", "staff"];

function revisarPrivilegios(empleado) {
  if (Roles.includes(empleado.rol)) {
    // el empleado tiene privilegios
    return true;
  } else {
    return false;
  }
}

function agrRoles(rol) {
  Roles.push(rol);
}
