// 简单实现剪刀石头布
var playerAction = process.argv[process.argv.length - 1];
let random = Math.random() * 3;
console.log('random=====', random);
if (random < 1) {
    var computerAction = 'rock';
} else if (random > 2) {
    var computerAction = 'scissor';

} else {
    var computerAction = 'paper';
}
if (playerAction == computerAction) {
    console.log('平局');
} else if (playerAction == 'rock' && computerAction == 'scissor'
    || playerAction == 'scissor' && computerAction == 'paper'
    || playerAction == 'paper' && computerAction == 'rock') {
    console.log('赢了');

} else {
    console.log('输了');

}