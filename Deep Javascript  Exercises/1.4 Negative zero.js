//  examples of negative 0

var trendRate = -0;

trendRate === -0; // true

trendRate.toString(); // "0" oops!

trendRate === 0; // true oops!

trendRate < 0; // false
trendRate > 0; // false

Object.is(trendRate, -0); // true
Object.is(trendRate, 0); // false
