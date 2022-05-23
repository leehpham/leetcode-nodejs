console.log(restoreString("codeleet", [4,5,6,7,0,2,1,3]));

function restoreString(s, indices) {
  const shuffledArr = Array(s.length).fill("");
  for (let i = 0; i < indices.length; i++) {
    shuffledArr[indices[i]] = s[i];
  }
  return shuffledArr.join("");
}



