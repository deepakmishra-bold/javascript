/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  var out = "";
  out = out.split(" ").join();
  for (let index = 0; index < s.length; index++) {
    var element = s[index].toLowerCase();
    if (
      (element != " " && !isNaN(element)) ||
      (element.charCodeAt(0) > 96 && element.charCodeAt(0) < 123)
    ) {
      out = out + element;
    }
  }

  s = out;
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (s[i] !== s[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));
