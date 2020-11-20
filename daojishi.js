var box = document.getElementById('box');
function fn(tt) {
    var nowTime = new Date();
    var Target = new Date(tt);
    var cha = Target - nowTime;
    var hours = Math.floor(cha / 1000 / 60 / 60);
    var minutes = Math.floor((cha - hours * 1000 * 60 * 60) / 1000 / 60);
    var seconds = Math.floor((cha - hours * 1000 * 60 * 60 - minutes * 1000 * 60) / 1000);
    var result = zero(hours) + "时" + zero(minutes) + "分" + zero(seconds) + "秒";
    if (cha <= 0) {
        return "over";
        clearInterval(blo);
        blo = null;
    }
    return result;
}
var newD="2020-11-20 14:24:00"

var blo=setInterval(() => {
    box.innerText = fn(newD);
}, 1000);

function zero(num) {
    if (num < 10) {
        num = "0" + num;
    }
    return num;
}






