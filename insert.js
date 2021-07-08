//插入排序
function insert(arr) {
  for (let unOderIndex = 1; unOderIndex < arr.length; unOderIndex++) {
    for (let orderIndex = unOderIndex - 1; orderIndex >= 0; orderIndex--) {
      if (arr[unOderIndex] < arr[orderIndex]) {
        let temp = arr[orderIndex];
        arr[orderIndex] = arr[unOderIndex];
        arr[unOderIndex] = temp;

        unOderIndex = orderIndex;
      }
    }
  }
}
let arr1 = [3, 2, 1, 5, 90, 78, 6, 0];
insert(arr1);
console.log("arr1===", arr1);