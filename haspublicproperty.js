function Fn(name,age) {
    this.name=name,
    this.age=age
}
f1 = new Fn('lili', 18);

function pub(public) {
    if (public in this) {
        if (!this.hasOwnProperty(public)) {
            return true
        }
        
    }
    return false;
}
// f1.__proto__.public = pub;
Fn.prototype.public = pub;
console.log(f1.public('toString'))

