var ary = [24, 53, 25, 61, 16];
function fn() {
    var NewAry = [];
    NewAry.push(ary[0]);
    for (i = 1; i < ary.length; i++){
        for (j = NewAry.length - 1; j >= 0; j--){
            if (ary[i] >= NewAry[j]) {
                NewAry.splice(j + 1, 1, ary[i]);
                break;
            }
            if (j == 0) {
                NewAry.unshift(ary[i]);
            }
        }
    }
    return NewAry
}
console.log(fn(ary))