/**
 * You are given X rupees, and you can buy candies at a rate of 1 rs/candy.
 * Additionally, you can exchange 3 candy wrappers for 1 extra candy.
 * Write a function to find the maximum number of candies you can eat with the given budget.
 */

const calculateCandies = (amount) => {
  let totalCandies = amount;
  let wrappers = amount;

  while (wrappers >= 3) {
    const extraCandies = Math.floor(wrappers / 3);
    totalCandies += extraCandies;

    wrappers = (wrappers % 3) + extraCandies;
  }

  return totalCandies;
};

console.log(calculateCandies(40, 0));
