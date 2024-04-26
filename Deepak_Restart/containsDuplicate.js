/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let isDuplicate = false;
  let numsMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (numsMap[nums[i]]) {
      isDuplicate = true;
      break;
    } else {
      numsMap[nums[i]] = true;
    }
  }
  return isDuplicate;
};
