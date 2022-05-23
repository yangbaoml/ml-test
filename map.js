//手写map
function myMap(fn, thisValue) {
  if (typeof fn !== "function") {
    throw new Error("这不是一个函数");
  }
  if ([undefined, null].includes(fn)) {
    throw new Error("值为undefined或者null");
  }
  let arr = this;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = fn.bind(thisValue, arr[i], i, arr);
  }
  return newArr;
}
//手写foreach
function myForeach(fn, thisValue) {
  if (typeof fn !== "function") {
    throw new Error("这不是一个函数");
  }
  if ([undefined, null].includes(fn)) {
    throw new Error("值为undefined或者null");
  }
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    fn.bind(thisValue, arr[i], i, arr);
  }
}
