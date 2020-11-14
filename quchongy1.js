var ary = [1, 3, 2, 5,1,6,2]
function fn() {
    for (var i = 0; i < ary.length - 1; i++){
        for (var n = i + 1; n < ary.length; n++){
            if (ary[i] == ary[n]) {
                ary.splice(n, 1);
                n--;
            }
        }
    }
    return ary
}
console.log(fn(ary))