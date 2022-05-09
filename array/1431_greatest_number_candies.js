console.log(kidsWithCandies([2,3,5,1,3], 3));

function kidsWithCandies(candies, extraCandies) {
  const max = candies.reduce((previousValue, currentValue) => {
    return Math.max(previousValue, currentValue);
  }, -Infinity);
  const result = [];
  for (const kidCandies of candies) {
    if (kidCandies + extraCandies >= max) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
}