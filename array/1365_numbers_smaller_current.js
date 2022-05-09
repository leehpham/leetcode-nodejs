console.log(smallerNumbersThanCurrent([8,1,2,2,3]));

function smallerNumbersThanCurrent(nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        count++;
      }
    }
    result.push(count);
  }
  return result;
}