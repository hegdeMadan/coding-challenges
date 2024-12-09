/**
 * You are given an integer array nums, and your task is to find a subarray within it that has the largest product.
 * After finding the subarray, you should return the product of its elements.
 * For example, given the input nums = [2, 3, -2, 4], the output should be 6 because the subarray [2, 3] has the largest product, which is 2 * 3 = 6.
 */

const calculateMax = (arr) => {
  let max = arr[0];
  let min = arr[0];
  let total = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const tempMax = Math.max(max, max * arr[i], min * arr[i]);
    max = Math.max(arr[i], max * arr[i], min * arr[i]);
    min = Math.min(arr[i], tempMax, min * arr[i]);

    total = Math.max(total, tempMax);
  }

  return total;
};

console.log(calculateMax([2, 3, -2, 4]));
