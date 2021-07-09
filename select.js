// 选择排序
function selectSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = arr[i];
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        minIndex = j;
      }
      if (minIndex != i) {
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
      }
    }
  }
}
let arr1 = [3, 2, 1,0,89,9];
selectSort(arr1);
console.log("arr1-----", arr1);