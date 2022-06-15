// 方法一,数值大性能不好
function fibonacci(n){
    if (n == 1 || n == 2) {
        return 1
    };
    return fibonacci(n - 2) + fibonacci(n - 1);
}
console.log('----fibonacci(30)',fibonacci(3))
// 方法二,性能好
function fib(n) {
    let current = 0;
    let next = 1;
    for(let i = 0; i < n; i++) {
        [current, next] = [next, current + next];
    }
    return current;
}
console.log('====fib',fib(1000));
