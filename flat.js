function flatten(array, depth) {
  let arr = [];
(function flat(array, depth){
  array.forEach((item) => {
    if (Array.isArray(item) && depth > 0) {
      flat(item, depth - 1);
    } else {
      arr.push(item);
    }
  });
})(array, depth)
  return arr;
}
flatten([1, [2, [3, [4]], 5]], 3);
