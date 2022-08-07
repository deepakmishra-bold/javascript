//Best O(logn)
function power(x, y) {
  var halfPow;
  if (y == 0)
    return 1;
  halfPow = power(x, y / 2);
  if (y % 2 == 0)
    return halfPow * halfPow;
  else
    return x * halfPow * halfPow;
}

function power(x, y) {
  if (y == 0)
    return 1;
  if (x == 0)
    return 0;
  return x * power(x, y - 1);
}
///////best
var myPow = function (x, y) {
  if (y === 0) return 1;
  if (y === 1) return x;
  if (y < 0) return 1 / myPow(x, -y);
  if (y % 2 === 0) return myPow(x * x, y / 2);
  return x * myPow(x, y - 1);
};