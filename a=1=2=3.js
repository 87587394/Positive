var a = {
    n: 0,
    toString: function () {
        return ++this.n
    
    }
}
if (a == 1 && a == 2 && a == 3) {
    console.log('ok')
}