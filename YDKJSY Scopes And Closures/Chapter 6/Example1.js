// Example 1

function diff(x, y) {
  if (x > y) {
    let tmp = x;
    x = y;
    y = tmp;
  }
  return y - x;
}
diff(3, 7); // 4
diff(7, 5); // 2

// Example 2

// outer/global scope
function hideTheCache() {
  // "middle scope", where we hide `cache` var cache = {};
  return factorial;
  // **********************
  function factorial(x) {
    // inner scope
    if (x < 2) return 1;
    if (!(x in cache)) {
      cache[x] = x * factorial(x - 1);
    }
    return cache[x];
  }
}
var factorial = hideTheCache();
factorial(6);
// 720
factorial(7);
// 5040
