//Closure is most commonly encountered with callbacks:
function lookupStudentRecord(studentID) {
  ajax(`https://some.api/student/${studentID}`, function onRecord(record) {
    console.log(`${record.name} (${studentID})`);
  });
}
lookupStudentRecord(114);
// Frank (114)
