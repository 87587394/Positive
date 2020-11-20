setInterval(function fn() {
    var time = new Date();
    var year = time.getFullYear();
    var month = time.getMonth() + 1;
    var date = time.getDate();
    var day = time.getDay();
    var hours = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds()
    var str = ["日", "一", "二", "三", "四", "五", "六"];
    var days = str[day];
    var res = q(year) + "年" + q(month) + "月" + q(date) + "日" + "星期" + days + q(hours) + "时" + q(minute) + "分" + q(second) + "秒";
    console.log(res)
},1000)
function q(num) {
    if (num < 10) {
        num = "0" + num;
    }
    return num;
}
