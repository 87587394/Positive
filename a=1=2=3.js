var a = {
    n: 0,
    toString: function () {
        return ++this.n
    
    }
}
if (a == 1 && a == 2 && a == 3) {
    console.log('ok')
}

var b = [1, 2, 3];
b.toString = b.shift;
if (b == 1 && b == 2 && b == 3) {
    console.log('ok')
}