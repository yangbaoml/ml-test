function all(arr) {
  let value = [];
  let total = arr.length;
  for (let promise of arr) {
    return new Promise((resolve, reject) => {
      promise
        .then((val) => {
          value.push(val);
          total--;
          total || resolve(value);
        })
        .catch((err) => reject(err));
    });
  }
}
