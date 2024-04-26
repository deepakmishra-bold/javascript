/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  var numMap = {};
  for (var i = 0; i < nums.length; i++) {
    if (numMap[nums[i]]) {
      delete numMap[nums[i]];
    } else {
      numMap[nums[i]] = true;
    }
  }
  return Object.keys(numMap)[0];
};
