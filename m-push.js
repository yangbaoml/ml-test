//手写push
Array.prototype.push = function () {
  let arr = this;
  let args = Array.prototype.slice.call(arguments);
  for (let i = 0; i < args.length; i++) {
    arr[arr.length] = args[i];
  }
};