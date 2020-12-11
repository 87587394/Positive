let ary = [1, 2, 3, 4];
Array.prototype.myF = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i],i)

    }
}
ary.myF(function (item, index) {
    console.log(item, index);
})



Array.prototype.myM = function (callback) {
    let NewAry = [];
    for (let i = 0; i < this.length; i++) {
        NewAry.push(callback(this[i], i))
    }
    return NewAry;
}
var ary3 = [5, 6, 7, 1, 2];
var res = ary3.myM((item, index) => {
    return item+index
})
console.log(res);

