
//冒泡排序
function sort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j-1] = temp;
      }
    }

  }

}
let arr1 = [3, 2, 1,10,34,0,89];
sort(arr1);
console.log("arr1===", arr1);