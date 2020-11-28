let ary = [24,25,53,321,34,24];

Array.prototype.myun = function () {
    for (let i = 0; i < this.length - 1; i++){
        for (let j = 0; j < this.length - i - 1; j++) {
            if (this[j] > this[j + 1]) {
                let res = this[j];
                this[j] = this[j + 1];
                this[j + 1] = res;
            }
        }
    }
    // let obj = [];
    // for (let n = 0; n < this.length; n++){
    //     if (obj.indexOf(this[n])==-1) {
    //         obj.push(this[n])
    //     }
    // }
    // return obj
    for (let n = 0; n < this.length-1; n++){
        for (let m = n + 1; m < this.length; m++){
            if (this[n] == this[m]) {
                this.splice(m, 1);
                m--;
            }
        }
    }
}
ary.myun()
console.log(ary)