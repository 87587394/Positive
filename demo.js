Array.prototype.myPush = function () {
    for (var i = 0; i < arguments.length; i++){
        this[this.length]=arguments[i]
    }
    return this.length
}
let ary = [12, 3, 5]
var res=ary.myPush(2, 4, 5);
console.log(ary)
