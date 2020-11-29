var ary = [1, 2, 3, 4, 3, 2, 1];
function fn() {
    var obj = [];
    for (var i = 0; i < ary.length; i++){
        if (obj.indexOf(ary[i]) == -1) {
            obj.push(ary[i])
        }
    }
    return obj
}
console.log(fn(ary))