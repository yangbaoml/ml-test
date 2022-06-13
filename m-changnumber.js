let a =1;
let b=2;
//方法1
[a,b]=[b,a];
//方法2
 a=a+b;
 b=a-b;
 a=a-b;
console.log('a====',a,b);