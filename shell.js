// function shellSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {

//   }
// }


function shellSort(arr) {
  for (let gap = arr.length >> 1; gap > 0; gap >>= 1) {
    for (let i = gap; i < arr.length; i++) {
      let temp = arr[i];
      for (let j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j];
      }
      arr[j + gap] = temp;
    }
  }
  return arr;
};
let arr1 = [3, 2, 1];
shellSort(arr1);
console.log("arr1---", arr1);