const generator = require("chinese-address-generator/generator4");
for (let i = 0; i < 100; i++) {
  console.log(generator.fabricateFullAddress());
}
