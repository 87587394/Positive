var ary = [12, 53, 5326, 43, 643, 643, 6];
function fn(ary) {
    if (ary.length <= 1) {
        return ary;
    }

    var centerIndex = Math.floor(ary.length / 2);
    var centerValue = ary.splice(centerIndex, 1)[0];
    var leftAry = [], rightAry = [];
    for (i = 0; i < ary.length; i++) {
        if (ary[i] < centerValue) {
            leftAry.push(ary[i]);
        }
        else {
            rightAry.push(ary[i]);
        }
    }
    return fn(leftAry).concat(centerValue, fn(rightAry))
}
console.log(fn(ary))