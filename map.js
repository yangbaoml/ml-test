 function myFlat (arr, depth) {
  let source = [];
  (function flat(arr, depth) {
    arr.forEach((item) => {
      if (Array.isArray(item) && depth > 0) {
        flat(item, depth - 1);
      } else {
        source.push(item);
      }
    });
  })(arr, depth);
  return source;
};

console.log('my======',new Date('2020-12-01').getDate());


