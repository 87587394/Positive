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