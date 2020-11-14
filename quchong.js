var ary = [1, 2, 3, 4, 3, 2, 1]
function fn(ary) {
    for (i = 0; i < ary.length - 1; i++) {
        for (j = i + 1; j < ary.length; j++) {
            if (ary[i] == ary[j]) {
                ary.splice(j, 1);
                i--;
            }
        }
    }
    return ary
}
console.log(fn(ary))
// 方法一
function qz(ary) {
    var obj = {};
    for (i = 0; i < ary.length; i++) {
        var n = ary[i];
        if (typeof (obj[n]) != "undefined") {
            ary.splice(i, 1);
            i--;
        }
        else {
            obj[n] = n;
        }
    }
    return ary
}
console.log(qz(ary))
// 方法二
var obj = [];
function qzz() {
    for (i = 0; i < ary.length; i++) {
        if (obj.indexOf(ary[i]) == -1) {
            obj.push(ary[i]);
        }
    }
    return obj
}
console.log(qzz(ary))
//方法三