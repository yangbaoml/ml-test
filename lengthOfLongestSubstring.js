
//无重复字符的最长子串 --方法1(字符串过长超时，不可取)
var lengthOfLongestSubstring = function (s) {
  if (s.length == 0) return 0;
  let arr = s.split("");
  let targetlengthArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <= arr.length; j++) {
      let targetArr = arr.slice(i, j);
      let set = Array.from(new Set(targetArr));
      if (targetArr.length == set.length) {
        targetlengthArr.push(targetArr.length);
      }
    }
  }
  return Math.max(...targetlengthArr);
};
let s = "abcabciougiuguyi";
lengthOfLongestSubstring(s);
//无重复字符的最长子串 --方法2
var lengthOfLongestSub = function (s) {
  let arr = [];
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    let index = arr.indexOf(s[i]);
    if (index !== -1) {
      arr.splice(0, index + 1);
    }
    arr.push(s[i]);
    max = Math.max(arr.length, max);
  }
  return max;
}
let s1 = "abcabcbb";
lengthOfLongestSub(s1);