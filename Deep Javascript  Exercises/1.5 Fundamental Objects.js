//  objertos fundamentales

/*Usar new  para construir los siguientes objetos  
-> object();
-> array();
->function();
->date();
regExp();
Error();
*/

/* no usar new para 
-> string();
->Number();
->Boolean();
*/

// ejemplo 1

var yesterday = new Date("sep 1 , 2021");
yesterday.toUTCString();

// ->output 'Wed, 01 Sep 2021 05:00:00 GMT'

//  ejemplo 2

var myGPA = String(transcript.gpa());

//  -> output "3.54"
