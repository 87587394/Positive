let ary = [1, 2, 3, [4, [5, [4, 3, 2, 1], 6, 7]], 8, 9];
Array.prototype.bph=function(){
    let newAry = Array.from(ary.toString().split(','))
    let temp=newAry.map(function (item,index) {
         return Number(item)
     })
    return temp
}



Array.prototype.bph = function () {
    let newAry = [];

    Array.prototype.fn = function () {
        for (let i = 0; i < this.length; i++) {
            if (typeof this[i] === 'number') {
                newAry.push(this[i])
            }
            else {
                this[i].fn();
            }
        }
    }
    this.fn()
    return newAry
}

console.log(ary.bph())
// console.log(ary.bph())

