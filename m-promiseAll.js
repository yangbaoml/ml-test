/**
 * 所有成功之后成功
 */
async function PromiseAll(array) {
  const values = [];
  return new Promise((resolve, reject) => {
    let times = array.length;
    for (let promise of array) {
      promise.then((res) => {
        console.log("成功", res);
        times--;
        values.push(res);
        times || resolve(values);
      }).catch((err) => {
        console.log("失败")
        reject(err);
      })
    }
  });
}
PromiseAll([
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("执行第一个任务");
      resolve(1);
    }, 5000);
  }),
  new Promise((resolve, reject) => {
    reject(2);
  })
])
  .then(res => {
    console.log("all-res", res);
  })
  .catch(err => {
    console.log("err", err);
  })