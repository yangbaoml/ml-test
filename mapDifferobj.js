let m = new Map();
m.set({}, 1);
m.set(123, 2);
m.set("three", 3);
m.set(456, 2);
console.log(m.size);
console.log(m);
let o = new Object();
o["s"] = 2;
o["count"] = 1;
o["1"] = 1;
o["3"] = 2;
o["2"] = 2;
console.log(o);

for (let [key, value] of m) {
  console.log(key, value);
}

for (let key in o) {
  console.log(o);
  console.log(key, o[key]);
}

