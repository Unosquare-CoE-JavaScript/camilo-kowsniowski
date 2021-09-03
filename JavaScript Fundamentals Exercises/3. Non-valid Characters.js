// ejempoo de mal uso de caracteres

box = ['material'] = "cardboard"; // no  esta recomendado

box[0] = 'meow';

box['ˆ&*'] = "testing 123";

var test = box['ˆ&*'];

// output

box = {
    "material": "cardboard",
    "0": "meow",
    "ˆ$*" : "testing 123",
}
 