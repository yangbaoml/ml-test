let jack = {
  name: "jack.ma",
  age: 40,
  like: {
    dog: {
      color: "black",
      age: 3,
    },
    cat: {
      color: "white",
      age: 2,
    },
  },
};
function deepclone(obj) {
  if (!!obj && typeof obj == "object") {
    let targetObj = Array.isArray(obj)?[]:{};
    for(let i in obj){
      targetObj[i]= deepclone(obj[i]);
    }
    return targetObj;
  }
  return obj;
}

let jack2 = deepclone(jack);

//比如修改jack2中的内容，不会影响到jack中的值
jack2.like.dog.color = "green";
console.log(jack.like.dog.color); //打印出来的应该是 "black"
