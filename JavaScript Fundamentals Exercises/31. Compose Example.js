const consider = (name) => {
  return "creo ${name}";
};

//  function 2

const exclaim = (statement) => {
  return "${statement.toUppercase()}!";
};

const blame = _.compose(consider, exclaim);

blame("you");

//  example

const compose = (fn) => {
  return (arg) => {
    return (arg2) => {
      return fn(arg, arg2);
    };
  };
};

fn();
