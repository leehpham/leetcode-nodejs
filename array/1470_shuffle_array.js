console.log(shuffle([1,1,2,2], 2));

function shuffle(nums, n) {
  const shuffledArr = [];
  for (let i = 0; i < n; i++) {
    shuffledArr.push(nums[i]);
    shuffledArr.push(nums[i + n]);
  }
  return shuffledArr;
}