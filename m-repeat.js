//手写字符串重复字数
function repeat(s, n) {
  return (new Array(n + 1)).join(s);
}
console.log('repeat===',repeat('ml',3));
console.log('===',new Array(2).fill('ml').join(''));