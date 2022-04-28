console.log(targetIndices([1,2,5,2,3], 2));

function targetIndices(nums, target) {
  let numSmaller = 0;
  let frequency = 0;
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < target) {
      numSmaller++;
    }
    if (nums[i] === target) {
      frequency++;
    }
  }

  if (frequency === 0) {
    return [];
  }

  for (let i = 0; i < frequency; i++) {
    result.push(numSmaller + i);
  }
  return result;
}

