"use strict";

// const s = ["h","e","l","l","o"];
// reverseString(s);
// console.log(s);

const s = ["H","a","n","n","a","h"];
reverseString(s);
console.log(s);

function reverseString(s) {
  const mid = Math.floor(s.length / 2);
  for (let i = 0; i < mid; i++) {
    const temp = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = temp;
  }
}