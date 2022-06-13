let res = new Array(100).fill('').map((_, index) => index + 1)
        .filter(item => /0/.test(item))  // 返回包含零的
        .reduce((count, item) => {   // 计数  初始值0
            console.log('item===',item,String(item).match(/0/g));
            return count + (String(item).match(/0/g) || []).length
            }, 0);
console.log(res);

