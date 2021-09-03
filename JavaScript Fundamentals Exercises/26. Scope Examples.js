// scope exaples

// scope is the area whe a variable has value or is used

(function () {
  describe("Scope Exercises", function () {
    var ACTUAL;
    // esto reinia el valor de ACTUAL a null antes de cada test

    beforeEach(function () {
      ACTUAL = null;
    });

    // example 1:

    it("la funcion tene acceso a a su local scope de variables", function () {
      var fn = function () {
        var name = "inner";
        ACTUAL = name;
      };
      fn();
      expect(ACTUAL === "inner").to.be.true;
    });

    // example 2:

    it("los input en la funcion son tratados comos variables de local scope", function () {
      var fn = function () {
        var name = "inner";
        ACTUAL = name;
      };
      fn("inner"); // input
      expect(ACTUAL === "inner").to.be.true;
    });

    //  example 3:

    it("let se usa para bloquear el scope", function () {
      var fn = function () {
        var where = "outer";
        {
          let where = "inner"; // si fuese var cambiaria la variable
        }
        ACTUAL = where;
      };
      fn(""); // input
      expect(ACTUAL === "outer").to.be.true;
    });
  });
});
