/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let count = 0;
  let map = {};
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      let sum = nums1[i] + nums2[j];
      if (map[sum] === undefined) {
        map[sum] = 1;
      } else {
        map[sum]++;
      }
    }
  }
  for (let i = 0; i < nums3.length; i++) {
    for (let j = 0; j < nums4.length; j++) {
      let sum = nums3[i] + nums4[j];
      if (map[-sum] !== undefined) {
        count += map[-sum];
      }
    }
  }
  return count;
};