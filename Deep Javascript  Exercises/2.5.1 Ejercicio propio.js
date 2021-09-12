//    ejercicio

//  creamos un filtro para  obtener estudiante s por id

//  primero se tiene un array de datos para

var currentEnrollment = [410, 105, 664, 375, 999];

var studentRecords = [
  { id: 410, name: "Suzy", paid: true },
  { id: 105, name: "Henry", paid: false },
  { id: 664, name: "pedro", paid: false },
  { id: 250, name: "yurany", paid: true },
  { id: 375, name: "marco", paid: true },
  { id: 867, name: "ruth", paid: false },
  { id: 999, name: "jose", paid: false },
];

// obtener los estudiantes por id
function getStudentFromId(studentId) {
  // utilizamos el array de students y la funcion find
  return studentRecords.find(function matchId(record) {
    //   si son iguales retornada studentId
    return record.id == studentId;
  });
}
console.log(studentRecords);

// / utilizamos map para crear un array de
function printRecords(recordIds) {
  var records = recordIds.map(getStudentFromId);
  // usamos la funcion sort para poder imprimirlos de manera correcta
  // de manera que lo devuelva por la organizacion que le damos
  records.sort(function sortByNameAsc(record1, record2) {
    if (record1.name < record2.name) return -1;
    else if (record1.name > record2.name) return 1;
    else return 0;
  });

  // imprimimos el sort de records  utilizando  la funcion forEach

  records.forEach(function printRecord(record) {
    console.log(
      `${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`
    );
  });
}

//  con esta funcion verificamos los estudiantes que no ha pagado
// para estos utilizamos la function filter
function paidStudentsToEnroll() {
  var recordsToEnroll = studentRecords.filter(function needToEnroll(record) {
    // los incluimos en el array record si no estan en enrrol utilizando la funtion includes
    return record.paid && !currentEnrollment.includes(record.id);
  });
  // como necesitamos el id itulizados un map para obtener el id
  var idsToEnroll = recordsToEnroll.map(function getStudentId(record) {
    return record.id;
  });

  return [...currentEnrollment, ...idsToEnroll];
}

// en este casdo utilizamos filter
function remindUnpaid(recordIds) {
  var unpaidIds = recordIds.filter(function notYetPaid(studentId) {
    var record = getStudentFromId(studentId);
    return !record.paid;
  });

  printRecords(unpaidIds);
}
printRecords(currentEnrollment);
console.log("----"); // imprime el nuevo arra de clases inscritas
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);
