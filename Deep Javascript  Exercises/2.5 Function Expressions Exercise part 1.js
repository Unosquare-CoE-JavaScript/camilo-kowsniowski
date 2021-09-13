// solucion del ejerccicio

// obtener los estudiantes por id
function getStudentFromId(studentId) {
  // utilizamos el array de students y la funcion find
  return studentRecords.find(function matchId(record) {
    //   si son iguales retornada studentId
    return record.id == studentId;
  });
}
// utilizamos map para crear un array de
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
  // como necesitamos el id utilizados un map para obtener el id
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

// ********************************

var currentEnrollment = [410, 105, 664, 375];

var studentRecords = [
  { id: 313, name: "Frank", paid: true },
  { id: 410, name: "Suzy", paid: true },
  { id: 709, name: "Brian", paid: false },
  { id: 105, name: "Henry", paid: false },
  { id: 502, name: "Mary", paid: true },
  { id: 664, name: "Bob", paid: false },
  { id: 250, name: "Peter", paid: true },
  { id: 375, name: "Sarah", paid: true },
  { id: 867, name: "Greg", paid: false },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

// -> output
/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
