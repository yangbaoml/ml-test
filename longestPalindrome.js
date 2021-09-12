//回文字符串
longestPalindrome = (s) => {
  let arr = [];
  let target;
  let ele;
  let repeatEle;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i + 1]) {
      repeatEle = s[i];
    }
    repeatEle = s[0];
  }
  console.log("repeatEle===", repeatEle);
}
let s = "cbbd";
longestPalindrome(s);

longestPalindromeTest = (s) => {
  let arr = s.split("");
  let indexArr = [];
  let haveEle;
  let targetArr = [];
  let target;
  //找到重复的元素
  for (let i = 0; i < arr.length; i++) {
    console.log("arr[i] == arr[i + 1]==", arr[i] == arr[i + 1]);
    haveEle = arr[0];
    if (arr[i] == arr[i + 1]) {
      haveEle = arr[i];
    }
    console.log("haveEle==", haveEle);

  }

  //找到重复元素的索引
  arr.map((item, index) => {
    if (item == haveEle) {
      indexArr.push(index);
    }
  })
  for (let m = 0; m < indexArr.length; m++) {
    for (let n = 0; n < indexArr.length; n++) {
      targetArr.push(s.slice(indexArr[m], indexArr[n] + 1));
      targetArr = Array.from(new Set(targetArr)).filter(m => !!m);
    }
  }
  console.log("targetArr====", targetArr);
  targetArr.map(item => {
    let itemArr = item.split("");
    console.log("itemArr=======", itemArr);
    if (itemArr == itemArr.reverse()) {
      target = item;
    }
  })
  console.log("target===", target);
  return target;
}
let s1 = "cbbdc";
// longestPalindromeTest(s1);