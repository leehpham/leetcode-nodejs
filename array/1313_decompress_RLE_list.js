console.log(decompressRLElist([1,2,3,4]));

function decompressRLElist(nums) {
  const decompressed = [];
  for (let i = 0; 2 * i + 1 < nums.length; i++) {
    for (let j = 0; j < nums[2 * i]; j++) {
      decompressed.push(nums[2 * i + 1]);
    }
  }
  return decompressed;
}