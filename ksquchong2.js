var ary = [1, 2, 3, 4, 3, 2, 1];
function fn(ary) {
    var obj = {};
    for (var i = 0; i < ary.length; i++){
        var n = ary[i];
        if (obj[n] == n) {
            ary.splice(i, 1);
            i--;
        }
        obj[n] = n;
    }
    return ary
}
console.log(fn(ary))