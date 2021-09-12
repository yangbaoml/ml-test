/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let newArr = nums1.concat(nums2).sort((a, b) => a - b);
    console.log("newArr===", newArr);
    let middenNum;
    if (newArr.length == 0) return;
    if (newArr.length % 2 == 0) {
        let middenIndex = newArr.length / 2;
        middenNum =
            (Number((newArr[middenIndex - 1]) + Number(newArr[middenIndex])) / 2)
                .toFixed(5);
    } else {
        let middenIndex = newArr.length == 1 ? 0 : Math.floor(newArr.length / 2);
        middenNum = Number(newArr[middenIndex]).toFixed(5);
    }
    console.log("middenNum===", middenNum);
    return middenNum;
};
let nums1 = [1, 2, 6];
let nums2 = [3, 4, 0, 1];
findMedianSortedArrays(nums1, nums2);