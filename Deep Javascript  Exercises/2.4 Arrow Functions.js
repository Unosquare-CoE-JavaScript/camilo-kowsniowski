// arrow functions son anonimas

// ejemplos 1

var id = people.map((person) => person.id);

var id = people.map(function getId(person) {
  return person.id;
});

// **********************

getDataFrom = person.getData(person.id);
getPerson().then(getDataFrom).then(renderData);
