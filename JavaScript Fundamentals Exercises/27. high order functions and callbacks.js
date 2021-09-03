//  ejemplo de una funcion como  un output

element.addEventListener("change", () => {
  console.log("la ewvidencia ha siudo actualizada");
});

//  ejemplo de un input  restornandola

const newClue = (name) => {
  const lenght = name.length;

  return (weapon) => {
    let clue = length + weapon.length;
    return !!(clue % 1);
  };
};

// callbacks

const ifElse = (condition, isTrue, isFalse) => {
  return condition ? isTrue : isFalse;
};

const logTrue = () => {
  console.log(true);
};
const logFalse = () => {
  console.log(false);
};

ifElse(true, logTrue, logFalse);

// "i saw Rev Green whit a pistol, Miss Scarlet"
