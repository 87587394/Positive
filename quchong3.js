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