/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbersTest = (l1, l2) => {
  let s = [];
  let maxLength;
  let unArr = [];
  if (l1.length >= l2.length) {
    maxLength = l1.length;
    unArr = l2;
  } else {
    maxLength = l2.length;
    unArr = l1;
  }
  for (let i = 0; i < maxLength; i++) {
    if (unArr[i] == undefined) {
      unArr[i] = 0;
    }
    let num = l1[i] + l2[i];
    s.push(num);
  }
  if (s.length == maxLength) {
    for (let j = 0; j < maxLength; j++) {
      if (s[j] >= 10) {
        s[j] = s[j] % 10;
        if (s[j + 1] == undefined) {
          s[j + 1] = 0;
        }
        s[j + 1] += 1;
      }
    }
  }
  console.log("s===", s);
  return s;
};
// let l1 = [9, 9, 9, 9, 9, 9, 9];
// let l2 = [9, 9, 9, 9];
// addTwoNumbersTest(l1, l2);

addTwoNumbers = (l1, l2) => {
  let target;
  let numL1 = Number(l1.join(""));
  let numL2 = Number(l2.join(""));
  let sum = numL1 + numL2;
  target = String(sum).split("").map(item => Number(item)).reverse();
  console.log("target===", target);
  return target;

}
let l1 = [0, 0, 0];
let l2 = [5, 6, 4];
addTwoNumbers(l1, l2);