var ary = [4, 3, 2, 1];
function fn(ary) {
    for (i = 0; i < ary.length-1; i++){
        for (j = 0; j < ary.length - 1; j++){
            if (ary[j] > ary[j + 1]) {
                var item = ary[j];
                ary[j] = ary[j + 1];
                ary[j + 1] = item;
            }
        }
    }
    return ary
}
console.log(fn(ary))